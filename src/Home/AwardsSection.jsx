import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AwardsSection() {
  const images = [
    { src: "/src/assets/awards/1.png", alt: "Agency of the Year East - 2024" },
    { src: "/src/assets/awards/2.png", alt: "World Marketing Congress' WB Best Brand Award - 2021" },
    { src: "/src/assets/awards/3.png", alt: "Best Social Media Video Campaign for Olterra Brewery" },
    { src: "/src/assets/awards/4.png", alt: "Women Entreprenuer Award 2023" },
    { src: "/src/assets/awards/5.png", alt: "Best Use of Social Media for Olterra Brewery Launch" },
    { src: "/src/assets/awards/6.png", alt: "Agency of the Year East" },
    { src: "/src/assets/awards/7.png", alt: "Agency of the Year East" },
    { src: "/src/assets/awards/8.png", alt: "Agency Of The Year East - 2029" },
    { src: "/src/assets/awards/9.png", alt: "Afaqs Foxglove Best Use of Influencer for Packaged Goods - Bronze for Jacob's Creek" },
    { src: "/src/assets/awards/10.png", alt: "Best Regional Data-driven Marketing Excellence for Ballentine" },
    { src: "/src/assets/awards/11.png", alt: "Social Samosa's Superwomen 2023" }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
    hidden: { y: -400, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      ref={sectionRef}
      className="image-row-section relative bg-[#252525] rounded-[4rem] py-16 h-fit"
    >
      <div className="top-0 left-0 p-8">
        <h2 className="text-white text-8xl font-bold mb-8 mt-[8rem]" style={{fontFamily:'"Rowdies", sans-serif'}}>The Hall of Fame!</h2>
      </div>
      <div className="mt-16 px-8">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="relative p-4 border-l-2 border-[#ffffff1a]">
              <div className="relative p-4 flex flex-col items-center ">
                {/* Rounded Border Container with left and right white border */}
                <motion.div
                  className="relative bg-[#ffffff1a] rounded-full p-8 flex flex-col items-center"
                  variants={fallVariants}
                  initial="hidden"
                  animate={controls}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover rounded-t-lg"
                  />
                </motion.div>
                <p className="text-white text-center mt-4">{image.alt}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default AwardsSection;
