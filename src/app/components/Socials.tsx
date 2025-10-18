import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex flex-row gap-4 sm:gap-6 md:gap-6 socials">
      <a href="https://github.com/nishthapant" target="_blank">
        <FaGithub className="text-2xl sm:text-3xl md:text-4xl hover:text-accent transition-colors" />
      </a>
      <a href="https://www.linkedin.com/in/nishtha-pant/" target="_blank">
        <FaLinkedin className="text-2xl sm:text-3xl md:text-4xl hover:text-accent transition-colors" />
      </a>
    </div>
  );
};

export default Socials;
