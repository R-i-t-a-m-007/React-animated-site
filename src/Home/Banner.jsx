import { useState, useRef, useEffect } from 'react';
import { BiDownArrowCircle } from "react-icons/bi";
import { FaPlay, FaTimes } from "react-icons/fa";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../App.css';
import image1 from '/public/assets/bannerImgnew1.jpeg'; // Replace with your image path
import image2 from '/public/assets/bannerImgnew2.jpeg'; // Replace with your image path
import image3 from '/public/assets/bannerImgleft.jpeg'; // Replace with your image path

function Banner() {
  const [isPlaying, setIsPlaying] = useState(false); // Set isPlaying to false initially
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    setIsPlaying(true); // Show the video
  };

  const handleCloseVideo = () => {
    setIsPlaying(false); // Hide the video
  };

  const handleScrollDown = () => {
    console.log("scrolling");

    // Scroll by the full window height
    window.scrollBy({
      top: window.innerHeight, // Scroll down by the height of the viewport
      behavior: 'smooth',
    });
  };

  // Animation controls for the masking effect on image 3
  const maskControls = useAnimation();
  const { ref: image3Ref, inView: image3InView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust this value based on when you want the animation to start
  });

  useEffect(() => {
    if (image3InView) {
      maskControls.start({ y: '100%' }); // Move the mask down to reveal the image
    } else {
      maskControls.start({ y: '0%' }); // Mask covers the image initially
    }
  }, [image3InView, maskControls]);

  return (
    <div className="relative flex items-center justify-between px-8 h-screen overflow-hidden">
      {/* Banner Text and Images */}
      <div className="w-full flex items-center justify-between -mt-12">
        {/* Image 3 with top-to-bottom mask reveal animation */}
        <div ref={image3Ref} className="relative w-[30rem] h-[30rem]">
          <div className="relative bottom-28 w-full h-full overflow-hidden">
            {/* Image */}
            <img
              src={image3}
              alt="Image 3"
              className="w-full h-full object-cover rounded-t-full"
            />
            {/* Mask Layer */}
            <motion.div
              className="absolute inset-0 bg-[#252525] z-10" // Mask with dark background
              initial={{ y: '0%' }} // Start with the mask covering the image from the top
              animate={maskControls} // Use animation controls to move the mask
              transition={{ duration: 2.5, ease: 'easeInOut' }} // Adjust duration as needed
            />
          </div>
        </div>
        
        <h1
          className="font-bold w-[40%] text-white leading-tight text-left relative bottom-24 left-16"
          style={{ fontSize: '6rem', fontFamily: '"Rowdies", sans-serif' }}
        >
          <span className='text-[14rem]'>10</span><span className='relative'>Years</span><br /><span className='relative bottom-7'>of Marketing</span><br /><span className='relative bottom-7'>Excellence</span>
        </h1>

        {/* Images and Play Button */}
        <div className="relative flex flex-col top-28 items-center gap-4">
          <div className="flex relative bottom-44 right-20 items-center">
            <img src='/public/assets/banner-shape.png' alt='banner-shape' className='relative top-24 right-10 w-28 text-black' />
          </div>
          <div className="flex relative right-8 bottom-36 gap-2">
          <motion.div 
              animate={{ y: [0, 50] }} // Reverse the animation direction
              transition={{ duration: 3, ease: "easeInOut" }} // Adjust the duration and easing as needed
          >
                            <img
                                src={image1}
                                alt="Image 1"
                                className="w-[204px] h-[400px] object-contain rounded-l-full"
                            />
                            <div className="absolute inset-0 opacity-60 rounded-l-full"></div>
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, -50] }} // Reverse the animation direction
                            transition={{ duration: 3, ease: "easeInOut" }} // Adjust the duration and easing as needed
                        >
                            <img
                                src={image2}
                                alt="Image 2"
                                className="w-[190px] h-[400px] object-contain rounded-r-full"
                            />
                        </motion.div>

          </div>
          
          <div className="flex relative bottom-40 right-20 items-center justify-center border-4 bg-white p-8 rounded-full cursor-pointer" onClick={handlePlayPause}>
            <FaPlay size={18} color="#000" />
          </div>
          <div className="flex leading-7 relative bottom-60 text-2xl text-white left-8 items-center justify-center">
            <p style={{fontFamily: '"Rowdies", sans-serif'}}>Watch<br /> Video</p>
          </div>
        </div>
      </div>

      {/* Video Container */}
      {isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 z-10">
          <div className="relative w-[80%] h-[80%]">
            <video 
              ref={videoRef}
              className="w-full h-full relative bottom-20 object-cover"
              autoPlay
              src="/public/assets/HomeBanner2.mp4" // Replace with your video path
            />
            <button 
              className="absolute top-[-4.5rem] right-2 bg-white rounded-full p-2 border-none"
              onClick={handleCloseVideo}
            >
              <FaTimes size={24} color="#000" />
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-row items-center justify-center mt-[30rem] ml-[45rem] absolute">
        <h2 className="text-6xl font-extrabold text-white text-center mb-4 mr-6"
          style={{ fontFamily: '"Rowdies", sans-serif' }}>
          Let's Begin
        </h2>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1, ease: "easeInOut", repeat: Infinity }}
          onClick={handleScrollDown} // Attach the scroll function to the onClick event
        >
          <BiDownArrowCircle size={58} color="#fff" />
        </motion.div>
      </div>
    </div>
  );
}

export default Banner;
