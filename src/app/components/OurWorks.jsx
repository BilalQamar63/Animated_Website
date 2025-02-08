import React from "react";
import Image from "next/image";
import Icon1 from "@/public/1.jpg";
import Icon2 from "@/public/2.jpg";
import Icon3 from "@/public/3.jpg";
import Icon4 from "@/public/4.jpg";
import Icon5 from "@/public/52.jpg";
import Icon6 from "@/public/6.jpg";
import Icon7 from "@/public/7.jpg";
import Icon8 from "@/public/8.jpg";
import { Camera, Share2 } from "lucide-react";

const cards = [
  { id: 1, image: Icon1, text: "Project One" },
  { id: 2, image: Icon2, text: "Project Two" },
  { id: 3, image: Icon3, text: "Project Three" },
  { id: 4, image: Icon4, text: "Project Four" },
  { id: 5, image: Icon5, text: "Project Five" },
  { id: 6, image: Icon6, text: "Project Six" },
  { id: 7, image: Icon7, text: "Project Seven" },
  { id: 8, image: Icon8, text: "Project Eight" },
];

const OurWorks = () => {
  return (
    <div className="bg-[#0b0e21] text-white flex flex-col items-center py-10">
      <div className="text-2xl font-bold mb-6">Our Recent Works</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 w-full max-w-7xl">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative group w-full h-64 overflow-hidden shadow-lg "
          >
            <Image
              src={card.image}
              alt={card.text}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              layout="fill"
            />
            <div className="absolute inset-0 bg-[#4d465f] opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-[#4d465f] to-transparent group-hover:h-full transition-all duration-500 flex flex-col ">
              <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Share2 size={24} className="text-white" />
                <Camera size={24} className="text-white" />
              </div>
              <div className="w-20 h-0.5 bg-white mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-2">
                {card.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWorks;
