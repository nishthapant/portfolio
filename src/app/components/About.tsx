import React from "react";

const About = () => {
  return (
    <div className="max-w-3xl text-left pr-12" id="about">
      <div className="scroll-text about-heading font-extrabold flex items-center pt-12">
        Hi, I’m Nishtha.
      </div>
      <p className="leading-relaxed mb-6 about-text">
        I’m a software developer passionate about crafting modern, responsive
        user experiences that merge creativity with engineering. My favorite
        work lies at the intersection of design and functionality — bringing
        ideas to life through code and building interfaces that are not only
        visually engaging but also accessible and intuitive.
      </p>

      <p className="leading-relaxed mb-6 about-text">
        I thrive in fast-paced environments where I can solve problems, adapt
        quickly, and deliver meaningful products. Frontend development excites
        me because it’s the layer where creativity meets users directly — the
        place where every detail, interaction, and transition shapes how people
        experience technology.
      </p>

      <p className="leading-relaxed about-text">
        Beyond frontend technologies, I love exploring AI and emerging tools to
        expand my skill set and push creative boundaries. I see continuous
        learning not just as part of my career, but as something that fuels my
        curiosity and growth. Outside of code, I enjoy spending time at the gym,
        hanging out with my dog, and learning new languages — currently, French!
      </p>
    </div>
  );
};

export default About;
