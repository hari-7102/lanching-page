import React from "react";
import img from "../assets/img.png";

import { BiBriefcase } from "react-icons/bi";

import { BiCommentDetail } from "react-icons/bi";

import { BiIntersect } from "react-icons/bi";

import { BiLogoMicrosoft } from "react-icons/bi";

import { BiMessageAltAdd } from "react-icons/bi";

import { SlCursorMove } from "react-icons/sl";

import { SlWallet } from "react-icons/sl";

import { FaArrowRight } from "react-icons/fa";

import { motion } from "framer-motion";

const Design = () => {

  const imgItems = [
    {icons:BiBriefcase},
    {icons:BiCommentDetail},
    {icons:BiIntersect},
    {icons:BiLogoMicrosoft},
    {icons:BiMessageAltAdd},
    {icons:SlCursorMove},
    {icons:SlWallet},
  ]
  return (
    <div className="">
      <motion.div className="flex gap-4 w-full flex-wrap lg:px-32 py-20 lg:flex-nowrap px-5 "  
      initial={{opacity:0 , scale:0.7}}
      whileInView={{opacity:1 , scale:1}}
      viewport={{ once: true, amount: 0.2 }}
      transition={{duration:1}}
      >
        <div className="w-full lg:w-1/3 flex justify-center mb-6 lg:mb-0">
          <img
            src="https://inmakes.com/assets/img/services-image/3.png"
            alt=""
            className="w-80 md:w-60 sm:w-48"
          />
        </div>

        <div className="lg:w-3/5 w-full">
          <p className="text-4xl text-gray-600  font-semibold   ">
            How to design your site footer like
          </p>
          <p className="text-4xl text-gray-600 font-semibold  ">we did</p>
          <p className="text-sm text-gray-500 py-7">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <button className="bg-green-700 px-12 py-4 text-white rounded-sm">
            Learn More
          </button>
        </div>
      </motion.div>

      <motion.div  
            initial={{opacity:0 , x: -20}}
            whileInView={{opacity:1 , x:0}}
            viewport={{ once: true, amount: 0.2 }}
            transition={{duration:1}}>
        <div className="bg-gray-100 lg:px-24 px-8 py-20 flex w-full flex-wrap lg:flex-nowrap">
          <div className="lg:w-2/5 w-full flex justify-center">
            <img src={img} alt="" className="w-72" />
          </div>

          <div className="lg:w-3/5 w-full">
            <p className="text-base text-gray-600">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit . Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <p className="text-2xl text-green-600 my-3">Tim Smith</p>
            <p className="text-base text-gray-600">
              British Dragon Boat Racing Association
            </p>
            <div className="flex-wrap grid grid-cols-3 justify-around gap-8 py-3 lg:flex">
              {imgItems.map((img)  =>(
                <img.icons size={30}   className="text-blue-900"/>
              ))

              }
              {/* <BiBriefcase size={30} className="text-violet-700" />
              <BiCommentDetail size={30}   className="text-violet-700"/>
              <BiIntersect size={30}   className="text-violet-700"/>
              <BiLogoMicrosoft size={30}   className="text-violet-700"/>
              <BiMessageAltAdd size={30}   className="text-violet-700" />
              <SlCursorMove size={30} className="text-violet-700"/>
              <SlWallet size={30} className="text-gray-700-700"/> */}
              <div className=" items-center gap-2 justify-center   lg:flex   ">
                <p className="text-xl text-green-600">Meet All Customer</p>
                <FaArrowRight size={22} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Design;
