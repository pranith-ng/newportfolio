'use client'
import React, { useRef, useState } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const menuref = useRef();
  const menubuttonref = useRef();
  const t1 = useRef();
  const[toggle, settoggle] = useState(true)

  useGSAP(() => {
    
  },[]);

  useGSAP(()=>{
    if(toggle ){
      t1.current = gsap.timeline();
         t1.current
      .to(".menucontainer", {
        height: 0,
        width:"20vw",
        duration: 1,
        ease: "power4.out"
      })
      .to(".menulinks", {
        opacity: 0,
        duration: 0.4,
        ease: "power4.out",
        onComplete: () => {
          gsap.set(".menulinks", { display: "none" });
        }
      }, "<")
      .to(menubuttonref.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          menubuttonref.current.innerText = "open";
          gsap.to(menubuttonref.current, {
            opacity: 1,
            duration: 0.5,
            ease: "power1.out"
          });
        }
      }, "<");
    } else if(toggle === false ) {
         t1.current = gsap.timeline();
         t1.current
      .to(".menucontainer", {
        height: "100vh",
        width: "50vw",
        duration: 1,
        ease: "power4.out"
      })
      .to(".menulinks", {
        opacity: 1,
        duration: 0.4,
        ease: "power4.out",
        onComplete: () => {
          gsap.set(".menulinks", { display: "block" });
        }
      }, "<")
      .to(menubuttonref.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          menubuttonref.current.innerText = "close";
          gsap.to(menubuttonref.current, {
            opacity: 1,
            duration: 0.5,
            ease: "power1.out"
          });
        }
      }, "<");
      }
  }, {dependencies:[toggle]})



  // just toggle GSAP direction, no need for extra state
  const controlMenu = () => {
    settoggle(!toggle)
  };

  return (
    <div ref={menuref} className="menucontainer">
      <div className="menubutton" ref={menubuttonref} onClick={controlMenu}>
        
      </div>

      <div className="menulinks">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
