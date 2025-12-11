"use client"

import "./contact.css"
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from 'gsap/SplitText';
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, SplitText);

const Contact = () => {



    const logos = [
        { name: "Gmail", svg: "/contact_logos/gmail.svg" },
        { name: "LinkedIn", svg: "/contact_logos/linkedin.svg" },
        { name: "Github", svg: "/contact_logos/github-white.svg" },
    ]

    useGSAP(() => {

        let split = SplitText.create(".contact_heading", {
            type: "chars, words"
        })

        let splitlogopara = SplitText.create(".logo_box_small_container",
            {
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
                end: "500%",
                scrub: true,
                pin: true,
                pinSpacing: true,
            }
        })
            .from(split.chars, {
                y: '240%',
                opacity: 1,
                rotationZ: "20",
                duration: 1,
                ease: "back.in(2)",
                stagger: 0.2
            })
            .to(".contact_heading", {
                fontSize: "8vw",
                color: "#c5e384",
                duration: 3
            })
            .to(".logo_box_small_container img", {
                opacity: 1,
                scale: 1,
                x: 0,
                duration: 1,
                stagger: 1
            })
            .to(".logo_box_small_container p", {
                opacity: 0.9,
            })
            .from(splitlogopara.chars, {
                opacity: 0,
                y: 100,
                duration: 1,
                stagger: {
                    each: 0.2,
                    from: "center"
                },
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
            .from(".form_box_container > *:nth-child(1)", { x: -300, opacity: 0, duration: 1 }) // input1
            .from(".form_box_container > *:nth-child(2)", { x: 300, opacity: 0, duration: 1 }, "<") // input2, "<" starts at same time as previous (or remove "<" to sequence)
            .from(".form_box_container > *:nth-child(3)", { y: 200, opacity: 0, duration: 1 }) // textarea animates after first two
            .from(".form_box_container button ",{ y: 200, opacity: 0, duration: 1 })

    })

    return (
        <div className='contact_container'>
            <h1 className='contact_heading'>Let's connect</h1>
            <div className='logo_box'>
                {logos.map((item, index) => (
                    <div className='logo_box_small_container' key={index}>
                        <img src={item.svg} alt="" />
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
            <p className='contact_heading_2'>Feel free to contact me for opportunities, collaboration, or just to say hi. </p>
            <div className='form_box_container'>
                <input type="text" placeholder='enter your name...' />
                <input type="email" placeholder='enter your email...' />
                <textarea type="message" placeholder='enter your message...' />
                <div className="submit_button_container">
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
