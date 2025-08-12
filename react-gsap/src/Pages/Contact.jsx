import React, { useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Contact = () => {
  const cards = [
    {class: ".card-1", rotate: 2, endTranslateX: -200},
    {class: ".card-2", rotate: -3.5, endTranslateX: -100},
    {class: ".card-3", rotate: 5, endTranslateX: -100},
    {class: ".card-4", rotate: -5.5, endTranslateX: -150}
  ];


  useGSAP(() => {
    ScrollTrigger.refresh();
  
    ScrollTrigger.create({
      trigger: ".container-contact",
      start: "top top",
      end: "+=900vh",
      scrub: 1,
      pin: true,
      // pinSpacing: false,  
      onUpdate: (self) => {
        gsap.to(".container-contact", {
          x: `${-92 * self.progress}vw`,
          duration: 2,
          ease: "power3.out"
        });
      }
    });

    cards.forEach((card) => {
      ScrollTrigger.create({
        trigger: "card.class",
        start: "top top",
        end: "+=1000vh",
        scrub: 1, 
        onUpdate: (self) => {
          gsap.to(card.class, {
            x: `${card.endTranslateX * self.progress}px`,
            rotation: `${card.rotate * self.progress * 2}`,
            duration: 0.5,
            ease: "power3.out"
          });
        }
      });
    });
  }, []);



  return (
    <>
    
      <section className="container-contact">
        <h1 className='title'>Contact</h1>

        <div className="card-1">
          <img src="./src/assets/img-1.jpg"/>
        </div>
        <div className="card-2">
          <img src="./src/assets/img-2.jpg"/>
        </div>
        <div className="card-3">
          <img src="./src/assets/img-3.jpg"/>
        </div>
        <div className="card-4">
          <img src="./src/assets/img-4.jpg"/>
        </div>

        <div className="instagram">
          <a className="instagram-link" href="https://instagram.com/tautaya_nabhan" target="_blank" rel="noopener noreferrer">
            <div className="icon-wrapper">
              <img className="icon" src="./src/assets/instagram.jpg" alt="Instagram" />
            </div>
          </a>
          <h2>Find me on Instagram</h2>
        </div>
        
        <div className="linkedin">
          <a className="linkedin-link" href="https://linkedin.com/in/tautayanabhan" target="_blank" rel="noopener noreferrer">
            <div className="icon-wrapper">
              <img className="icon" src="./src/assets/linkedin.png" alt="LinkedIn" />
            </div>
          </a>
          <h2>Find me on LinkedIn</h2>
        </div>

        <div className="github">
          <a className="github-link" href="https://github.com/nabs1104" target="_blank" rel="noopener noreferrer">
            <div className="icon-wrapper">
              <img className="icon" src="./src/assets/github.png" alt="GitHub" />
            </div>
          </a>
          <h2>Find me on GitHub</h2>
        </div>
      </section>
    </>
  )
}

export default Contact