import React from "react";

import people from "../assets/people.png";

import frame from "../assets/frame-2.png";

import { Palette } from "lucide-react";

import { GoPeople } from "react-icons/go";

import { FaRibbon } from "react-icons/fa6";

import { MdOutlinePayments } from "react-icons/md";

import { motion } from "framer-motion";




const Count = () => {
  return (
    <div className="bg-gray-100 w-full py-10 px-5 md:px-10 lg:px-36">
    <div className="flex flex-col lg:flex-row items-center lg:items-start">
     
      <div className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
        <p className="text-2xl sm:text-3xl md:text-4xl text-gray-600">Helping a local</p>
        <p className="text-2xl sm:text-3xl md:text-4xl text-green-600">business reinvent itself</p>
        <p className="text-sm sm:text-base text-gray-500 mt-2">
          We reached here with our hard work and dedication
        </p>
      </div>

     
      <motion.div className="w-full lg:w-1/2 flex flex-wrap justify-center gap-10 lg:gap-16"
      initial={{opacity:0 , scale:0.8}}
      whileInView={{opacity:1 , scale:1}}
      viewport={{ once: true, amount: 0.2 }}
      transition={{duration:1}}
      >
        {/* First Row */}
        <div className="flex justify-center items-center gap-3">
          <GoPeople size={40} className="text-green-600" />
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-gray-600">2,245,341</p>
            <p className="text-gray-500">Members</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-3">
          <Palette size={40} className="text-green-600" />
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-gray-600">46,328</p>
            <p className="text-gray-500">Clubs</p>
          </div>
        </div>

        
        <div className="flex justify-center items-center gap-3">
          <FaRibbon size={40} className="text-green-600" />
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-gray-600">828,867</p>
            <p className="text-gray-500">Event Bookings</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-3">
          <MdOutlinePayments size={40} className="text-green-600" />
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-gray-600">1,926,436</p>
            <p className="text-gray-500">Payments</p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
  );
};

export default Count;





