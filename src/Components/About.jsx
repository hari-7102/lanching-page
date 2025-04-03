import React from "react";
import frame from "../assets/frame.png";

import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div className="my-5 px-5 sm:px-10 md:px-20 lg:px-36 py-8"
    

    >
      <div className="flex flex-col-reverse lg:flex-row items-center">
        {/* Image Section */}
        <motion.div className="w-full lg:w-1/3 flex justify-center mb-6 lg:mb-0"
        initial={{opacity:0 , x:-25}}
        whileInView={{opacity:1 , x:0}}
        transition={{duration:1}}
        viewport={{ once: true, amount: 0.2 }}

        >
          <img
            src={frame}
            alt="Illustration"
            className="w-72 sm:w-80 md:w-96"
          />
        </motion.div>
        
        {/* Text Content */}
        <motion.div className="w-full lg:w-2/3 md:px-3 sm:px-1 text-gray-600 text-center lg:text-left" 
                initial={{opacity:0 , x:25}}
                whileInView={{opacity:1 , x:0}}
                transition={{duration:1}}
                viewport={{ once: true, amount: 0.2 }}  >
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            The unseen of spending three
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            years at Pixelgrade
          </p>
          <p className="text-sm sm:text-base py-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button className="bg-green-600 rounded-md px-6 py-2 text-white mt-3">
            Learn More
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
