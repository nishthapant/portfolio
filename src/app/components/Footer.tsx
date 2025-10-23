"use client";

import React from "react";
import { GiCoffeeCup } from "react-icons/gi";

const Footer = () => {
  return (
    <div className="flex items-start justify-end gap-1 sm:gap-2 text-sm sm:text-base pt-8">
      <p className="footer">
        © 2025 Nishtha Pant. Built with passion and{" "}
        <GiCoffeeCup className="inline text-lg sm:text-lg md:text-xl" /> .
      </p>
    </div>
  );
};

export default Footer;
