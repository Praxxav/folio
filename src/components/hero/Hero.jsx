import React from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaPlay } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/Resume.pdf";

const Hero = () => {
  return (
    <div id="home" className="bg-gradient-to-r from-green-200 to-blue-200 py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
       
        <div className="left flex-1 flex flex-col justify-center gap-5 p-6 md:pr-16">
          <div className="info flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2 data-aos="fade-up" className="text-5xl font-bold sm:text-[2rem]">
            Building Seamless Experiences from Frontend to Backend
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={["Web Developer", 2000, "Freelancer", 2000, ""]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-yellow-500 text-4xl font-bold sm:text-3xl"
            />
            <p
              className="text-[1.1rem] font-medium text-gray-600 sm:text-[.95rem] leading-relaxed"
            >
              I am a Full Stack Developer
            </p>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5 mt-4">
            <a
              href={resumePDF}
              className="flex items-center gap-2 border text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold hover:text-yellow-500"
              download
            >
              <div className="flex items-center gap-1">
                Resume <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className="flex gap-5"
            >
              <li>
                <a href="https://github.com/Praxxav">
                  <AiFillGithub className="h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/pranav-kulkarni-316721248/">
                  <FaLinkedinIn className="h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/prxnxv_k099/">
                  <AiFillInstagram className="h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />
                </a>
              </li>
              <li>
                <a href="https://x.com/PranavKulk61053">
                  <AiFillTwitterCircle className="h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right flex-1 flex items-center justify-center p-6 md:pl-16">
          <div className="relative h-full flex flex-col justify-center items-start space-y-4">
            <p className="text-gray-700 text-lg ">
              A passionate Full Stack Developer with expertise in frontend, backend, and DevOps technologies. I excel in creating seamless and dynamic web applications.
            </p>
            <p className="text-gray-700 text-lg">
              Transform your vision into stunning digital reality with expert development services tailored to your unique business needs.
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
