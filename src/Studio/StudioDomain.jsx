import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IoFastFoodOutline } from "react-icons/io5";
import { SiMaterialdesignicons } from "react-icons/si";
import { AiOutlineProduct } from "react-icons/ai";
import { MdNightlife } from "react-icons/md";
import { MdCorporateFare } from "react-icons/md";

function StudioDomain() {
  const data = [
    {
      text: "Food & Beverages",
      icon: <IoFastFoodOutline size={50} color="#f8c33c" />,
      bgImage: "/assets/Domain/food.JPG",
    },
    {
      text: "Product",
      icon: <AiOutlineProduct size={50} color="#f8c33c" />,
      bgImage: "/assets/Domain/product.JPG",
    },
    {
      text: "Fashion & Lifestyle",
      icon: <MdNightlife size={50} color="#f8c33c" />,
      bgImage: "/assets/Domain/fashion.JPG",
    },
    {
      text: "Corporate",
      icon: <MdCorporateFare size={50} color="#f8c33c" />,
      bgImage: "/assets/Domain/corporate.JPG",
    },
    {
      text: "Interiors",
      icon: <SiMaterialdesignicons size={50} color="#f8c33c" />,
      bgImage: "/assets/Domain/interior.JPG",
    }
  ];

  // Animation controls for heading and items
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  // Trigger animation when in view
  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <section ref={ref} className="relative bg-[#121212] py-20 rounded-[4rem]">
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
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-[14rem] px-8" style={{ fontFamily: '"Instrument Sans", sans-serif'}}>
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="relative bg-[#1c1c1c] p-8 w-full h-[400px] rounded-[1rem] flex flex-col items-center justify-center border-l-2 border-r-2 border-[#ffffff1a] group overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.2 }}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ backgroundImage: `url(${item.bgImage})` }}
            />
            {/* Icon */}
            <div className="mb-4 relative z-10 transition-opacity duration-500 opacity-100 group-hover:opacity-0">
              {item.icon}
            </div>
            {/* Text */}
            <p className="text-white text-4xl font-semibold text-center px-8 py-4 transition-opacity duration-500 opacity-100 group-hover:opacity-0 relative z-10">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default StudioDomain;
