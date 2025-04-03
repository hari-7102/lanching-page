import React from "react";

import { motion } from "framer-motion";

const Client = () => {
  const images = [
    "https://cdn-icons-png.flaticon.com/128/2111/2111463.png",
    "https://cdn-icons-png.flaticon.com/128/731/731985.png",
    "https://cdn-icons-png.flaticon.com/128/5968/5968764.png",
    "https://cdn-icons-png.flaticon.com/128/5969/5969020.png",
    "https://cdn-icons-png.flaticon.com/128/5968/5968841.png",
    "https://cdn-icons-png.flaticon.com/128/5968/5968705.png",
    "https://cdn-icons-png.flaticon.com/128/5968/5968534.png",
  ];

  return (
    <div className="my-6">
      <div className="flex flex-col gap-3  justify-center items-center">
        <p className="text-4xl text-gray-800 font-semibold">Our Clients</p>
        <p className="text-base text-gray-600  justify-center px-4">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <div className="w-full flex justify-center items-center py-8 ">
        <div className="relative w-2/3 md:w-1/2  rounded-lg overflow-hidden">
          {/* Left Shadow (Entering Side) */}
          <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-gray-50 via-gray-50 to-transparent z-10" />

          {/* Right Shadow (Exiting Side) */}
          <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-gray-50 via-gray-50 to-transparent z-10" />

          {/* Infinite Scrolling Container */}
          <div className="flex w-full overflow-hidden">
            <motion.div
              className="flex gap-12 justify-center items-center"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              >
              {/* Duplicate images to ensure smooth looping */}
              {[...Array(6)]
                .flatMap(() => images)
                .map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Icon ${index + 1}`}
                    className="w-20 flex-shrink-0"
                  />
                ))}
            </motion.div>
          </div>
        </div>
      </div>
      <br />

      <div className="text-center   text-4xl text-gray-800 font-semibold ">
        <p>Manage your entire community</p>
        <p>in a single system</p>
      </div>
      <p className=" text-center py-4  text-sm text-gray-500">
        Who is Nextcent suitable for?
      </p>

      <motion.div className="mg:flex-col justify-around items-center w-full my-3 gap-3 lg:flex">
        <motion.div
          className="text-center items-center flex flex-col w-full"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          >
          <img
            src="https://cdn-icons-png.flaticon.com/128/1769/1769041.png"
            alt=""
            className="w-12 bg-green-100 p-2 rounded-full"
          />
          <p className="text-center text-xl font-semibold">Membership </p>
          <p className="text-center text-xl font-semibold">Organisations</p>
          <p>
            Our membership management <br />
            software provides full automation of <br />
            membership renewals and payments
          </p>
        </motion.div>

        <motion.div
          className="text-center items-center flex flex-col w-full"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          >
          <img
            src="https://cdn-icons-png.flaticon.com/128/4017/4017471.png"
            alt=""
            className="w-12 bg-green-100 p-2 rounded-full"
          />
          <p className="text-center text-xl font-semibold">National </p>
          <p className="text-center text-xl font-semibold">Associations</p>
          <p>
            Our membership management <br />
            software provides full automation of <br />
            membership renewals and payments
          </p>
        </motion.div>

        <motion.div
          className="text-center items-center flex flex-col w-full"
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          >
          <img
            src="https://cdn-icons-png.flaticon.com/128/3772/3772189.png"
            alt=""
            className="w-12 bg-green-100 p-2 rounded-full"
          />
          <p className="text-center text-xl font-semibold">Clubs And </p>
          <p className="text-center text-xl font-semibold">Groups</p>
          <p>
            Our membership management <br />
            software provides full automation of <br />
            membership renewals and payments
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Client;
