import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex flex-row gap-4 sm:gap-6 md:gap-6">
      <a href="https://github.com/nishthapant" target="_blank">
        <FaGithub className="text-xl sm:text-2xl md:text-3xl hover:text-accent transition-colors" />
      </a>
      <a href="https://www.linkedin.com/in/nishtha-pant/" target="_blank">
        <FaLinkedin className="text-xl sm:text-2xl md:text-3xl hover:text-accent transition-colors" />
      </a>
    </div>
  );
};

export default Socials;
