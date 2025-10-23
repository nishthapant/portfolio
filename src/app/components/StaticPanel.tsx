"use client";
import React from "react";
import Hero from "./Hero";
import Socials from "./Socials";

const StaticCard = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center lg:justify-between lg:pb-10">
      <div className="py-10 lg:py-0">
        <Hero />
      </div>
      <div className="leading-relaxed lg:p-10">
        <p className="flex items-center justify-center glow-text tagline text-center text-sm md:text-lg lg:text-xl lg:justify-center lg:items-center">
          &quot;I build modern, engaging web applications & explore AI to push
          creative boundaries.&quot;
        </p>
      </div>
      <div className="flex items-center justify-center py-15 lg:py-0 md:items-end md:justify-start">
        <Socials />
      </div>
    </div>
  );
};

export default StaticCard;
