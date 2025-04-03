"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolling ? "bg-black/50 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div>
          <Link href="/">
            <Image
              alt="Logo"
              src="/assets/logo.png"
              height={40}
              width={120}
              priority
            />
          </Link>
        </div>

        <div className="hidden md:flex space-x-6 text-white">
          <Link href="/services" className="hover:opacity-75">
            Services
          </Link>
          <Link href="/work" className="hover:opacity-75">
            Works
          </Link>
          <Link href="/aboutus" className="hover:opacity-75">
            About
          </Link>
          <Link href="/people" className="hover:opacity-75">
            Team
          </Link>
          <Link href="/states" className="hover:opacity-75">
            Achievements
          </Link>
          <Link href="/contact" className="hover:opacity-75">
            Contacts
          </Link>
        </div>

        <div className="flex space-x-6 items-center text-white">
          <FaSearch className="cursor-pointer hover:opacity-75 hidden md:block" />

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/70 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-black text-white transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 text-white text-xl"
        >
          <FaTimes />
        </button>

        <nav className="flex flex-col items-start space-y-6 mt-16 px-8">
          {["Services", "Works", "About", "Team", "Achievements", "Contacts"].map(
            (item, index) => (
              <Link
                key={index}
                href={`/${item.toLowerCase()}`}
                className="text-lg font-medium hover:opacity-75"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
