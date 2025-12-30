'use client'
import "./hero.css"
import React, { useRef, useState, useEffect } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from 'gsap/SplitText';
import Silk from "@/app/components/components/Silk/Silk"
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText)

const Hero = () => {

  const heroRef = useRef(null);
  const [loaded, setloaded] = useState(false)
  const [ballCount, setBallCount] = useState(150);

  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth < 768) { // small devices
        setBallCount(85);
      } else {
        setBallCount(150);
      }
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize); // listen to resize

    return () => window.removeEventListener("resize", handleResize); // cleanup
  }, []);

  useGSAP(() => {

    document.fonts.ready.then(() => {

      gsap.set(".heroelement", {
        display: "flex"
      })

      const split1 = SplitText.create(".heroelement h2", {
        type: "words"
      })

      const split2 = SplitText.create(".heroelement h1", {
        type: "chars, words, lines"
      })

      const split3 = SplitText.create(".heroelement p", {
        type: "words"
      })

      const split4 = SplitText.create(".buttoncontainer button", {
        type: "chars"
      })


      const tl = gsap.timeline({
        onComplete: () => {
          setloaded(true)
        }
      })


      tl.to(
        ".silk_container",
        {
          top: 0,
          duration: 1,
          ease: "power4.in",
        }
      );
      tl.set(".heroelement", {
        opacity: 1,
        duration: 0.5
      })
      tl.from(split1.words, {
        y: 130,
        // opacity:0,
        duration: 0.5,
        stagger: 0.05,
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


    })

  }, [])


  const buttonOnEnter = () => {
    const buttonsplit = new SplitText(".buttoncontainer button", {
      type: "chars"
    })
    gsap.to(".buttoncontainer button", {
      scale: 1.1,
      backgroundColor: "#c5e384",
      duration: 0.3,
      ease: "power4.out"

    })
    gsap.from(buttonsplit.chars, {
      y: 100,
      duration: 0.3,
      stagger: 0.05,
    })
  }

  const buttonOnLeave = () => {
    const buttonsplit = new SplitText(".buttoncontainer button", {
      type: "chars"
    })
    gsap.to(".buttoncontainer button", {
      scale: 1,
      backgroundColor: "#ffffff",
      duration: 0.3,
      ease: "power4.in"

    })
    gsap.from(buttonsplit.chars, {
      y: -100,
      duration: 0.3,
      stagger: 0.05

    })
  }


  return (
    <div id="Home" className='maindiv'>
      <div className="silk_container">
        <Silk
          speed={8}
          scale={1.1}
          color="#0c5aecff"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      <div
        ref={heroRef}
        className='heroelement'
      >
        <h2 >Hi, I'am Pranith </h2>
        <h1>
          FRONTEND DEVELOPER
        </h1>
        <p>Welcome to My Portfolio! Here, you’ll find a little about me, my skills, and the projects I’ve worked on. I hope my work gives you a glimpse of my passion for web development.</p>
        <div
          onMouseEnter={buttonOnEnter}
          onMouseLeave={buttonOnLeave}
          className="buttoncontainer">
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>RESUME</button>
          </a>
        </div>
      </div>



    </div>
  )
}

export default Hero
