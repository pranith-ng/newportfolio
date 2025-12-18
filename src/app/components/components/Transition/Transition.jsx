"use client"

import "./transition.css"

import React, { useContext, useImperativeHandle, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRouter } from "next/navigation"
import { GlobalContext } from "@/app/Context/Context"

const Transition = () => {

    const { transitionloading, settransitionLoading } = useContext(GlobalContext)
    const {pagelink, setpagelink} = useContext(GlobalContext)
    const router = useRouter();
    const tl = useRef(gsap.timeline({ paused: true }))

    useGSAP(() => {

        if (transitionloading && pagelink !== null) {

            console.log(transitionloading, pagelink)

            const tl2 = gsap.timeline()

            tl2.to(".smallbox_2", { duration: 0.2 })
            tl2.set(".transition_container_2", {
                display: "flex"
            })
            tl2.to(".smallbox_2", {
                scaleY: 1,
                duration: 0.8,
                stagger: {
                    each: 0.1,
                    from: "start",
                },
                onComplete: () => {
                    router.push(pagelink)
                    tl2.set(".transition_container_2", {
                        display: "none"
                    })
                    setpagelink(null)
                    settransitionLoading(false)
                }
            })

        }

    }, [pagelink, transitionloading])


    return (
        <div className='transition_container_2'>
            <div className='smallbox_2'></div>
            <div className='smallbox_2'></div>
            <div className='smallbox_2'></div>
            <div className='smallbox_2'></div>
            <div className='smallbox_2'></div>
            <div className='smallbox_2'></div>
            <div className='smallbox_2'></div>
            <div className='smallbox_2'></div>
            <div className='smallbox_2'></div>
            <div className='smallbox_2'></div>       
        </div>
    )
}

export default Transition
