import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHoverOn = () => setHovered(true);
    const handleHoverOff = () => setHovered(false);

    window.addEventListener("mousemove", move);

    // Add hover listeners to elements with class "hover-target"
    const targets = document.querySelectorAll("a");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverOn);
      el.addEventListener("mouseleave", handleHoverOff);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverOn);
        el.removeEventListener("mouseleave", handleHoverOff);
      });
    };
  }, [location]);

  return (
    <div
      className={`cursor ${hovered ? "hovered" : ""}`}
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
    />
  );
}
