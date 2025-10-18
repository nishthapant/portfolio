"use client";
import React from "react";
import Hero from "./Hero";
import Socials from "./Socials";

const StaticCard = () => {
  return (
    <div className="h-screen flex flex-col justify-between px-6 sm:px-8 md:px-16 lg:px-20 py-8">
      <div className="flex items-start justify-start">
        <Hero />
      </div>
      <div className="flex items-start justify-center">
        <div className="glow-text tagline max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-center">
            "I build modern, engaging web applications & explore AI to push
            creative boundaries."
          </p>
        </div>
      </div>
      <div className="items-center justify-start">
        <div className="border-t border-gray-700 my-6"></div>
        <Socials />
      </div>
    </div>
  );
};

export default StaticCard;
