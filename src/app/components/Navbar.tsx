import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../public/logo_3dd292161467eeb8341a60d86cd163de_1x.png';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Left Links */}
        <div className="flex space-x-6">
          <Link href="#" className="links">
            Services
          </Link>
          <Link href="#" className="links">
            Works
          </Link>
          <Link href="#" className="links">
            About
          </Link>
        </div>

        {/* Logo */}
        <div className="text-center">
          <Link href="#" >
            <Image alt="Logo" src={Logo} height={40}  />
          </Link>
        </div>

        {/* Right Links */}
        <div className="flex space-x-6">
          <Link href="#" className="links">
            Team
          </Link>
          <Link href="#" className="links">
            Achievements
          </Link>
          <Link href="#" className="links">
            Contacts
          </Link>
          <div className="logo ">
            <FaSearch />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
