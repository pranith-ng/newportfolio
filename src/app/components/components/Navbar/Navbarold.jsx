



'use client'
import "./navbar.css"
import React, { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(useGSAP, SplitText, ScrollToPlugin, ScrollTrigger);

const Navbar = () => {
    const tl = useRef(null);
    const listRefs = useRef([]);
    const splitRefs = useRef([]);

    const isTouch =
        typeof window !== "undefined" &&
        ("ontouchstart" in window || navigator.maxTouchPoints > 0);

    const links = [
        { name: "Home", linkurl: "Home" },
        { name: "About", linkurl: "About" },
        { name: "Skills", linkurl: "Skills" },
        { name: "Projects", linkurl: "Work" },
        { name: "Contact", linkurl: "Contact" },
    ];

    const goTo = (id) => {
        ScrollTrigger.refresh();
        gsap.to(window, {
            duration: 0.4,
            ease: "power2.out",
            scrollTo: { y: document.getElementById(id), autoKill: true }
        });
    };

    const linkOnMouseEnter = (event) => {
        const li = event.currentTarget

        const splitpara = new SplitText(li, {
            type: "chars"
        })

        gsap.from(splitpara.chars, {
            y: 100,
            stagger: {
                each: 0.08,
                from: "center"
            },
            duration: 0.2,
            ease: "back.out(2)",
            onStart: () => {
                gsap.to(splitpara.chars, {
                    color: "#FF0000",
                })
            }
        })
    }

    const linkOnMouseLeave = (event) => {
        const li = event.currentTarget

        const splitpara = new SplitText(li, {
            type: "chars"
        })

        gsap.from(splitpara.chars, {
            y: -100,
            stagger: {
                each: 0.08,
                from: "center"
            },
            duration: 0.2,
            ease: "back.out(2)",
            onStart: () => {
                gsap.to(splitpara.chars, {
                    color: "rgb(223, 203, 204)",
                })
            }
        })
    }



    useGSAP(() => {
        if (typeof window === 'undefined') return;

        ScrollTrigger.config({ ignoreMobileResize: true });
        const split = SplitText.create(".menulinks ul li", { type: "words" });

        tl.current = gsap.timeline({ paused: true })
            .fromTo(".menucontainer", {
                height: 0, width: 0, top: "-300px", right: "-300px", borderRadius: "50%",
            }, {
                height: "100vh", width: "100vw", top: 0, right: 0, borderRadius: "0",
                duration: 0.6, ease: "power4.out"
            })
            .set(".menulinks", { display: "block" })
            .from(split.words, {
                y: 40, opacity: 0, stagger: 0.06, duration: 0.2,
            });

        return () => split.revert();
    });

    const linkclick = (linkurl) => {
        tl.current?.reverse();
        const t = gsap.timeline();
        t.set(".transition_container", { display: "flex" })
            .fromTo(".smallbox", { scaleY: 0 }, {
                scaleY: 1, duration: 0.6, stagger: 0.08,
                onComplete: () => goTo(linkurl)
            })
            .to(".smallbox", {
                scaleY: 0, duration: 0.6, stagger: { each: 0.08, from: "end" },
                onComplete: () => {
                    gsap.set(".transition_container", { display: "none" });
                    gsap.set(".smallbox", { clearProps: "transform" });
                }
            });
    };

    const controlMenuOpen = () => tl.current?.play();
    const controlMenuClose = () => tl.current?.reverse();

    const hoverScale = (e, scale) => {
        if (isTouch) return;
        gsap.to(e.currentTarget, {
            scale, duration: 0.3, ease: "power4.out", overwrite: "auto"
        });
    };

    return (
        <>
            <div className='transition_container'>
                {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className='smallbox'></div>
                ))}
            </div>

            <div
                className="menubutton"
                onClick={controlMenuOpen}
                onMouseEnter={(e) => hoverScale(e, 1.3)}
                onMouseLeave={(e) => hoverScale(e, 1)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
            </div>

            <div className="menucontainer">
                <div className="menulinks">
                    <div
                        className="closebutton"
                        onClick={controlMenuClose}
                        onMouseEnter={(e) => hoverScale(e, 1.2)}
                        onMouseLeave={(e) => hoverScale(e, 1)}
                    >
                        ✕
                    </div>
                    <ul>
                        {links.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => linkclick(item.linkurl)}
                                onMouseEnter={(event) => linkOnMouseEnter(event)}
                                onMouseLeave={(event) => linkOnMouseLeave(event)}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
