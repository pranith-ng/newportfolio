'use client'
import "./hero.css"
import React, { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from 'gsap/SplitText';
import Ballpit from '../../components/ballpit/ballpit';


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText)

const Hero = () => {
  let counter = { value: 0 }


  const loadref = useRef()
  const loadpercentref = useRef()
  const loadcontainerref = useRef()
  const heroRef = useRef(null);

  // useGSAP(() => {

  //   let split = SplitText.create(".main_heading", {
  //     type: "words, chars"
  //   })


  //   document.fonts.ready.then(() => {
  //     const t1 = gsap.timeline()

  //     t1.to(loadref.current, {
  //       display: "block",
  //       width: "100vw",
  //       duration: 3,
  //       ease: "power4.in"
  //     })
  //       .to(counter, {
  //         value: 100,
  //         duration: 3,
  //         ease: "power4.in",
  //         onUpdate: () => {
  //           loadpercentref.current.innerHTML = `${Math.floor(counter.value)}%`
  //         }
  //       }, 0)
  //       .to(loadpercentref.current, {
  //         opacity: 0,
  //         duration: 1,
  //         ease: "power4.in",
  //         onComplete: () => {
  //           loadpercentref.current.style.display = "none"
  //         }
  //       })
  //       .to(loadref.current, {
  //         height: "100vh",
  //         duration: 1.2,
  //         ease: "power4.in"
  //       })
  //       .to(loadcontainerref.current, {
  //         height: 0,
  //         duration: 1,
  //         ease: "power4.in",
  //         onComplete: () => {
  //           loadcontainerref.current.style.display = "none"
  //         }
  //       })
  //       .to(heroRef.current, {
  //         top: "0",
  //         duration: 0.5,
  //         ease: "power4.in",
  //       }, ">")
  //       .from(split.chars, {
  //         y: 100,
  //         autoAlpha: 0,
  //         stagger: 0.15,
  //         ease: "bounce"
  //       })
  //   })

  // })



  return (
    <div className='maindiv'>
      <Ballpit
        count={150}
        gravity={0.06}
        friction={0.9975}
        wallBounce={0.95}
        followCursor={false}
        minSize={0.5}
        maxSize={1}
        colors={[0xffffff, 0x000000, 0x0000FF, 0x00C853]}
        ambientColor={16777215}      // neutral white ambient light
        // ambientIntensity={0.2}       // lowers color washout
        lightIntensity={60}
      // colors={[ "#000000", "#00ff00",  "#0000ff"]}
      />
      <div
        ref={heroRef}
        className='heroelement'
      >
        <h2 >Hi, I'am Pranith </h2>
        <h1>
          FRONTEND DEVELOPER
        </h1>
        <p>Welcome to My Portfolio! Here, you’ll find a little about me, my skills, and the projects I’ve worked on. I hope my work gives you a glimpse into my passion for web development.</p>
        <div>
          {/* <button>Contact me</button> */}
          <button>My resume</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
