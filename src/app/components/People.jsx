import React from 'react';
import Image from "next/image";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaSkype } from "react-icons/fa";
import People1 from "@/public/people-1.jpg";
import People2 from "@/public/people-2.jpg";
import People3 from "@/public/people-3.jpg";

const people = [
  {
    id: 1,
    name: "Tony Wayne",
    role: "Developer",
    number: "+123 456 7890",
    image: People1,
    description: "Expert in full-stack development with a passion for clean, efficient code.",
    social: {
      github: "#",
      linkedin: "#",
      facebook: "#",
      instagram: "#",
      skype: "#",
    },
  },
  {
    id: 2,
    name: "Tony Johnson",
    role: "UI/UX Designer",
    number: "+987 654 3210",
    image: People2,
    description: "Creative designer focused on crafting beautiful, user-friendly experiences.",
    social: {
      github: "#",
      linkedin: "#",
      facebook: "#",
      instagram: "#",
      skype: "#",
    },
  },
  {
    id: 3,
    name: "Michael Smith",
    role: "Project Manager",
    number: "+555 666 7777",
    image: People3,
    description: "Leader in agile methodologies, ensuring seamless project execution.",
    social: {
      github: "#",
      linkedin: "#",
      facebook: "#",
      instagram: "#",
      skype: "#",
    },
  },
];

const People = () => {
  return (
    <div className="bg-[#3d2e53] py-12 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-4xl mx-auto cursor-pointer">
        {people.map((person) => (
          <div
            key={person.id}
            className="relative bg-[#1a1d2e] shadow-lg p-6 text-center hover:shadow-xl transition-all h-[400px] hover:bg-[#3c3950] "
          >
            {/* Rounded Image */}
            <div className="flex justify-center">
              <Image
                alt={person.name}
                src={person.image}
                className="w-32 h-32 rounded-full border-4 border-gray-500 shadow-lg"
              />
            </div>

            {/* Text Content */}
            <div className="mt-4">
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                {person.role}
              </p>
              <p className="text-xl font-bold text-white sm:text-2xl">{person.name}</p>
              <p className="text-sm text-gray-300 mt-2">{person.description}</p>
              <p className="text-sm text-gray-400 mt-2">📞 {person.number}</p>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center mt-4 space-x-4">
              <a href={person.social.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-white text-xl hover:text-gray-400 transition-all" />
              </a>
              <a href={person.social.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-500 text-xl hover:text-blue-400 transition-all" />
              </a>
              <a href={person.social.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-blue-600 text-xl hover:text-blue-500 transition-all" />
              </a>
              <a href={person.social.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-pink-500 text-xl hover:text-pink-400 transition-all" />
              </a>
              <a href={person.social.skype} target="_blank" rel="noopener noreferrer">
                <FaSkype className="text-blue-400 text-xl hover:text-blue-300 transition-all" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default People;
