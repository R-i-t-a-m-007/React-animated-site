import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MediaRelationsSection() {
  const images = [
    "/assets/MediaRelations/HVL1.jpg",
    "/assets/MediaRelations/IMG1.jpeg",
    "/assets/MediaRelations/IMG2.jpeg",
    "/assets/MediaRelations/IMG3.jpeg",
    "/assets/MediaRelations/IMG4.jpeg",
    "/assets/MediaRelations/KAee.jpg",
    "/assets/MediaRelations/Kaee2.jpg",
    "/assets/MediaRelations/Oltera.jpg",
    "/assets/MediaRelations/Oltera1.jpg",
  ];

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

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

  // Fall animation for the images
  const fallVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  // Animation settings for heading
  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section ref={sectionRef} className="relative bg-[#121212] py-16 rounded-[4rem]">
      <div className="relative w-full top-[5rem] left-10">
        <motion.h2
          className="text-white text-[75px] font-bold mb-0 mx-auto"
          style={{ lineHeight: '5rem', fontFamily: '"Rowdies", sans-serif' }}
          initial="hidden"
          animate={controls}
          variants={headingVariants}
        >
          Media Relations
        </motion.h2>
      </div>
      <div className="px-8 mt-[8rem]">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="relative p-4 group">
              <motion.div
                className="bg-[#ffffff1a] rounded-lg overflow-hidden"
                variants={fallVariants}
                initial="hidden"
                animate={controls}
              >
                <img
                  src={src}
                  alt={`Media ${index + 1}`}
                  className="w-full h-[400px] object-fill grayscale transition duration-500 ease-in-out group-hover:grayscale-0"
                />
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default MediaRelationsSection;
