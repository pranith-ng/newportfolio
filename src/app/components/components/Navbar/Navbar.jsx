'use client'
import "./navbar.css"
import React, { useRef, useState } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(useGSAP, SplitText, ScrollToPlugin, ScrollTrigger);

const Navbar = () => {
  const tl = useRef();

  const links = [
    { name: "Home", linkurl: "Home" },
    { name: "About", linkurl: "About" },
    { name: "Skills", linkurl: "Skills" },
    { name: "Projects", linkurl: "Work" },
    { name: "Contact", linkurl: "Contact" },
  ]

  const goTo = (id) => {
    ScrollTrigger.refresh();
    gsap.to(window, {
      duration: 0.1,
      ease: "power2.out",
      scrollTo: {
        y: document.getElementById(id),
        offsetY: 0,
        autoKill: false
      }
    });
  }

  const listRefs = useRef([])


  const linkOnMouseEnter = (index) => {
    const split2 = new SplitText(listRefs.current[index], { type: "chars" });
    gsap.fromTo(split2.chars, {
      x: 100,

    }, {
      x: 0,
      color: "#FF0000",
      stagger: {
        each: 0.08,
        from: "center",
      },
      duration: 0.2,
      ease: "back.out(2)",
    });
  };

  const linkOnMouseLeave = (index) => {
    const split2 = new SplitText(listRefs.current[index], { type: "chars" });

    gsap.fromTo(split2.chars, {
      x: -100,
    }, {
      x: 0,
      color: "rgb(223, 203, 204)",
      stagger: {
        each: 0.08,
        from: "center",
      },
      duration: 0.2,
      ease: "back.out(2)",
    });

  };

  useGSAP(() => {


    const split = SplitText.create(".menulinks ul li", {
      type: "words"
    })

    tl.current = gsap.timeline({ paused: true });
    tl.current
      .fromTo(".menucontainer", {
        height: 0,
        width: 0,
        top: "-300px",
        right: "-300px",
        borderRadius: "50%",
        duration: 2,
        ease: "power4.out"
      },
        {
          height: "70vh",
          width: "70vw",
          duration: 0.5
        })

      .set(".menulinks", { display: "none" })

      .to(".menucontainer", {
        height: "100vh",
        width: "100vw",
        top: "0",
        right: "0",
        borderRadius: "0",
        duration: 0.5,
        ease: "power4.in",
      })

      .set(".menulinks", { display: "block" })

      .to(".menulinks", {
        opacity: 1,
        ease: "power4.out",
      })

      .from(split.words, {
        y: 50,
        opacity: 0,
        stagger: 0.08,
        duration: 0.1,
      }, "<")



    // transition animation


  }, [])


  const linkclick = (linkurl) => {

    tl.current.reverse()

    const tl2 = gsap.timeline()

    tl2.to(".smallbox", { duration: 0.5 })
    tl2.set(".transition_container", {
      display: "flex"
    })
    tl2.to(".smallbox", {
      scaleY: 1,
      duration: 0.8,
      stagger: {
        each: 0.1,
        from: "start",
      },
      onComplete: () => {
        goTo(linkurl)
      }
    })

    tl2.to(".smallbox", {
       duration: 0.5,
      onComplete: () => {
        tl2.set(".transition_container", {
          display: "none",
        })
      }
      })

    tl2.set(".transition_container", {
      display: "flex"
    })
    tl2.to(".smallbox", {
      scaleY: 0,
      duration: 0.8,
      stagger: {
        each: 0.1,
        from: "end",
      },
      onComplete: () => {
        tl2.set(".transition_container", {
          display: "none"
        })
      }

    })

  }

  const controlMenuClose = () => {
    tl.current.reverse()
  }
  const controlMenuOpen = () => {
    console.log("navbar menu open clicked")
    tl.current.play()
  }

  const menuOpenMouseEnter = (event) => {
    gsap.to(event.currentTarget, {
      scale: 1.3,
      duration: 0.5,
      ease: "power4.out"
    })
  }
  const menuOpenMouseLeave = (event) => {
    gsap.to(event.currentTarget, {
      scale: 1,
      duration: 0.5,
      ease: "power4.out"
    })
  }


  return (
    <div>

      {/* main */}

      <div className='transition_container'>
        <div className='smallbox'></div>
        <div className='smallbox'></div>
        <div className='smallbox'></div>
        <div className='smallbox'></div>
        <div className='smallbox'></div>
        <div className='smallbox'></div>
        <div className='smallbox'></div>
        <div className='smallbox'></div>
        <div className='smallbox'></div>
        <div className='smallbox'></div>
      </div> 

      {/* main */}

      <div
        onMouseEnter={menuOpenMouseEnter}
        onMouseLeave={menuOpenMouseLeave}
        onClick={controlMenuOpen}
        className="menubutton">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>
      </div>
      <div className="menucontainer">
        <div className="menulinks">
          <div
            onMouseEnter={menuOpenMouseEnter}
            onMouseLeave={menuOpenMouseLeave}
            onClick={controlMenuClose}
            className="closebutton" >
            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

          </div>
          <ul>
            {
              links.map((item, index) => (
                <li
                  key={index}
                  ref={(el) => (listRefs.current[index] = el)}
                  onClick={() => linkclick(item.linkurl)}
                  onMouseEnter={() => linkOnMouseEnter(index)}
                  onMouseLeave={() => linkOnMouseLeave(index)}
                >{item.name}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>

  );
};

export default Navbar;
