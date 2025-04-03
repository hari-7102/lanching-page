import React from "react";

import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const Card = () => {
  return (
    <motion.div
      className="mb-20"
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="lg:px-32 py-6 text-center w-full justify-center px-2">
        <p className="text-gray-600 text-4xl font-semibold">
          Caring is the new marketing
        </p>
        <p className="py-4 text-gray-500">
          The Nextcent blog is the best place to read about the latest
          membership insights,
          <br />
          trends and more. See who's joining the community, brread about how our
          community <br />
          are increasing their membership income and lot's more.​
        </p>
      </div>
      <div className="flex justify-around items-center gap-12 py-3  lg:flex-nowrap flex-wrap   ">
        <div className="flex flex-col gap-4 relative">
          <img
            src="https://images.unsplash.com/photo-1583468982228-19f19164aee2?q=80&w=1611&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="rounded-xl  w-[23rem] h-64"
          />
          <div className=" absolute bg-white rounded-xl  p-5 text-gray-700 -bottom-14 right-16  shadow-2xl">
            <p className="text-center text-xl">
              Creating Streamlined <br />
              Safeguarding Processes <br /> with OneRen
            </p>
            <div className="flex justify-center items-center gap-3 my-2">
              <button className="text-base text-green-600">Readmore</button>
              <FaArrowRightLong className="text-green-600" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 relative ">
          <img
            src="https://plus.unsplash.com/premium_photo-1681248156477-9d00c17bd594?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="rounded-xl  w-[23rem] h-64 "
          />
          <div className=" absolute bg-white rounded-xl  p-5 text-gray-700 -bottom-14 right-11  shadow-2xl">
            <p className="text-center text-xl">
              What are your safeguarding <br /> responsibilities and how can{" "}
              <br /> you manage them?
            </p>
            <div className="flex justify-center items-center gap-3 my-2">
              <button className="text-base text-green-600">Readmore</button>
              <FaArrowRightLong className="text-green-600" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 relative">
          <img
            src="https://plus.unsplash.com/premium_photo-1683121152928-787ececd7359?q=80&w=1750&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="rounded-xl  w-[23rem] h-64  "
          />
          <div className=" absolute bg-white rounded-xl  p-5 text-gray-700 -bottom-14 right-11  shadow-2xl">
            <p className="text-center text-xl">
              Revamping the Membership <br /> Model with Triathlon <br />{" "}
              Australia
            </p>
            <div className="flex justify-center items-center gap-3 my-2">
              <button className="text-base text-green-600">Readmore</button>
              <FaArrowRightLong className="text-green-600" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
