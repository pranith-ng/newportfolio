"use client"

import "./about.css"
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Climate_Crisis, Coiny, Poppins, Titan_One } from "next/font/google";


const climateCrisis = Climate_Crisis({
  subsets: ['latin'],
  weight: ['400'], // add other weights if needed
});
const Coinyfont = Coiny({
  subsets: ['latin'],
  weight: ['400'], // add other weights if needed
});
const poppinspfont = Poppins({
  subsets: ['latin'],
  weight: ['400'], // add other weights if needed
});
const titanone = Titan_One({
  subsets: ['latin'],
  weight: ['400'], // add other weights if needed
});




const text = "I’m a self-taught front-end developer with a passion for creating visually appealing and user-friendly websites. My journey began with curiosity and a desire to understand how web pages are built. Through online resources, hands-on projects, and constant experimentation, I’ve developed my skills in HTML, CSS, JavaScript, and frameworks like React, Next.js, and Tailwind CSS. For the back-end, I’ve worked with Firebase and Supabase to create dynamic, data-driven applications. I enjoy solving problems, learning new technologies, and turning creative ideas into functional websites. My goal is to always deliver clear, responsive, and engaging web experiences."

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText, ScrollTrigger)



const About = () => {

  const textRef = useRef()
  const animationheadingref = useRef()


  useGSAP(() => {
    let split = SplitText.create(textRef.current, {
      type: "words, chars"
    })

    let split2 = SplitText.create(".animation_heading",{
      type: "chars"
    })
    // gsap.set(".animation_text", {
    //   display: "block"
    // })


    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".animation_container",
        start: "top top",
        end: "500%",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        // anticipatePin: 1,
        // invalidateOnRefresh: true,
        // markers: true,
      },
    });

    tl.from(split2.chars,{
        y: '80%',
        opacity: 1,
        rotationZ: "20",
        duration: 1,
        ease: "back.in(2)",
        stagger: 0.2
    })

    tl.to(".animation_heading", {
      fontSize: "3.5rem",
      color: "#c5e384",
      duration: 3
    })
    tl.fromTo(split.words,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power1.in",
      },)

    tl.to({}, { duration: 2 })
  }, [])

  return (
    <div className='animation_container'>
      <div className="animation_pin_container">
        <div className={`animation_heading_container`}>
          <span ref={animationheadingref} className={`${climateCrisis.className} animation_heading`}>About</span>
        </div>
        <div className='animation_contentcontainer'>
          <p className={`${titanone.className} animation_text`}
            ref={textRef}>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default About

