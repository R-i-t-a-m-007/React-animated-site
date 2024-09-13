import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import gsap from 'gsap';

// Import Page Components
import HomePage from './Home/HomePage';
import PRPage from './PR/PRPage';
import StudioPage from './Studio/StudioPage';
import ContactPage from './ContactPage';
import FinancePage from './Finance/FinancePage'; // Import FinancePage

// Import MouseTrail
import MouseTrail from './MouseTrail';

function App() {
  const containerRef = useRef(null);

  const options = {
    smooth: true,
    lerp: 0.1,
    scrollbar: {
      visible: false,
    },
    multiplier: 0.5,
    ease: 'linear',
    duration: 8000,
  };

  // Handle scroll position reset
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo(0, 0);
    }
  }, []); // Empty dependency array to run once on mount

  // Set up curtain effect animations
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section) => {
      const curtainEffect = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "top top",
          scrub: true,
        }
      });

      curtainEffect
        .fromTo(section, { y: '100%' }, { y: '0%', ease: 'power2.out' })
        .fromTo(section, { opacity: 0 }, { opacity: 1, duration: 1 }, 0);
    });
  }, []);

  return (
    <Router>
      <LocomotiveScrollProvider options={options} containerRef={containerRef}>
        <MouseTrail />
        <main data-scroll-container ref={containerRef} className="bg-[#252525]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pr" element={<PRPage />} />
            <Route path="/studio" element={<StudioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/finance" element={<FinancePage />} /> {/* Add route for FinancePage */}
          </Routes>
        </main>
      </LocomotiveScrollProvider>
    </Router>
  );
}

export default App;
