import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex flex-row gap-8 socials">
      <a href="https://github.com/nishthapant" target="_blank">
        <FaGithub size={30} className="hover:text-accent transition-colors" />
      </a>
      <a href="https://linkedin.com/in/nishthapant" target="_blank">
        <FaLinkedin className="hover:text-accent transition-colors" size={30} />
      </a>
    </div>
  );
};

export default Socials;
