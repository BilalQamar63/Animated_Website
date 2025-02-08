"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState, useRef } from "react";
import { FaShoppingCart, FaCubes, FaPuzzlePiece, FaDownload } from "react-icons/fa";

const stats = [
  { id: 1, name: "Total Sales", icon: FaShoppingCart, target: 4800 },
  { id: 2, name: "Official Addons", icon: FaCubes, target: 24 },
  { id: 3, name: "Total Addons", icon: FaPuzzlePiece, target: 86 },
  { id: 4, name: "Downloads", icon: FaDownload, target: 860 },
];

const States = () => {
  const [counts, setCounts] = useState(stats.map(() => 0)); // Start from 0
  const [isMounted, setIsMounted] = useState(false); // Track if the component is visited
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsMounted(true); // Mark component as visited
  }, []);

  useEffect(() => {
    if (!isMounted) return; // Do nothing if component is not visited

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          // Start the counting animation
          const intervals = stats.map((stat, index) => {
            const step = Math.ceil(stat.target / 100); // Adjust speed
            return setInterval(() => {
              setCounts((prevCounts) => {
                const newCounts = [...prevCounts];
                if (newCounts[index] < stat.target) {
                  newCounts[index] = Math.min(newCounts[index] + step, stat.target);
                }
                return newCounts;
              });
            }, 30);
          });

          setHasAnimated(true); // Prevent multiple animations

          return () => intervals.forEach(clearInterval);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isMounted, hasAnimated]);

  return (
    <div ref={sectionRef} className="bg-[#3d2e53] py-12">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 mb-[50px]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Trusted by Businesses Worldwide</h2>
          <p className="mt-4 text-gray-400 sm:text-xl">
            Empowering businesses with reliable solutions and seamless experiences.
          </p>
        </div>

        <dl className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-4">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="flex flex-col items-center justify-center    text-center  transition-all"
            >
              {/* Icon with full-round background */}
            
              <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-[#9b5fb3]  text-white text-3xl shadow-lg border-2 border-[#1a1d2e] ">
                <stat.icon />
             
              </div>

              {/* Animated Number */}
              <dd className="text-4xl font-extralight text-white md:text-5xl">
                {counts[index].toLocaleString()}
              </dd>

              <dt className="mt-2 text-lg font-light text-white">{stat.name}</dt>
            </div>
          ))}
        </dl>

        <div className="flex flex-col items-center justify-center text-center mt-20 mb-4">
          <h2 className="text-white text-3xl font-extralight mb-4">Ready to take the initiative and <br />convert your great idea into a reality?</h2>
          <h1 className="text-[#9b5fb3] text-4xl font-bold mt-2 mb-4">LET’S MAKE IT HAPPEN!</h1>
          <Button className="bg-[#4d465f] text-white border  mt-4 px-8 py-2 rounded-full transition-all duration-300 hover:bg-white hover:text-black hover:translate-y-1 active:translate-y-1">
            Click More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default States;
