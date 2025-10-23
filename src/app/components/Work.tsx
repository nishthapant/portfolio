"use client";

import React from "react";
import WorkList from "./WorkList";

const Work = () => {
  return (
    <div className="max-w-3xl flex flex-col gap-2 work">
      <div className="section-heading">Work Experience</div>
      <WorkList />
    </div>
  );
};

export default Work;
