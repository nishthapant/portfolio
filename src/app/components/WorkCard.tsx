"use client";
import React from "react";
import { Work } from "./types";

interface WorkCardProps {
  work: Work;
}

const WorkCard = ({ work }: WorkCardProps) => {
  return (
    <div className="scroll-text card flex flex-col md:flex-row work-card ">
      <div className="w-full h-auto flex-col md:w-1/5 md:h-1/5 flex items-center justify-center">
        <img
          src={work.imgSrc}
          alt={work.designation}
          className="flex-1 object-cover w-full h-auto job-img"
        />
        <div className="flex-1 work-dur">
          {work.duration[0]} - {work.duration[1]}
        </div>
      </div>
      <div className="flex-1 p-4 text-left md:px-8">
        <div className="work-desg text-md md:text-2xl">{work.designation}</div>
        <div className="work-comp">
          <a href={work.companySrc}>{work.company}</a>
        </div>
        <ul className="list-disc ml-2 md:ml-6 work-desc">
          {work.jobDescription.map((point, ind) => {
            return (
              <li key={ind} className="py-1.5">
                {point}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default WorkCard;
