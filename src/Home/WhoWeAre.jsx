import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

function WhoWeAre() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate the text when the component comes into view
          document.querySelectorAll('.animate-text').forEach((element) => {
            element.style.opacity = 0;
            element.style.transform = 'translateY(100px)';
            setTimeout(() => {
              element.style.transition = 'all 0.8s ease-out';
              element.style.opacity = 1;
              element.style.transform = 'translateY(0)';
            }, 100);
          });
        } else {
          // Reset the animation when the component goes out of view
          document.querySelectorAll('.animate-text').forEach((element) => {
            element.style.transition = 'none';
            element.style.opacity = 0;
            element.style.transform = 'translateY(100px)';
          });
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
  }, []);

  return (
    <div ref={sectionRef} className="who-we-are flex flex-col md:flex-row items-start justify-between py-0 px-8 pb-36">
      {/* Left Side */}
      <div className="w-full md:w-1/2">
        <h2 className="text-6xl font-semibold text-black mb-4" style={{ fontFamily: '"Kanit", sans-serif' }}>
          Who We Are
        </h2>
      </div>
      
      {/* Right Side */}
      <div className="w-full md:w-2/3">
        <div className="flex flex-col space-y-4">
          <p
            className="text-4xl leading-relaxed text-black font-semibold animate-text"
            style={{ fontFamily: '"Instrument Sans", sans-serif' }}
          >
            Three Fourth Solutions is where creativity meets strategy and innovation takes centre stage. As a unique and dynamic marketing agency, we are driven by a passion for turning ideas into unforgettable experiences. We’re visionaries with a plan, rebels with a cause, and magicians who transform concepts into reality.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;