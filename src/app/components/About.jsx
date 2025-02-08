"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import AboutImg from "@/app/public/About.png";

const About = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="bg-[#0b0e21] text-white flex flex-col items-center py-10">
      {/* Rotating Text Container */}
      <div className="text-center max-w-2xl">
        <h1 className={`text-3xl font-bold mb-4 ${animate ? "rotating-text" : ""}`}>
         About Us
        </h1>

        <p className={`text-lg ${animate ? "rotating-text" : ""}`}>
          {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique enim id justo pulvinar, et vestibulum erat vulputate."
            .split("")
            .map((char, index) => (
              <span key={index} style={{ "--i": index }}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
        </p>
      </div>

      {/* Image */}
      <div className="mt-8">
        <Image src={AboutImg} alt="About Image" width={900} height={600} />
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .rotating-text span {
          display: inline-block;
          animation: rotateText 1s ease-out forwards;
          animation-delay: calc(var(--i) * 100ms);
        }

        @keyframes rotateText {
          0% {
            transform: rotateX(-360deg);
            opacity: 0;
          }
          100% {
            transform: rotateX(0deg);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
