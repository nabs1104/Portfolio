import React from 'react'
import { NavLink } from 'react-router-dom'
import { useRef } from 'react';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);


const Navbar = () => {
  const container = useRef(null);

  useGSAP(() => {
    let split = SplitText.create(".navbar-about, .navbar-home, .navbar-contact, a.active", { type: "words, chars"});
    gsap.set(".navbar-about, .navbar-home, .navbar-contact, a.active", { opacity: 1 });

    SplitText.create(".navbar-about, .navbar-home, .navbar-contact, a.active", {
        type: "words,lines",
        mask: "lines", // <-- this can be "lines" or "words" or "chars"
    });

    gsap.from(split.chars, {
      ease: "back.inOut",
      duration: 1, 
      y: "30px",         
      stagger: 0.02,  
    });

  }, []);


  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <NavLink to="/about"><li ref={container} className="navbar-about">About</li></NavLink>
        <NavLink to="/"><li ref={container} className="navbar-home">Home</li></NavLink>
        <NavLink to="/contact"><li ref={container} className="navbar-contact">Contact</li></NavLink>
      </ul>
    </nav>  
  )
}

export default Navbar