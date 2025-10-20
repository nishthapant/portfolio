"use client";

import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col gap-20">
      <div>
        <p className="font-extrabold static-heading">Nishtha Pant</p>
        <p className="static-subheading">Software Developer</p>
      </div>
      <p className="glow-text tagline text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-left">
        &quot;I build modern, engaging web applications & explore AI to push
        creative boundaries.&quot;
      </p>
    </div>
  );
};

export default Hero;
