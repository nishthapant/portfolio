"use client";
import React from "react";
import Hero from "./Hero";
import Socials from "./Socials";

const StaticCard = () => {
  return (
    <div className="h-screen flex flex-col justify-between pb-10 sm:px-8 md:px-16 lg:px-20">
      <Hero />
      <div className="items-end justify-start">
        <Socials />
      </div>
    </div>
  );
};

export default StaticCard;
