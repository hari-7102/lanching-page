import React from "react";

import { MdOutlineLocationOn } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";
import {motion }  from 'framer-motion'

function Price() {
  return (
    <div className="lg:px-16 px-5 py-6 bg-green-50  ">
      <motion.div className="w-full text-8xl text-green-800" 
      initial={{opacity:0 , y:-25}}
      whileInView={{opacity:1 , y:0}}
      transition={{duration:1}}
         >
        <p className="font-semibold">Get in Touch </p>
        <p className="text-6xl py-0.5 px-1.5 font-semibold">With Us</p>
      </motion.div>

      <motion.div className="flex flex-wrap lg:flex-nowrap " 
            initial={{opacity:0 , y:-25}}
            whileInView={{opacity:1 , y:0}}
            transition={{duration:1}} >
        <div className="lg:w-1/2 py-5 flex-col flex  w-full">
          <p className="text-base text-gray-500  py-2">Name</p>
          <input
            type="text"
            name=""
            id=""
            className="border-2 bg-white border-gray-400 px-4  py-1.5 rounded-sm"
          />
          <p className="text-base text-gray-500  py-2">Email</p>
          <input
            type="text"
            name=""
            id=""
            className="border-2  bg-white border-gray-400 px-4   py-1.5 rounded-sm"
          />
          <p className="text-base text-gray-500  py-2">Phone</p>
          <input
            type="text"
            name=""
            id=""
            className="border-2 bg-white border-gray-400  px-4 py-1.5 rounded-sm"
          />
          <p className="text-base text-gray-500  py-2">
            In which type of space are you interest ?
          </p>
          <input
            type="text"
            name=""
            id=""
            className="border-2 bg-white border-gray-400   px-4 py-1.5 
            rounded-sm"
          />
          <p className="text-base text-gray-500  py-2">Message</p>
          <input
            type="text"
            name=""
            id=""
            className="border-2  bg-white h-28 border-gray-400  px-4 py-1.5 
            rounded-sm "
          />

          <button className="bg-amber-300 my-2 text-green-600 text-xl rounded-xl cursor-pointer ">
            Submit
          </button>
        </div>

        <div className="lg:w-1/2 w-full lg:px-24 px-4 py-10">
          <div className="flex items-center gap-3">
            <MdOutlineLocationOn  size={22} className="text-gray-600"/>
            <p className="font-semibold text-xl text-green-800 ">Regent Info Solution</p>
          </div>
            <div  className="mx-9 py-1">
                <p>Kalapatti Main Road</p>
                <p>Nehru Nagar West Coimbatore</p>
                <p>Tamilnadu - 638301 </p>
            </div>
            <div className="flex items-center gap-3 py-2">
                <MdCall size={22} className="text-gray-600" />
                <p className="font-semibold text-base text-green-800"  >+91 6383037102</p>
            </div>
            <div className="flex items-center gap-3">
                <IoMdMail size={22}  className="text-gray-600"/>
                <p  className="font-semibold text-base  text-green-800 "  >hariharanbvn28@gmail.com</p>
            </div>

            <div className="py-1 ">
                <p className="text-2xl font-semibold py-4  text-green-800">Office Environment</p>
                <img src="https://img.freepik.com/free-photo/empty-room-with-chairs-desks_23-2149008873.jpg" alt="" className="rounded-xl w-96"/>
            </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Price;



