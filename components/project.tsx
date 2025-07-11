'use client'

import { projectsData } from "@/lib/data";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";

type ProjectProps = (typeof projectsData)[number] & {
  link: string;
  githuburl: string;
};

function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
  githuburl
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  });

  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      className="group mb-3 sm:mb-8 last:mb-0"
      style={{
        scale: scrollProgress,
        opacity: opacityProgress,
      }}
    >
      <section className="group bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative mb-3 sm:mb-8 last:mb-0 sm:h-[24rem] hover:bg-gray-200 transition">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[20rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>

          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] 
                uppercase tracking-wider text-white rounded-full 
                hover:bg-black transition hover:scale-110 hover:shadow-lg"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>

          {/* GitHub and Live links below tags */}
          <div className="flex gap-4 mt-4">
            {githuburl && (
              <a
                href={githuburl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-gray-700 hover:text-black transition"
              >
                <BsGithub className="text-lg" />
                GitHub
              </a>
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-gray-700 hover:text-black transition"
              >
                <BsBoxArrowUpRight className="text-lg" />
                Live
              </a>
            )}
          </div>
        </div>

        <Image
          className="rounded-t-lg shadow-2xl absolute top-8 -right-40 w-[28.25rem] hidden sm:block 
          group-even:right-[initial] 
          group-even:-left-40 
          group-hover:scale-[1.04] 
          group-hover:-translate-x-3 
          group-hover:translate-y-3 
          group-hover:-rotate-2 
          group-even:group-hover:translate-x-3 
          group-even:group-hover:translate-y-3 
          group-even:group-hover:rotate-2 
          transition"
          src={imageUrl}
          alt="project image"
          quality={95}
        />
      </section>
    </motion.div>
  );
}

export default Project;
