"use client";
import React, { useState, useEffect, useRef } from "react";
import ContactImageTop from "@/app/public/23.jpg"; // Top background image
import ContactImageBottom from "@/app/public/25.png"; // Bottom background image
import Image from "next/image";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setShowForm(true);
          }, 1000); // Show form after 1 second
        }
      },
      { threshold: 0.5 } // Trigger when 50% visible
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
    <div ref={sectionRef} className="bg-[#3d2e53] relative min-h-screen flex items-center justify-center">
      {/* Background Images */}
      <div className="absolute inset-0">
        <Image src={ContactImageTop} alt="Top Background" layout="fill" objectFit="cover" />
        <Image src={ContactImageBottom} alt="Bottom Background" layout="fill" objectFit="cover" />
      </div>

      {/* Contact Form (conditionally shown with animation) */}
      <div
        className={`relative w-full max-w-lg transition-all duration-700 ease-out transform ${
          showForm ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-5xl font-extralight text-center text-white mb-4">
          Contact Us
        </h2>

        <form className="flex flex-col space-y-4 bg-transparent">
          {/* First & Last Name */}
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 px-4 py-2 border bg-transparent text-white placeholder-gray-300 outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 px-4 py-2 border bg-transparent text-white placeholder-gray-300 outline-none"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 border bg-transparent text-white placeholder-gray-300 outline-none"
          />

          {/* Message */}
          <textarea
            placeholder="Your Message"
            rows="4"
            className="px-4 py-2 border border-white bg-transparent text-white outline-none"
          ></textarea>

          {/* Submit Button */}
          <button className="bg-[#9b5fb3] uppercase text-white px-8 py-2 hover:bg-[#323237] transition">
            Submit Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
