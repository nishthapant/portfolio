"use client";
import React from "react";
import Hero from "./Hero";
import Socials from "./Socials";

const StaticCard = () => {
  return (
    <div className="h-screen grid grid-rows-3 px-20">
      <div className="row-span-1 flex items-start py-8 justify-start">
        <Hero />
      </div>
      <div className="row-span-1 flex items-start justify-start">
        <div>
          {/* <div className="flex items-center justify-center">
            <img
              src={headshot.src}
              alt="Nishtha Pant"
              className="profile-img"
            />
          </div> */}
          <div className="glow-text tagline">
            <p>
              "I build modern, engaging web applications & explore AI to push
              creative boundaries."
            </p>
          </div>
        </div>
      </div>
      <div className="row-span-1 flex items-end justify-start">
        <Socials />
      </div>
    </div>
  );
};

export default StaticCard;
