import React from "react";

import Illustration from "../assets/illustration.png";

const Hero = () => {
  return (
    <div className="bg-gray-100 w-full px- py-  ">
      <div className="flex flex-wrap justify-between items-center md:flex-nowrap ">
        <div className="lg:w-3/4 w-full text-start py-28 lg:px-28 px-4 flex-wrap lg:flex-nowrap">
          <p className="text-7xl font-semibold text-gray-600">
            Lessons and insights
          </p>
          <p className="text-6xl text-green-500">from 8 years</p>
          <p className="text-base py-4 text-gray-400 my-3">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="bg-green-600 px-11 cursor-pointer  py-4 rounded-sm text-white">
            Register
          </button>
        </div>
        <div className="lg:w-1/4 px-11 justify-center flex  items-center w-full">
          <img src={Illustration} alt="" className="w-80 md:w-70 sm:w-60"/>
        </div>
      </div>

      <div className="flex gap-2 justify-center items-center px-5 ">
        <p className="border border-green-600 bg-green-600 rounded-full p-1"></p>
        <p className="border border-green-200 bg-green-200 rounded-full p-1"></p>
        <p className="border border-green-200 bg-green-200 rounded-full p-1"></p>
      </div>
    </div>
  );
};

export default Hero;
