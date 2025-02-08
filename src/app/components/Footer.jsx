import Image from "next/image";
import React from "react";
import Logo from "@/app/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#212029] text-white py-12">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Logo & Intro */}
          <div className="lg:col-span-2 flex flex-col items-center  text-center ">
            <Image src={Logo} alt="Company Logo" width={150} height={80} />

            <h2 className="text-2xl font-light mt-4">Your Trusted Partner</h2>
            <p className="text-gray-400 text-sm font-thin mt-2 max-w-md">
              We provide top-notch services to help businesses grow and succeed in today's fast-paced digital world.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-light">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-gray-400 text-sm font-thin">
              <li> 0123 456 7890</li>
              <li> 123 Main Street, City</li>
              <li> info@example.com</li>
              <li> Mon - Fri: 9am - 6pm</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-light">Services</h3>
            <ul className="mt-4 space-y-2 text-gray-400 text-sm font-thin">
              <li>1-on-1 Coaching</li>
              <li>Company Review</li>
              <li>Accounts Review</li>
              <li>HR Consulting</li>
              <li>SEO Optimization</li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl font-light">Company</h3>
            <ul className="mt-4 space-y-2 text-gray-400 text-sm font-thin">
              <li>About Us</li>
              <li>Meet the Team</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col lg:flex-row items-center justify-between text-sm text-gray-400">
         
          <p className="mt-4 lg:mt-0 text-xs">&copy; {new Date().getFullYear()} Bilal Qamar . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
