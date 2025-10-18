"use client";

import React from "react";
import workData from "../work.json";
import WorkCard from "./WorkCard";

const WorkList = () => {
  const works = workData.work;
  return (
    <div className="max-w-3xl flex flex-col gap-10">
      {works.map((exp, ind) => {
        return <WorkCard key={ind} work={exp} />;
      })}
    </div>
  );
};

export default WorkList;
