import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BiDownArrowCircle } from "react-icons/bi";

function Banner() {
  const [isPlaying, setIsPlaying] = useState(true); // Set isPlaying to true initially
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current && isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play(); // Play the video when the page loads
    }
  }, []);

  return (
    <div className="relative flex items-center justify-between px-8 h-screen">
      {/* Banner Text */}
      <div className="w-3/5 flex items-center justify-center">
        <h1
          className="font-bold text-black leading-tight"
          style={{ fontSize: '7rem', fontFamily: '"Rowdies", sans-serif', marginTop: '-20rem' }}
        >
          10 Years <br /> Of Rocking The Marketing World
        </h1>
      </div>

      {/* Let's Begin Section */}
      <div className="flex flex-row items-center justify-center mt-[30rem] ml-[45rem] absolute">
        <h2 className="text-6xl font-extrabold text-black text-center mb-4 mr-6"
        style={{fontFamily:'"Rowdies", sans-serif'}}>
          Let's Begin
        </h2>
        <motion.div
          animate={{ y: [0, 10, 0] }} // Bounce up and down
          transition={{ duration: 1, ease: "easeInOut", repeat: Infinity }}
        >
          <BiDownArrowCircle size={58} color="#000" />
        </motion.div>
      </div>

      {/* Video with Play/Pause Button */}
      <div className="relative bottom-44 right-0 mr-8">
        <video
          id="banner-video"
          ref={videoRef}
          src="/src/assets/HomeBanner2.mp4"
          width="700"
          height="800"
          className="rounded-3xl"
          loop
          muted
          poster="/src/assets/HomeBanner2.jpg" // Thumbnail image
          autoplay={true} // Add autoplay attribute
          preload="auto" // Add preload attribute
          onClick={handleVideoClick}
        />
        {!isPlaying && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-transparent cursor-pointer"
            onClick={handlePlayPause}
          >
            <div className="relative flex items-center justify-center w-24 h-24 bg-transparent rounded-full">
              <svg
                className="w-12 h-12 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6.629 4.866a.75.75 0 0 1 1.125-.653l7.2 4.534a.75.75 0 0 1 0 1.306l-7.2 4.534A.75.75 0 0 1 6 13.534V5.466a.75.75 0 0 1 .629-.6Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Banner;
