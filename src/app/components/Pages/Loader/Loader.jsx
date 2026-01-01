"use client"


import "./loader.css"
import React, { useContext, useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from 'gsap/SplitText';
import { GlobalContext } from "@/app/Context/Context";




gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText)

const Loader = () => {

    const { loading, setLoading } = useContext(GlobalContext)


    let counter = { value: 0 }


    const loadref = useRef()
    const loadpercentref = useRef()
    const loadcontainerref = useRef()


    useGSAP(() => {

        document.fonts.ready.then(() => {
            const t1 = gsap.timeline({
                onComplete: () => {
                    gsap.set(".loadbox", {
                        clearProps: "transform"
                    })
                }
            })

            t1.to(loadref.current, {
                display: "block",
                width: "100%",
                duration: 3,
                ease: "power4.inOut",
            })
                .to(counter, {
                    value: 100,
                    duration: 3,
                    ease: "power4.inOut",
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
                        setLoading(true)
                        loadcontainerref.current.style.display = "none"
                        ScrollTrigger.refresh();
                    }
                })
        })

    }, [])


    return (
        <div ref={loadcontainerref} className='loadercontainer'>
            <div ref={loadref} className='loadbox'>
            </div>
            <div className="loadpercent" ref={loadpercentref}>
            </div>
        </div>
    )
}

export default Loader
