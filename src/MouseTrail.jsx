import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Circle = ({ size, delay, addCircleRef }) => {
  const el = useRef();

  useEffect(() => {
    if (el.current) {
      addCircleRef(el.current, delay);
    }
  }, [el, delay, addCircleRef]);

  return <div className={`circle ${size} gradient-blue`} ref={el}></div>;
};

const MouseTrailEffect = () => {
  const circleRefs = useRef([]);

  useEffect(() => {
    const { innerWidth, innerHeight } = window;

    // Set initial position to the center of the viewport
    circleRefs.current.forEach(({ el, delay }) => {
      gsap.to(el, { x: innerWidth / 2, y: innerHeight / 2, delay });
    });

    const onMove = ({ clientX, clientY }) => {
      circleRefs.current.forEach(({ el, delay }) => {
        gsap.to(el, {
          x: clientX,
          y: clientY,
          delay,
          duration: 1 + delay, // Increase duration based on delay
          ease: 'power2.out', // Easing function for smoother motion
        });
      });
    };

    window.addEventListener('pointermove', onMove);

    return () => {
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  const addCircleRef = (el, delay) => {
    circleRefs.current.push({ el, delay });
  };

  return (
    <>
      <Circle size="sm" delay={0.03} addCircleRef={addCircleRef} />
      <Circle size="md" delay={0.02} addCircleRef={addCircleRef} /> {/* Increase delay to slow down the effect */}
    </>
  );
};

export default MouseTrailEffect;
