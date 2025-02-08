import { Button } from '@/components/ui/button';
import React from 'react';

const Home = () => {
  return (
    <div className="container relative">
      {/* Space Background */}
      <div className="space">
        {/* Clouds */}
        <div className="cloud"></div>
        
        {/* Mountains */}
        <div className="mountain">
          {/* Centered Heading */}
          <div className="centered-heading">
            <h1 className="rotating-heading">Welcome to the Adventure</h1>
            <p>Explore the majestic landscapes and vast skies.</p>
            
            {/* Animated Text */}
            <h2 className="rotating-text">
              {'Our GemStone is hidden under mountains of hardwork'
                .split('')
                .map((char, index) => (
                  <span key={index} style={{ '--i': index }}>
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
            </h2>
            
            {/* Styled Button */}
            <Button className="bg-white text-black border border-blue-900 mt-2 px-8 py-2 rounded-full transition-all duration-300 hover:bg-white hover:text-black  hover:translate-y-1 active:translate-y-1">
              Click More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
