import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";

import {
  IoLogoHtml5,
  IoLogoNodejs,
  IoLogoAngular,
} from "react-icons/io";

import {
  SiMongodb,
  SiMysql,
  SiReact,
} from "react-icons/si";
import { FaDocker, FaJava } from "react-icons/fa";
import { GrCode } from "react-icons/gr";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills" className="bg-white dark:bg-gray-800">
      <div className="container mx-auto py-16 px-6 md:px-0">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-10">
          <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.5px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content */}
        <div className="flex flex-col md:flex-row gap-10 ml-6">
          {/* Left Box */}
          <div className="left flex-1">
            <p className="text-gray-700 font-medium">
              Here are my skills.
            </p>
            <div className="progress mt-6 space-y-4">
              <ProgressBar
                logo={<IoLogoHtml5 />}
                name={"Frontend: HTML, CSS, JS Frameworks"}
                value={95}
              />
              <ProgressBar
                logo={<IoLogoNodejs />}
                name={"Backend: Node.js, Express"}
                value={88}
              />
              <ProgressBar
                logo={<SiMongodb />}
                name={"Databases: MySQL, MongoDB"}
                value={80}
              />
              <ProgressBar
                logo={<FaDocker />}
                name={"DevOps: Docker, Kubernetes"}
                value={80}
              />
              <ProgressBar
                logo={<FaJava />}
                name={"Data Structures and Algorithms"}
                value={80}
              />
            </div>
          </div>
          {/* Right Box */}
          <div className="right flex-1 flex flex-wrap gap-10 items-center justify-center ">
            <div className="first2 flex flex-col gap-10">
              <SkillBox
                logo={<IoLogoAngular />}
                black={"white"}
                white={"black"}
                skill={"Angular"}
              />
              <SkillBox
                logo={<SiMysql />}
                black={"white"}
                white={"black"}
                skill={"SQL"}
              />
            </div>
            <div className="last2 flex flex-col gap-10">
              <SkillBox
                logo={<SiReact />}
                black={"black"}
                white={"white"}
                skill={"React"}
              />
              <SkillBox
                logo={<GrCode />}
                black={"black"}
                white={"white"}
                skill={"TypeScript"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
