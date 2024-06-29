import React from "react";
import WorkCard from "../../chip/WorkCard";

const Work = () => {
  return (
    <div id="works" className="container mx-auto mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5 ml-6">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">Works</h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full ml-6">
        <p className="text-gray-700 font-medium w-[100%]">
          Here are some of my works.
        </p>
      </div>
      {/* card */}
      <div className="card-wrapper mx-auto w-[90%] sm:w-full mt-5">
        <div className="card-box grid gap-5 md:grid-cols-2 sm:gap-5 sm:grid-cols-1">
          <WorkCard />
          {/* Add more WorkCard components here if needed */}
        </div>
      </div>
    </div>
  );
};

export default Work;
