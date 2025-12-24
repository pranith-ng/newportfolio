"use client"
import React, { useRef } from 'react'
import "./project.css"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import useLenis from '@/app/Hooks/useLenis';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger, SplitText)

const Project = ({ projectData }) => {

  useLenis()

  const {
    title,
    description,
    color,
    imgsrc,
    techStack,
    features,
    links,
  } = projectData

  const triggerTl4 = useRef(false);

  const titlearr = title.split("")



  useGSAP(() => {

    const mm = gsap.matchMedia();
    const tl3 = gsap.timeline()

    const splitheading = SplitText.create(".project_headline", {
      type: "chars"
    })
    const splitdescription = SplitText.create(".project_description", {
      type: "words"
    })
    const project_container_2_heading = SplitText.create(".project_container_2_heading", {
      type: "chars"
    })

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


    tl3.to(".smallbox_3", {
      scaleY: 0,
      duration: 0.8,
      stagger: {
        each: 0.1,
        from: "end",
      },
      onComplete: () => {
        tl3.set(".transition_container_3", {
          display: "none"
        })
      }
    })
    tl3.from(".project_headline", {
      x: 150,
      duration: 0.8,
      stagger: {
        each: 0.08
      }
    })
    tl3.from(splitdescription.words, {
      autoAlpha: 0,
      duration: 0.4,
      stagger: {
        each: 0.02
      }
    })
    tl3.from(".button_container button", {
      height: 0,
      autoAlpha: 0,
      duration: 0.5,
      stagger: {
        each: 0.1
      }
    })
    tl3.from(".button_container button span", {
      autoAlpha: 0,
      duration: 0.5,
      stagger: {
        each: 0.1
      }
    })
    tl3.from(".tech_stack_container_2", {
      scale: 0.7,
      autoAlpha: 0,
      duration: 0.5,
    })


    if (cards) {
      cards.forEach((card) => {
        const heading = card.querySelector(".card_2_heading")
        const video = card.querySelector(".card_2_video")

        const cardsplitheading = new SplitText(heading, {
          type: "words"
        })

        const tl6 = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 30%",
            end: "bottom 80%",
            scrub: 1,
          }
        })
        tl6.from(heading, {
          scale: 0.7,
          duration: 1.5
        })
        tl6.from(video, {
          // scaleX:0.7,
          // scaleY:0.7,
          // duration:1.5
        }, "<")
      })
    }


    mm.add("(max-width: 1200px)", () => {
      const tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".tech_stack_container_1",
          start: "top 40%"
        }
      })

      tl4.set(".tech_stack_container_1", {
        borderWidth: 0,
        boxShadow: "0px 0px 0px rgba(0,0,0,0)"
      })
      tl4.from(".tech_stack_container_1", {
        scaleX: 0,
        autoAlpha: 0,
      })
      tl4.from(".tech_stack_container_main_heading", {
        x: 200,
        autoAlpha: 0,
        duration: 0.5,
      })
      tl4.from(".tech_stack_card_heading", {
        y: 200,
        autoAlpha: 0,
        duration: 0.5,
        stagger: 0.02
      })
      tl4.from(".tech_stack_card_bubbles", {
        scaleX: 0,
        autoAlpha: 0,
        duration: 0.5,
        stagger: 0.05
      })
      tl4.from(".tech_stack_card_bubbles span", {
        autoAlpha: 0,
        duration: 0.5,
        stagger: 0.05
      })
      tl4.to(".tech_stack_container_1", {
        borderWidth: 2,
        boxShadow: "5px 5px 0px rgba(0,0,0,1)",
        duration: 0.4
      })
    });



    mm.add("(min-width: 1201px)", () => {
      // const tl4 = gsap.timeline()

      tl3.set(".tech_stack_container_1", {
        borderWidth: 0,
        boxShadow: "0px 0px 0px rgba(0,0,0,0)"
      }, "<")
      tl3.from(".tech_stack_container_1", {
        scaleX: 0,
        autoAlpha: 0,
      }, "<")
      tl3.from(".tech_stack_container_main_heading", {
        x: 200,
        autoAlpha: 0,
        duration: 0.3,
      })
      tl3.from(".tech_stack_card_heading", {
        y: 200,
        autoAlpha: 0,
        duration: 0.3,
        stagger: 0.02
      })
      tl3.from(".tech_stack_card_bubbles", {
        scaleX: 0,
        autoAlpha: 0,
        duration: 0.5,
        stagger: 0.05
      })
      tl3.from(".tech_stack_card_bubbles span", {
        autoAlpha: 0,
        duration: 0.5,
        stagger: 0.05
      })
      tl3.to(".tech_stack_container_1", {
        borderWidth: 2,
        boxShadow: "5px 5px 0px rgba(0,0,0,1)",
        duration: 0.4
      }, "<")
    });

    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".project_container_2_heading",
        start: "top bottom",
        scrub: true,
      }
    })
    tl5.from(project_container_2_heading.chars, {
      y: 150,
      duration: 0.5,
      stagger: 0.08
    })

    return () => {
      mm.revert()
    }


  }, [])


  return (
    <section>
      <div className='transition_container_3'>
        <div className='smallbox_3'></div>
        <div className='smallbox_3'></div>
        <div className='smallbox_3'></div>
        <div className='smallbox_3'></div>
        <div className='smallbox_3'></div>
        <div className='smallbox_3'></div>
        <div className='smallbox_3'></div>
        <div className='smallbox_3'></div>
        <div className='smallbox_3'></div>
        <div className='smallbox_3'></div>
      </div>

      <div style={{
        backgroundColor: color
      }}
        className='project_main_container'>
        <div
          className='project_container_1'>
          <div
            className='heading_container'>
            {titlearr.map((item, index) => (
              <div key={index} className='project_headline_inner_container'>
                <span className='project_headline'>{item}</span>
              </div>
            ))}
          </div>
          <p className='project_description'>{description}</p>
          <div className='button_container'>
            <button><span>Github repo</span></button>
            <button><span>Live website</span></button>
          </div>
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
                          <div key={index} className='tech_stack_card_bubbles'><span>{item}</span></div>
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
    </section>

  )
}

export default Project
