"use client"
import React from 'react'
import "./project.css"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)

const Project = ({ projectData }) => {

  const {
    title,
    description,
    color,
    imgsrc,
    techStack,
    features,
    links,
  } = projectData


  useGSAP(() => {
    const cards = document.querySelectorAll(".card_2_container")

    cards.forEach((card, index) => {
      if (index < cards.length - 1) {

        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: cards[cards.length - 1],
          end: "top top",
          pin: card,
          pinSpacing: false,
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
            const afteropacity = progress

            gsap.set(card, {
              scale: scale,
              rotation: rotation,
              "--after-opacity": afteropacity,
            })
          }
        })
      }
    });

  },)


  return (
    <div style={{
      backgroundColor: color
    }}
      className='project_main_container'>
      {/* fixed bar on bottom */}
      <div className='fixed_bar'>
        <div className='fixed_bar_inner_container'>
            <button>Github repo</button>
            <button>Live website</button>
        </div>
      </div>
      {/* fixed bar on bottom */}
      <div className='project_container_1'>
        <h1 className='project_headline'>{title}</h1>
        <p className='project_description'>{description}</p>
        <div className='tech_stack_main_container'>
          <div className='tech_stack_container_1'>
            <h3 className='tech_stack_container_main_heading'>tech stack</h3>
            {techStack.map((item, index) => {
              return (
                <div className='tech_stack_card' key={index}>
                  <h3 className='tech_stack_card_heading'>{item.category}</h3>
                  <div key={index} className='tech_stack_card_bubbles_container'>
                    {item.details.map((item, index) => {
                      return (
                        <div key={index} className='tech_stack_card_bubbles'>{item}</div>
                      )
                    })}
                  </div>

                </div>
              )
            })}
          </div>
          <div className='tech_stack_container_2'>
            <img src={imgsrc} alt="" />
          </div>
        </div>
      </div>
      <div className='project_container_2'>
        <h1 className='project_container_2_heading'>Features</h1>
        <div className='card_2_main_container'>
          {features.map((item, index) => {
            return (
              <div style={{
                backgroundColor: color
              }}
                className='card_2_container' key={index}>
                <h3 className='card_2_heading'>{item.description}</h3>
                <div className='card_2_video'>
                  <video src={item.gif}></video>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className='project_container_3'>

      </div>
    </div>
  )
}

export default Project
