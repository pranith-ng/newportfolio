"use client"

import "./work.css"
import React, { useRef } from 'react'
// import { Climate_Crisis, Coiny, Poppins } from "next/font/google";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import ProjectButton from "../../components/Projectbutton/ProjectButton";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

// const climateCrisis = Climate_Crisis({
//   subsets: ['latin'],
//   weight: ['400'], // add other weights if needed
// });
// const Coinyfont = Coiny({
//   subsets: ['latin'],
//   weight: ['400'], // add other weights if needed
// });
// const poppinspfont = Poppins({
//   subsets: ['latin'],
//   weight: ['400'], // add other weights if needed
// });

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger, SplitText)



const Work = () => {

  const containerref = useRef(null)


  const workData = [
    {
      title: 'SiteScannerPro',
      description: 'website analyser',
      bgImage: '/projectGifs/sitescannerpro/sspimg.png',
      redirect: '/Sitescannerpro',
      color: "#f2acac"

    },
    {
      title: 'AI prompt',
      description: 'Generative AI',
      bgImage: '/projectGifs/aiprompt/aiimage.png',
      redirect: '/Aiprompt',
      color: "#b1c0ef"
    },
    {
      title: 'Web.builder',
      description: 'No code website builder',
      bgImage: '/projectGifs/web.builder/wbimage.png',
      redirect: '/Webbuilder',
      color: "#81b7bf"

    },
  ]



  useGSAP(() => {
    const cards = document.querySelectorAll(".work_card")

    cards.forEach((card, index) => {
      if (index < cards.length - 1) {

        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: cards[cards.length - 1],
          end: "top top",
          pin: card,
          pinSpacing: false
        })

      }

      if (index < cards.length - 1) {
        ScrollTrigger.create({
          trigger: cards[index + 1],
          start: "top bottom",
          end: "top top",
          onUpdate: (self) => {
            const progress = self.progress
            const scale = 1 - progress * 0.25
            const rotation = (index % 2 === 0 ? 6 : -6) * progress
            const borderradius = progress * 12
            const afteropacity = progress

            gsap.set(card, {
              scale: scale,
              rotation: rotation,
              borderRadius: `${borderradius}%`,
              "--after-opacity": afteropacity,
            })
          }
        })
      }
    });

    cards.forEach((card, index) => {
      const image = card.querySelector(".work_inner_card")
      const title = card.querySelector(".work_inner_card_details_title")
      const description = card.querySelector(".work_inner_card_details_description")
      const button = card.querySelector(".button")

      const splittitle = new SplitText(title, {
        type: "chars"
      })
      const splitdescription = new SplitText(description, {
        type: "words"
      })
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 20%",
          end: "bottom 110%",
          scrub: true,
        }
      })
      tl2.from(splittitle.chars, {
        y: 40,
        duration: 0.6,
      })
      tl2.from(splitdescription.words, {
        autoAlpha: 0,
        duration: 0.6
      })
    })

  }, [])


  return (
    <div className='work_card_main_container'>

      {/*  */}

      <div ref={containerref} className='work_card_container'>

        {workData.map((item, index) => (
          <div key={index} className="work_card"
            style={{ backgroundColor: item.color }}
          >

            <div className='work_inner_card'>
              <img src={item.bgImage} alt="" />

            </div>

            <div className='work_inner_card_details'>
              <p className="work_inner_card_details_title">{item.title}</p>
              <p className='work_inner_card_details_description'>{item.description}</p>
              <ProjectButton link={item.redirect} />
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Work
