"use client";

import React from "react";
import WorkList from "./WorkList";

const Work = () => {
  return (
    <div className="max-w-3xl flex flex-col gap-2 work">
      <div className="section-heading text-2xl text-center md:text-3xl md:text-start">
        Work Experience
      </div>
      <WorkList />
    </div>
  );
};

export default Work;
