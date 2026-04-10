"use client";

import React from "react";

import { experiencesData } from "@/lib/data";
// import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-Header";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';

export default function Experience() {
  return (
    <section id="experience" className="mb-28 w-full max-w-[68rem] scroll-mt-28 px-4 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline >
        {
          experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background: "#f3f4f6",
                  boxShadow: 'none',
                  border: '1px solid rgba(0,0,0,0.05)',
                  textAlign: 'left',
                  padding: '1.2rem 2rem',
                }}
                contentArrowStyle={{
                  borderRadius: '0.4rem solid #9ca3af'
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background: "white",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="font-normal !mt-0">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 ">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
      </VerticalTimeline>
    </section>
  );
}
