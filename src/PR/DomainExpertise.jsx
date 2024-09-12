import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IoSparklesOutline, IoPartlySunnyOutline } from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa";
import { TbBrandAirtable } from "react-icons/tb";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FaChartLine } from "react-icons/fa6";

function DomainExpertise() {
  const data = [
    {
      text: "Influencer Marketing",
      icon: <IoSparklesOutline size={50} color="#f8c33c" />
    },
    {
      text: "Media Relations",
      icon: <FaRegNewspaper size={50} color="#f8c33c" />
    },
    {
      text: "Talent Management",
      icon: <MdOutlineManageAccounts size={50} color="#f8c33c" />
    },
    {
      text: "Brand Associations",
      icon: <TbBrandAirtable size={50} color="#f8c33c" />
    },
    {
      text: "Reputation Management",
      icon: <FaChartLine size={50} color="#f8c33c" />
    },
    {
      text: "Crisis Management",
      icon: <IoPartlySunnyOutline size={50} color="#f8c33c" />
    }
  ];

  // Animation controls for heading and items
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,  // Animation triggers every time the component is in view
    threshold: 0.4,  // Adjust this value to control when the animation should trigger
  });

  // Trigger animation when in view
  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });  // Reset the animation when out of view
    }
  }, [controls, inView]);

  return (
    <section ref={ref} className="relative bg-[#121212] pt-14 pb-10 rounded-[4rem]">
      <div className="absolute top-0 left-0 p-8">
        <motion.h2
          className="text-white text-[75px] font-bold mb-8 mt-[8rem] w-[100%]"
          style={{ lineHeight: '5rem', fontFamily: '"Rowdies", sans-serif' }}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 2.5, ease: 'easeOut' }}
        >
          Domain Expertise
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-[20rem] px-8" style={{ fontFamily: '"Instrument Sans", sans-serif'}}>
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="relative bg-[#1c1c1c] p-8 w-full h-[400px] rounded-[1rem] flex flex-col items-center justify-center border-l-2 border-r-2 border-[#ffffff1a] group"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.2 }} // Staggering the animation
          >
            {/* Icon */}
            <div className="mb-4">
              {item.icon}
            </div>
            {/* Text */}
            <p className="text-white text-4xl font-semibold text-center px-8 py-4 group-hover:text-[#f8c33c] transition-colors duration-300">
              {item.text}
            </p>
            {/* Lorem Ipsum Text */}
            <p className="text-white text-[26px] text-center mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default DomainExpertise;
