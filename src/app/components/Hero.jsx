'use client'
import React, { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from 'gsap/SplitText';
import { Climate_Crisis, Coiny, Poppins } from "next/font/google";

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



gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText)

const Hero = () => {
  let counter = { value: 0 }


  const loadref = useRef()
  const loadpercentref = useRef()
  const loadcontainerref = useRef()
  const heroRef = useRef(null);

  useGSAP(() => {

    let split = SplitText.create(".main_heading", {
      type: "words, chars"
    })


    document.fonts.ready.then(() => {
      const t1 = gsap.timeline()

      t1.to(loadref.current, {
        display: "block",
        width: "100vw",
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
          }
        })
        .to(heroRef.current, {
          top: "0",
          duration: 0.5,
          ease: "power4.in",
        }, ">")
        .from(split.chars, {
          y: 100,
          autoAlpha: 0,
          stagger: 0.15,
          ease: "bounce"
        })
    })

  })



  return (
    <div className='maindiv'>
      <div ref={loadcontainerref} className='loadercontainer'>
        <div ref={loadref} className='loadbox'>
        </div>
        <div className={`loadpercent ${climateCrisis.className}`} ref={loadpercentref}>
        </div>
      </div>
      <div
        ref={heroRef}
        className='heroelement'
      >
        <div className='bg_div'></div>
        <h1 className={`${poppinspfont.className}`} style={{ fontSize: "3rem", marginBottom: "1rem" }}>Hi, I’m Pranith 👋</h1>
        <p className={` main_heading  ${climateCrisis.className}`} style={{ opacity: 0.8, fontSize: "5.2rem" }}>
          FRONTEND DEVELOPER
        </p>
        <p>Welcome to My Portfolio! Here, you’ll find a little about me, my skills, and the projects I’ve worked on. I hope my work gives you a glimpse into my passion for web development.</p>
        <div>
          <button>Contact me</button>
          <button>My resume</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
