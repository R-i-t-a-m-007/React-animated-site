import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

function LogoSection({ bgColor }) {
  const logos = [
    { src: "/assets/Logos/PR.png", alt: "Logo 1", number: "01", width: '250px', height: '250px', route: 'pr' },
    { src: "/assets/Logos/Studios.png", alt: "Logo 2", number: "02", width: '300px', height: '200px', route: 'studio' },
    { src: "/assets/Logos/Talent.png", alt: "Logo 3", number: "03", width: '350px', height: '300px', route: 'contact' },
    { src: "/assets/Logos/Finance.png", alt: "Logo 4", number: "04", width: '400px', height: '200px', route: 'finance' }
  ];

  // Animation controls for the heading
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,  // Animation triggers every time the component is in view
    threshold: 0.1,  // Adjust this value to control when the animation should trigger
  });

  const navigate = useNavigate(); // Initialize useNavigate

  // Trigger animation when in view
  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });  // Reset the animation when out of view
    }
  }, [controls, inView]);

  // Function to handle navigation and scroll to top
  const handleNavigation = (route) => {
    navigate(`/${route}`); // Use an absolute URL
    window.location.reload();
  };

  return (
    <section ref={ref} className="relative bg-[#121212] py-16 rounded-[4rem]"
    style={{ backgroundColor: bgColor }}>
      <div className="absolute top-0 left-0 p-8">
        <motion.h2
          className="text-white text-[75px] font-bold mb-8 mt-[8rem] w-[100%]"
          style={{ lineHeight: '5rem', fontFamily: '"Rowdies", sans-serif' }}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          The TFS Network
        </motion.h2>
        <motion.h3
          className="text-white text-[40px] font-normal"
          style={{ fontFamily: '"Rowdies", sans-serif' }}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}  // Slight delay for the subheading
        >
          Click a logo to dive into the diverse corners of our specialties!
        </motion.h3>
      </div>
      <div className="flex justify-center items-center mt-[20rem]">
        <div className="flex space-x-4">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="relative bg-[#1c1c1c] p-8 w-[450px] h-[450px] rounded-[1rem] flex items-center justify-center group cursor-pointer"
              onClick={() => handleNavigation(logo.route)} // Use the new handleNavigation function
            >
              {/* Number that changes color on hover */}
              <span className="absolute top-14 left-14 text-white text-3xl font-bold group-hover:text-[#f8c33c] transition-colors duration-300 ease-in-out">
                {logo.number}
              </span>
              <img
                src={logo.src}
                alt={logo.alt}
                style={{ width: logo.width, height: logo.height }}
                className="object-contain filter brightness-0 invert group-hover:filter-none group-hover:brightness-[1.3] group-hover:sepia group-hover:saturate-[7] group-hover:hue-rotate-[355deg] transition-all duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoSection;
