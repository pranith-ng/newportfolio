"use client"


import "./loader.css"
import React, {useRef} from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText)

const Loader = () => {

    let counter = { value: 0 }


    const loadref = useRef()
    const loadpercentref = useRef()
    const loadcontainerref = useRef()


    useGSAP(() => {

        let split = SplitText.create(".main_heading", {
            type: "words, chars"
        })


        document.fonts.ready.then(() => {
            const t1 = gsap.timeline()

            t1.to(loadref.current, {
                display: "block",
                width: "100%",
                duration: 3,
                ease: "power4.in"
            })
                .to(counter, {
                    value: 100,
                    duration: 3,
                    ease: "power4.in",
                    onUpdate: () => {
                        loadpercentref.current.innerHTML = `${Math.floor(counter.value)}%`
                    }
                }, 0)
                .to(loadpercentref.current, {
                    opacity: 0,
                    duration: 1,
                    ease: "power4.in",
                    onComplete: () => {
                        loadpercentref.current.style.display = "none"
                    }
                })
                .to(loadref.current, {
                    height: "100vh",
                    duration: 1.2,
                    ease: "power4.in"
                })
                .to(loadcontainerref.current, {
                    height: 0,
                    duration: 1,
                    ease: "power4.in",
                    onComplete: () => {
                        loadcontainerref.current.style.display = "none"
                        ScrollTrigger.refresh();
                    }
                })                
        })

    })


    return (
        <div ref={loadcontainerref} className='loadercontainer'>
            <div ref={loadref} className='loadbox'>
            </div>
            <div className="loadpercent"  ref={loadpercentref}>
            </div>
        </div>
    )
}

export default Loader
