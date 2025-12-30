"use client"

import "./contact.css"
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger, SplitText);

const Contact = () => {

    const gmailId = "pranithpoojari1@gmail.com"
    const fixed_boxtl = useRef(null)
    const [buttonText, setButtonText] = useState("")
    const logos = [
        { name: "Gmail", svg: "/contact_logos/gmail.svg" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/pranith-ng", svg: "/contact_logos/linkedin.svg" },
        { name: "Github", url: "https://github.com/pranith-ng", svg: "/contact_logos/github-white.svg" },
    ]


    const logoMouseClick = (itemname, itemurl) => {
        const name = itemname.toLowerCase()
        if (name === "gmail") {
            navigator.clipboard.writeText(gmailId)
                .then(() => setButtonText("GMAIL COPIED TO CLIPBOARD"))
                .catch(err => console.error("failed to copy:", err))
        }
        else {
            window.open(itemurl, '_blank', 'noopener,noreferrer');
        }
    }

    const isMobile = () => (
        window.matchMedia("(pointer: coarse)").matches ||
        window.innerWidth <= 768
    );

    const logoMouseEnter = (event) => {

        if (isMobile()) return;
        const box = event.currentTarget
        const image = box.querySelector("img")
        const para = box.querySelector("p")

        const splitpara = new SplitText(para, {
            type: "chars"
        })

        gsap.to(image, {
            scale: 1.1,
            x: -10,
            duration: 0.4,
            ease: "power2.out"
        })
        gsap.from(splitpara.chars, {
            opacity: 0,
            y: 100,
            rotationZ: "80",
            duration: 0.2,
            stagger: {
                each: 0.05,
            },
            ease: "power.out(1.6)",
            onStart: () => {
                gsap.to(splitpara.chars, {
                    color: "#00aeffff"
                })
            }
        })
    }

    const logoMouseLeave = (event) => {

        if (isMobile()) return;
        const box = event.currentTarget
        const image = box.querySelector("img")
        const para = box.querySelector("p")

        const splitpara = new SplitText(para, {
            type: "chars"
        })

        gsap.to(image, {
            scale: 1,
            x: 0,
            duration: 0.4,
            ease: "power2.out"
        })
        gsap.from(splitpara.chars, {
            opacity: 0,
            y: -100,
            rotationZ: "80",
            duration: 0.2,
            stagger: {
                each: 0.05,
            },
            ease: "power.out(1.6)",
            onStart: () => {
                gsap.to(splitpara.chars, {
                    color: "#ffffff",
                })
            }
        })
    }



    const buttonOnEnter = () => {

        if (isMobile()) return;

        const buttonsplit = new SplitText(".submit_button_container button", {
            type: "chars"
        })
        gsap.to(".submit_button_container button", {
            scale: 1.1,
            backgroundColor: "#c5e384",
            duration: 0.3,
            ease: "power4.out"
        })
        gsap.from(buttonsplit.chars, {
            y: 100,
            duration: 0.3,
            stagger: 0.05,

        })
    }

    const buttonOnLeave = () => {

        if (isMobile()) return;

        const buttonsplit = new SplitText(".submit_button_container button", {
            type: "chars"
        })
        gsap.to(".submit_button_container button", {
            scale: 1,
            backgroundColor: "#ffffff",
            duration: 0.3,
            ease: "power4.in"

        })
        gsap.from(buttonsplit.chars, {
            y: -100,
            duration: 0.3,
            stagger: 0.05

        })
    }

    const buttonOnClick = (event) => {
    
        const button = event.currentTarget
    
        const tlbutton = gsap.timeline()
    
        tlbutton.to(button, {
          scale: 0.9,
          duration: 0.2,
          ease: "power4.out"
    
        })
        tlbutton.to(button, {
          scale: 1,
          duration: 0.2,
          ease: "power4.in"
    
        })
      }


    const onFormSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            setButtonText("PLEASE FILL ALL FIELDS");
            return;
        }


        setButtonText("SUBMITTING");

        const charsplit = new SplitText(".Fixed_box p", {
            type: "chars"
        })
        // GSAP wave
        gsap.fromTo(
            charsplit.chars,
            { y: 0 },
            {
                y: -6,
                stagger: 0.05,
                repeat: -1,
                yoyo: true,
                duration: 0.1,
            }
        );

        const formData = new FormData(event.target);
        formData.append("access_key", process.env.NEXT_PUBLIC_API_URL);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        gsap.killTweensOf(charsplit);

        if (data.success) {
            setButtonText("SENT");
            event.target.reset();
        } else {
            setButtonText("ERROR");
        }
    };

    useEffect(() => {

        if (buttonText !== "") {
            fixed_boxtl.current.restart()
            fixed_boxtl.current.play()
        }

    }, [buttonText])

    useGSAP(() => {

        fixed_boxtl.current = gsap.timeline({
            paused: true,
            onComplete: () => setButtonText("")
        })

        fixed_boxtl.current.to(".Fixed_box", {
            scaleY: 1,
            duration: 0.5,
            ease: "power4.out"
        })
            .from(".Fixed_box p", {
                y: 100,
                opacity: 0,
                duration: 0.5,
                ease: "power4.out"
            })
            .to(".Fixed_box", {
                duration: 4,
            })
            .to(".Fixed_box", {
                scaleY: 0,
                duration: 0.5,
                ease: "power4.out"
            })


        let split = SplitText.create(".contact_heading", {
            type: "chars, words"
        })

        let splitlogopara = SplitText.create(".logo_box_small_container p", {
            type: "chars"
        })

        let splitpara = SplitText.create(".contact_heading_2", {
            type: "words"
        })


        gsap.set(".logo_box_small_container img", {
            scale: 0.8,
            x: -60,
        },)
        gsap.set(".contact_heading", {
            opacity: 1,
        })

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".contact_container",
                start: "top top",
                end: "700%",
                scrub: true,
                pin: true,
                pinSpacing: true,
            }
        })
        tl.from(split.chars, {
            y: '65vh',
            opacity: 1,
            rotationZ: "20",
            duration: 2,
            ease: "back.inOut(2)",
            stagger: 0.2
        })
            .to(".contact_heading", {
                // fontSize: "clamp(2rem, 8vw, 4rem)",
                fontSize: "clamp(2rem, 8vw, 8rem)",
                color: "#c5e384",
                duration: 3
            })
            .to(".logo_box_small_container img", {
                opacity: 1,
                scale: 1,
                x: 0,
                duration: 1,
                stagger: 1,
                ease: "power4.out"
            })

            .from(".logo_box_small_container p", {
                opacity: 0,
                y: 100,
                duration: 1.5,
                stagger: 1,
                ease: "back.out(1.6)",
            })
            .to(".contact_heading_2", {
                opacity: 0.9
            })
            .from(splitpara.words, {
                opacity: 0,
                y: 100,
                rotationZ: "80",
                duration: 1,
                stagger: {
                    each: 0.2,
                },
                ease: "power.out(1.6)",

            })
            .to(".form_box_container", {
                opacity: 1
            })
            .from(".form_box_container > *:nth-child(1)", { x: -300, opacity: 0, duration: 1, ease: "power4.out" }) // input1
            .from(".form_box_container > *:nth-child(2)", { x: 300, opacity: 0, duration: 1, ease: "power4.out" }, "<") // input2, "<" starts at same time as previous (or remove "<" to sequence)
            .from(".form_box_container > *:nth-child(3)", { y: 200, opacity: 0, duration: 1, ease: "power4.out" }) // textarea animates after first two
            .from(".submit_button_container", { yPercent: 200, opacity: 0, duration: 1, ease: "power4.out" })

    }, [])


    return (
        <div id="Contact" className='contact_container'>
            <h1 className='contact_heading'>Let's connect</h1>
            <div className='logo_box'>
                {logos.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => logoMouseClick(item.name, item.url)}
                        onMouseEnter={(event) => logoMouseEnter(event)}
                        onMouseLeave={(event) => logoMouseLeave(event)}
                        className='logo_box_small_container'>
                        <img src={item.svg} alt="" />
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
            <p className='contact_heading_2'>Feel free to contact me for opportunities, collaboration, or just to say hi. </p>
            <form onSubmit={(event) => onFormSubmit(event)} className='form_box_container'>
                <input autoComplete="off" type="text" name="name" placeholder='enter your name...' />
                <input autoComplete="off" type="email" name="email" placeholder='enter your email...' />
                <textarea autoComplete="off" name="message" placeholder='enter your message...' />
                <div
                    className="submit_button_container">
                    <button
                        type="submit"
                        onClick={(event) => buttonOnClick(event)}
                        onMouseEnter={buttonOnEnter}
                        onMouseLeave={buttonOnLeave}
                    >SUBMIT</button>
                </div>
            </form>
            <div className="Fixed_box">
                <p>{buttonText}</p>
            </div>
        </div>
    )
}

export default Contact
