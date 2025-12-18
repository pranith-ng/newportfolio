'use client'
import "./hero.css"
import React, { useRef, useState } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from 'gsap/SplitText';
import Ballpit from '../../components/ballpit/ballpit';


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText)

const Hero = () => {

  const heroRef = useRef(null);
  const [loaded, setloaded] = useState(false)


  useGSAP(() => {

    const split1 = SplitText.create(".heroelement h2", {
      type: "chars, words, lines"
    })

    const split2 = SplitText.create(".heroelement h1", {
      type: "chars, words, lines"
    })

    const split3 = SplitText.create(".heroelement p", {
      type: "chars, words, lines"
    })

    const split4 = SplitText.create(".buttoncontainer button", {
      type: "chars, words, lines"
    })


    const tl = gsap.timeline({
      onComplete: () => {
        setloaded(true)
      }
    })

    tl.from(split1.words, {
      y: 130,
      // opacity:0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power4.out"
    })
    tl.from(split2.chars, {
      y: 450,
      rotationZ: "80",
      // opacity:0,
      duration: 0.4,
      stagger: {
        each: 0.06,
      },
      ease: "power4.out"
    })
    tl.from(split3.words, {
      y: 300,
      rotationZ: "80",
      duration: 0.5,
      stagger: {
        each: 0.02,
      },
      ease: "power4.out(1.6)",
    })
    tl.fromTo(".heroelement button", {
      y: 300,
    }, {
      y: 0,
      duration: 0.5,
      stagger: {
        each: 0.02,
      },
      ease: "power4.out(1.6)",
    })
    tl.from(split4.chars, {
      y: 300,
      rotationZ: "80",
      duration: 0.5,
      stagger: {
        each: 0.02,
      },
      ease: "power4.out(1.6)",
    })


  }, [])

  return (
    <div id="Home" className='maindiv'>
      {loaded &&
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
        />
      }
        <div
          ref={heroRef}
          className='heroelement'
        >
          <h2 >Hi, I'am Pranith </h2>
          <h1>
            FRONTEND DEVELOPER
          </h1>
          <p>Welcome to My Portfolio! Here, you’ll find a little about me, my skills, and the projects I’ve worked on. I hope my work gives you a glimpse into my passion for web development.</p>
          <div className="buttoncontainer">
            <button>My resume</button>
          </div>
        </div>
      


    </div>
  )
}

export default Hero
