import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

function FinanceAbout() {
  // Split the text into words
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.".split(" ");
  
  // Controls for the animation
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden"); // Reset animation when section is out of view
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  // Fall animation for the text
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1, // Stagger the animation for each word
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      ref={sectionRef}
      className="who-we-are flex flex-col md:flex-row bg-[#121212] rounded-[4rem] items-start justify-between py-20 px-14"
    >
      <div className="w-full md:w-1/2">
        <h2 className="text-6xl font-semibold text-white mb-4" style={{ fontFamily: '"Kanit", sans-serif' }}>
          TFS Finance
        </h2>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-2/3">
        <div className="flex flex-col space-y-4">
          <motion.p
            className="text-9xl text-white font-medium"
            style={{ fontFamily: '"Instrument Sans", sans-serif' }}
            initial="hidden"
            animate={controls}
            variants={textVariants}
            key={Math.random()} // Add a random key to re-animate on every intersection
          >
            {text.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className="inline-block"
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default FinanceAbout;