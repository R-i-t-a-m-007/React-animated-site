import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
    <div ref={ref} className="centered-text-section relative bg-[#121212] rounded-[4rem] py-16 h-screen flex flex-col justify-center items-center">
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
    </div>
  );
}

export default CenteredTextSection;
