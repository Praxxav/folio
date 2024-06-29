import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {
  return (
    <div id="contact" className="container mx-auto mt-16">
      {/* heading */}
      <div className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">Contact</h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>

      {/* contact section */}
      <div className="flex justify-between items-center flex-col md:flex-row">
        {/* Left box - Contact information */}
        <div className="left flex-1 flex items-center justify-center sm:flex-col sm:w-[40%] md:w-[30%]">
          <div className="text-center">
            <h1 className="text-5xl font-bold sm:text-3xl">Contact Me</h1>
            <h3 className="text-xl sm:text-lg">Leave a request</h3>
          </div>
          <div className="flex justify-center mt-5">
            <button
              className="text-yellow-500 font-extrabold text-3xl p-2 rounded-lg shadow-md hover:shadow-xl"
            >
              <BsArrowRight className="md:rotate-360" />
            </button>
          </div>
        </div>

        {/* Right box - Contact form */}
        <div className="right flex-1 mt-10 md:mt-4">
          <form
            className="flex flex-col gap-5 w-full max-w-[600px] mx-auto"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input type="hidden" name="access_key" value="c6c94f5b-39a2-44e3-a964-f73bf0fdc715" />
            <input
              className="input-field"
              type="email"
              placeholder="Your Email"
              name="email"
              required
            />
            <input
              className="input-field"
              type="text"
              placeholder="Your Name"
              name="name"
              required
            />
            <textarea
              className="input-field"
              rows="4"
              placeholder="Write your message"
              name="message"
              required
            />
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg flex items-center justify-center space-x-1 transition duration-300"
              type="submit"
            >
              <span>Send</span>
              <RiSendPlaneFill />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
