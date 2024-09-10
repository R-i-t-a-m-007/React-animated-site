import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function InfluencerOutreachSection() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,  // Animation triggers every time the component is in view
    threshold: 0.4,
  });

  // Video array
  const videos = [
    { src: "/src/assets/TfsVid/vid1.mp4", alt: "Video 1" },
    { src: "/src/assets/TfsVid/vid2.mp4", alt: "Video 2" },
    { src: "/src/assets/TfsVid/vid3.mp4", alt: "Video 3" },
    { src: "/src/assets/TfsVid/vid4.mp4", alt: "Video 4" },
  ];

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <section ref={ref} className="relative bg-[#252525] py-24 rounded-[4rem]">
      <div className="absolute top-0 left-0 p-8">
        <motion.h2
          className="text-white text-[75px] font-bold mb-8 mt-[8rem] w-[100%]"
          style={{ lineHeight: '5rem', fontFamily: '"Rowdies", sans-serif' }}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 2.5, ease: 'easeOut' }}
        >
          Influencer Outreach & Collaborations
        </motion.h2>
      </div>
      <div className="flex justify-center gap-20 mt-[20rem] px-8 flex-wrap">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            className="relative w-full max-w-[300px] bg-[#1c1c1c] rounded-[1rem] overflow-hidden group"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.2 }}
          >
            <video
              src={video.src}
              alt={video.alt}
              autoPlay
              muted
              loop
              className="w-full h-full object-cover filter grayscale transition-all duration-300 ease-in-out group-hover:filter-none"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default InfluencerOutreachSection;
