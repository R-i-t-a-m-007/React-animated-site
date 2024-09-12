import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GoArrowUpRight } from 'react-icons/go'; // Import the icon

function CenteredTextSection() {
  // Animation controls
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,  // Animation triggers every time the component is in view
    threshold: 0.5,  // Adjust this value to control when the animation should trigger
  });

  // Trigger animation when in view
  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });  // Reset the animation when out of view
    }
  }, [controls, inView]);

  // Animation variants
  const textReveal = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 3.2, ease: 'ease' } },
  };

  return (
    <div ref={ref} className="centered-text-section relative bg-[#121212] rounded-[4rem] py-12 h-screen flex flex-col justify-center items-center">
      <motion.h1
        className="text-white text-[30px] font-bold mb-2"
        style={{ fontFamily: '"Rowdies", sans-serif', lineHeight: '3' }}
        initial="hidden"
        animate={controls}
        variants={textReveal}
      >
        HAVE A PROJECT IN MIND?
      </motion.h1>
      <motion.h2
        className="text-white text-[150px] font-bold mb-2"
        style={{ fontFamily: '"Rowdies", sans-serif', lineHeight: '1' }}
        initial="hidden"
        animate={controls}
        variants={textReveal}
      >
        LET'S WORK
      </motion.h2>
      <motion.h3
        className="text-white text-[150px] font-bold"
        style={{ fontFamily: '"Rowdies", sans-serif', lineHeight: '1' }}
        initial="hidden"
        animate={controls}
        variants={textReveal}
      >
        TOGETHER
      </motion.h3>

      {/* Get in Touch Button with Icon */}
      <motion.div
        className="flex items-center mt-14 gap-0"
        initial="hidden"
        animate={controls}
        variants={textReveal}
      >
        {/* Get in Touch Button */}
        <button style={{ fontFamily: '"Instrument Sans", sans-serif'}} className="bg-white text-black px-10 py-8 text-lg font-semibold rounded-full">
          GET IN TOUCH
        </button>
        
        {/* Arrow Icon */}
        <div className="bg-white text-black font-semibold p-8 rounded-full flex justify-center items-center">
          <GoArrowUpRight size={28} />
        </div>
      </motion.div>
    </div>
  );
}

export default CenteredTextSection;
