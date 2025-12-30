"use client"

import "./about.css"
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const text = "I’m a self-taught front-end developer with a passion for creating visually appealing and user-friendly websites. My journey began with curiosity and a desire to understand how web pages are built. Through online resources, hands-on projects, and constant experimentation, I’ve developed my skills in HTML, CSS, JavaScript, and frameworks like React, Next.js, and Tailwind CSS. For the back-end, I’ve worked with Firebase and Supabase to create dynamic, data-driven applications. I enjoy solving problems, learning new technologies, and turning creative ideas into functional websites. My goal is to always deliver clear, responsive, and engaging web experiences."

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText, ScrollTrigger)


const About = () => {

  const textRef = useRef()


  useGSAP(() => {


    let split2 = SplitText.create(".animation_heading", {
      type: "chars"
    })

    let split = SplitText.create(".animation_text", {
      type: "words"
    })

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".animation_container",
        start: "top top",
        end: "700%",
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    })

    tl.from(split2.chars, {
      y: '45vh',
      rotationZ: "20",
      duration: 2,
      ease: "back.inOut(2)",
      stagger: 0.2
    })

      .to(".animation_heading", {
        fontSize: "clamp(2.3rem, 4vw, 3.5rem)",
        color: "#c5e384",
        duration: 3,
      })
     
      .from(split.words,
        {
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power4.in",
        },)

      .to({}, { duration: 2 })


  }, [])

  return (
    <div id="About">
      <div className='animation_container'>
        <div className="animation_pin_container">
          <div className={`animation_heading_container`}>
            <span className={"animation_heading"}>About</span>
          </div>
          <div className='animation_contentcontainer'>
            <p className="animation_text">{text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

