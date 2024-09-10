import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";



const images = [
  "/src/assets/StudioClient/CateImg1.png", // Dog
  "/src/assets/StudioClient/CateImg22.jpeg", // Cat
  "/src/assets/StudioClient/CateImg33.jpeg", // Elephant
  "/src/assets/StudioClient/CateImg4.png", // Lion
  "/src/assets/StudioClient/CateImg55.jpeg", // Giraffe
  "/src/assets/StudioClient/CateImg1.png", // Panda
  "/src/assets/StudioClient/CateImg22.jpeg", // Koala
  "/src/assets/StudioClient/CateImg33.jpeg", // Tiger
  "/src/assets/StudioClient/CateImg4.png", // Bear
  "/src/assets/StudioClient/CateImg55.jpeg"  // Zebra
];

function StudiosClient() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  const nextSlide = () => {
    setDirection(1); // Forward direction
    setCurrentSlide((prev) => (prev === images.length - 2 ? 0 : prev + 2));
  };

  const prevSlide = () => {
    setDirection(-1); // Backward direction
    setCurrentSlide((prev) => (prev === 0 ? images.length - 2 : prev - 2));
  };

  const variants = {
    enter: (direction) => {
      return {
        x: direction === 1 ? 100 : -100,
        opacity: 0
      };
    },
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        x: direction === 1 ? -100 : 100,
        opacity: 0
      };
    }
  };

  return (
    <div className="trusted-by-section bg-[#121212] rounded-[4rem] p-16">
      <h2 className="text-white text-8xl font-bold mb-16 text-center" style={{ fontFamily: '"Rowdies", sans-serif' }}>
        Trusted By
      </h2>
      <div className="flex gap-8">
        {/* Left Box - 30% width */}
        <div className="flex flex-col justify-center items-center w-[30%] bg-[#1c1c1c] rounded-[4rem] p-8 text-center">
          <p className="text-white text-4xl w-96 font-semibold relative top-8 mb-0">Helping world-class company by creative design.</p>
          <div className="flex relative top-20 justify-center w-full">
            <button
              className="text-white text-3xl font-bold border-2 border-[#ffffff1a] px-6 py-6 rounded-full transition-colors duration-300"
              onClick={prevSlide}
            >
              <FaArrowLeftLong />
            </button>
            <button
              className="text-white text-3xl font-bold border-2 border-[#ffffff1a] px-6 py-6 rounded-full transition-colors duration-300"
              onClick={nextSlide}
            >
              <FaArrowRightLong />
            </button>
          </div>
        </div>
        {/* Right Box - 70% width */}
        <div className="w-[70%] bg-[#1c1c1c] rounded-[4rem] p-8 flex justify-center items-center overflow-hidden relative">
          <AnimatePresence custom={direction} initial={false} mode="wait">
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.8 }
              }}
              className="flex w-full h-full gap-8"
            >
              {/* Display two images at a time */}
              {images.slice(currentSlide, currentSlide + 2).map((src, index) => (
                <div key={index} className="w-[50%] flex justify-center items-center">
                  <img src={src} alt={`Slide ${currentSlide + index + 1}`} className="w-[600px] h-[400px] rounded-3xl object-contain" />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default StudiosClient;
