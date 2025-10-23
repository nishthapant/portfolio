"use client";
import React from "react";
import Hero from "./Hero";
import Socials from "./Socials";

const StaticCard = () => {
  return (
    <div className="h-screen flex flex-col justify-center md:items-start lg:justify-between lg:pb-10">
      <div className="py-10 lg:px-16 lg:py-0 w-full">
        <Hero />
      </div>
      <div className="w-full flex justify-center lg:justify-start items-center leading-relaxed lg:px-16 lg:py-0">
        <p className="glow-text tagline text-center md:text-lg lg:text-xl lg:text-left">
          &quot;I build modern, engaging web applications & explore AI to push
          creative boundaries.&quot;
        </p>
      </div>
      <div className="w-full flex justify-center lg:justify-start py-15 lg:px-16 lg:py-0">
        <Socials />
      </div>
    </div>
  );
};

export default StaticCard;
