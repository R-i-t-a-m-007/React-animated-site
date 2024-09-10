import { useRef, useEffect } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { useInView } from 'react-intersection-observer';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import 'locomotive-scroll/dist/locomotive-scroll.css'; // Ensure this is imported if needed

function ClientNum() {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation should trigger every time the section is in view
    threshold: 0.1 // Adjust this value to trigger earlier or later
  });

  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (inView) {
      animate(count, 150, {
        duration: 2,
        ease: 'easeInOut'
      });
    } else {
      // Optionally, reset the count when the section goes out of view
      count.set(0);
    }
  }, [inView, count]);

  return (
    <div ref={ref} className="client-num relative bg-gray-800 text-white rounded-t-[4rem] py-16 mt-[4rem] h-fit" data-scroll-section>
      <div className="absolute top-0 left-0 p-8">
        <h2 className="text-white text-4xl font-bold mb-8" style={{fontFamily: '"Rowdies", sans-serif'}}>Client Numbers</h2>
        <p className="text-xl">Some important text here...</p>
      </div>
      <div className="absolute bottom-0 left-0 p-8">
        <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 p-8">
        <motion.span className="text-9xl font-bold">
          {rounded}
        </motion.span>
      </div>
    </div>
  );
}

export default ClientNum;
