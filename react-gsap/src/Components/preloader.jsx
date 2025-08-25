import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Preloader = ({ onComplete }) => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl
    .to(".preloader", {
      rotate: -90,
      duration: 1,
      ease: "power2.out",
      delay: 0.5,
      onComplete: () => {
        if (onComplete) onComplete(); // <- flips loading in parent
      }
    });
  }, [onComplete]);

  return (
    <div className="preloader">
    </div>
  );
};

export default Preloader;
