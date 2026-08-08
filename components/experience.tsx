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
          experiencesData.map((item, index) => {
            const current = index === 0;
            return (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background: "rgba(255,255,255,0.7)",
                  backdropFilter: 'blur(8px)',
                  boxShadow: current
                    ? '0 10px 30px -12px rgba(13,148,136,0.35)'
                    : '0 6px 20px -14px rgba(15,23,42,0.25)',
                  border: current
                    ? '1px solid rgba(13,148,136,0.35)'
                    : '1px solid rgba(0,0,0,0.06)',
                  borderRadius: '0.9rem',
                  textAlign: 'left',
                  padding: '1.4rem 1.8rem',
                }}
                contentArrowStyle={{
                  borderRight: current
                    ? '0.5rem solid rgba(13,148,136,0.35)'
                    : '0.5rem solid rgba(0,0,0,0.06)'
                }}
                date={item.date}
                dateClassName="!text-gray-500 !font-medium"
                icon={item.icon}
                iconStyle={{
                  background: "white",
                  color: current ? '#0d9488' : '#475569',
                  fontSize: "1.5rem",
                  boxShadow: current
                    ? '0 0 0 4px #0d9488, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)'
                    : undefined,
                }}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-bold text-gray-900 leading-snug">{item.title}</h3>
                  {current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-emerald-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Current
                    </span>
                  )}
                </div>
                <p className="!mt-0.5 !font-normal text-xs uppercase tracking-[0.12em] text-gray-400">{item.location}</p>
                <p className="!mt-2 !font-normal text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
            );
          })}
      </VerticalTimeline>
    </section>
  );
}
