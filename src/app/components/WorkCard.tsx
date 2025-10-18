"use client";
import React from "react";
import { Work } from "./types";

interface WorkCardProps {
  work: Work;
}

const WorkCard = ({ work }: WorkCardProps) => {
  return (
    <div className="scroll-text card flex work">
      <div className="flex-1">
        <img src={work.imgSrc} alt={work.designation} className="job-img" />
        <div className="work-dur">
          {work.duration[0]} - {work.duration[1]}
        </div>
      </div>
      <div className="flex-3 px-8 text-left">
        <div className="work-desg">{work.designation}</div>
        <div className="work-comp">
          <a href={work.companySrc}>{work.company}</a>
        </div>
        <ul className="list-disc ml-6 work-desc">
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
