import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://img.freepik.com/free-vector/content-creator-concept-illustration_114360-3456.jpg?ga=GA1.1.234223011.1740401317&semt=ais_hybrid",
  "https://img.freepik.com/free-vector/smart-factory-working-person-using-wireless-technology-control_1150-43092.jpg?t=st=1743414573~exp=1743418173~hmac=7763b8102cc304ebc351c89a3ff60cf1828ffc43ed824428455043439adb6f50&w=1060",
  "https://img.freepik.com/premium-vector/vector-illustration-online-cinema-cinematography-with-small-people-recording-big-man-video_675567-2325.jpg?w=996",
  "https://img.freepik.com/premium-vector/man-stands-waistdeep-with-color-palette-design-element-presentation-vector-illustration_174639-73933.jpg?w=996",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full  h-auto   overflow-hidden">
      {/* Image Slider */}
      <motion.div
        className="flex"
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full flex-shrink-0 px-20 py-6">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-[36rem] object-cover rounded-lg"
            />
          </div>
        ))}
      </motion.div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-8 top-1/2 transform -translate-y-1/2   text-gray-700 cursor-pointer p-3 rounded-full "
      >
        <ChevronLeft size={30} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-8 top-1/2 transform -translate-y-1/2  text-gray-700  cursor-pointer p-3 rounded-full "
      >
        <ChevronRight size={30} />
      </button>

      {/* Dot Navigation */}
      <div className="absolute bottom-9 w-full flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
