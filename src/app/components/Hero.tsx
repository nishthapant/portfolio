"use client";

import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:items-start gap-2">
      <p className="flex-1 font-extrabold text-center text-4xl sm:text-4xl md:text-6xl lg:text-3xl md:mt-20 lg:text-left">
        Nishtha Pant
      </p>
      <p className="flex-1 font-light text-center text-lg sm:text-lg md:text-2xl lg:text-xl lg:text-left">
        Software Developer
      </p>
    </div>
  );
};

export default Hero;
