'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const OurServices = () => {
  return (
    <div className="bg-[#0b0e21] text-white py-16 px-6 text-center flex flex-col items-center">
      <motion.h2 
        className="text-4xl font-extrabold mb-8 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h2>

      {/* Image with hover effect */}
     
        <Image 
          src='/assets/5.png'
          alt="Crystal" 
          width={900} 
          height={600} 
          className="rounded-lg transition-transform duration-300 hover:scale-105"
        />

      {/* Service Details */}
      <motion.p 
        className="mt-6 max-w-3xl text-lg text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        We offer high-quality services tailored to meet your needs. Experience excellence in every detail!
      </motion.p>
      <Button className="bg-white text-black border border-blue-900 mt-2 px-8 py-2 rounded-full transition-all duration-300 hover:bg-white hover:text-black hover:translate-y-1 active:translate-y-1">
        Hide us now
      </Button>
    </div>
  );
};

export default OurServices;
