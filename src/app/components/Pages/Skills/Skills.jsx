"use client"

import "./skills.css"
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from 'gsap/SplitText';
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
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



gsap.registerPlugin(useGSAP);
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, SplitText);

const Skills = () => {

  const skill = [
    { name: "HTML", image: "/logos/html-5.png" },
    { name: "CSS", image: "/logos/css-3.png" },
    { name: "JavaScript", image: "/logos/js.png" },
    { name: "React", image: "/logos/react.png" },
    { name: "Next.js", image: "/logos/nextjs.png" },
    { name: "Tailwind CSS", image: "/logos/tailwindcss.png" },
    { name: "GSAP", image: "/logos/gsap.svg" },
    { name: "Firebase", image: "/logos/firebase.png" },
    { name: "Supabase", image: "/logos/supabase.png" },
    { name: "Vercel", image: "/logos/vercel.png" },
    { name: "Git", image: "/logos/git.png" },
    { name: "Github", image: "/logos/github.png" },

  ];


  const containerRef = useRef(null);
  const logocardref = useRef(null)



  useGSAP(() => {


    const lihight = logocardref.current.offsetHeight + "px"
    const liwidth = logocardref.current.offsetWidth + "px"
    const bottom = window.innerHeight
    const left = window.innerWidth

    let split2 = SplitText.create(".skill_heading ", {
      type: "chars"
    })

    let split3 = SplitText.create(".work_card_text_container p ", {
      type: "chars"
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".skill_container",
        start: "top top",
        end: "500%",
        // markers: true,
        scrub: 1,              // smoother
        pin: true,
        // anticipatePin: 1,      // reduces jump
        pinSpacing: true,
        // invalidateOnRefresh: true,
      }
    });


    tl.set(".card_container img", { height: "1.2rem" })
      .set(".card_container p", { opacity: 0, display: "none" })
      .set(".card_container", { width: "40px", height: "40px", borderRadius: "100%", justifyContent: "center" })

      .from(split2.chars, {
        y: '80%',
        opacity: 1,
        rotationZ: "20",
        duration: 1,
        ease: "back.in(2)",
        stagger: 0.2
      })

      .to(".skill_heading", {
        fontSize: "3.5rem",
        color: "#000000",
        duration: 5
      })

      .to(".skill_container", {
        backgroundColor: "#ffffff",
        duration: 1
      }, "<")

      .to(".skillcard_container", {
        opacity: 1,
        duration: 0.4
      })

      .from(".card_container", {
        y: bottom,
        duration: 0.8,
        stagger: {
          each: 0.8,
          from: "random",
          ease: "power1.inOut"
        }
      })



      // EXPAND CARD
      .to(".card_container", {
        width: liwidth,
        height: lihight,
        borderRadius: "5px",
        duration: 0.4,
        stagger: { each: 0.8, from: "random" }
      })

      // GROW IMAGES (was inside onComplete)
      .to(".card_container img", {
        height: "2.8rem",
        duration: 1,
        stagger: 0.1
      })

      // SHOW TEXT
      .set(".card_container p", { display: "block" })
      .set(".card_container", { justifyContent: "space-around" })
      .to(".card_container p", {
        opacity: 1,
        duration: 1,
        stagger: 0.1
      })
      .set(".skillcard_container", { overflowY: "auto" })

      .to({}, { duration: 2 });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".work_card_text_main_container",
        start: "top top",
        end: "bottom top+=120",
        // end: "500%",
        scrub: true,              // smoother
        pin: true,
        // anticipatePin: 1,      // reduces jump
        pinSpacing: false,
        // invalidateOnRefresh: true,
      }
    })

      .from(split3.chars, {
        y: '160%',
        opacity: 1,
        rotationZ: "10",
        duration: 1,
        ease: "back.in(2)",
        stagger: 0.2
      })

    tl2.to(".work_card_text_container", {
      height: "10vh",
      fontSize: "3.5rem",
      duration: 2
    })


  });




  return (
    <>
      <div className='skill_container'>
        <h1 className={`${climateCrisis.className} skill_heading `}>Skills</h1>
        <ul ref={containerRef} className='skillcard_container'>
          {skill.map((item, index) => (
            <li ref={logocardref} className='card_container'
              key={index}>
              <img src={item.image} alt="" />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
      {/* extra div for project text animation */}
      <div className="work_card_text_main_container">
        <div className="work_card_text_container">
          <p>Projects</p>
        </div>
      </div>
    </>
  )
}

export default Skills
