import React, { useRef } from 'react';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import ScrollTrigger from 'gsap/ScrollTrigger';   
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const About = () => {
  const aboutTitle = useRef(null);
  const content = useRef(null);
  const pinElement = useRef(null);

  useGSAP(() => {
    let split = SplitText.create(aboutTitle.current, { type: "words, chars" });

    ScrollTrigger.create({
      trigger: pinElement.current,
      start: "top top",
      end: "+=905vh",
      scrub: 1,
      pin: true,
      onUpdate: (self) => {
        gsap.to(content.current, {
          y: `${-8 * self.progress}vh`,
        });
      }
    });

    gsap.from(split.chars, {
      duration: 0.7,
      ease: "back.inOut",
      y: 150,
      mask: "words",
      stagger: 0.02
    });


  }, []);

  return (
    <>
      <section ref={pinElement} className="container-about">
        <div ref={aboutTitle} className="title about">About</div>
      </section>

      <div ref={content} className="about-content">
        <p>
          Hi! I'm a passionate web developer with a focus on creating dynamic and engaging user experiences. <br /><br />
          Bonjour! Je suis un développeur web passionné, spécialisé dans la création d'expériences utilisateur dynamiques et engageantes. <br /><br />
          Hola! Soy un desarrollador web apasionado, especializado en crear experiencias de usuario dinámicas y atractivas.
        </p>
        <p>
          With a background in both design and development, I strive to build applications that are not only functional but also visually appealing. <br /><br />
          Avec un bagage en design et développement, je m'efforce de créer des applications qui sont à la fois fonctionnelles et esthétiques. <br /><br />
          Con un enfoque tanto en el diseño como en el desarrollo, me esfuerzo por crear aplicaciones que no solo sean funcionales, sino también visualmente atractivas.
        </p>
        <p>
          I'm constantly learning and adapting to new technologies, and I'm excited to take on new challenges in the ever-evolving world of web development. <br /><br />
          Je suis constamment en train d'apprendre et de m'adapter aux nouvelles technologies, et je suis impatient de relever de nouveaux défis dans le monde en constante évolution du développement web. <br /><br />
          Estoy constantemente aprendiendo y adaptándome a nuevas tecnologías, y estoy emocionado de enfrentar nuevos desafíos en el mundo en constante evolución del desarrollo web.
        </p>
      </div>
    </>
  )
}

export default About