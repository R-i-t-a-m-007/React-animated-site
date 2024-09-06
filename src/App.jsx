import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import Navbar from './Navbar';
import Banner from './Banner';
import WhoWeAre from './WhoWeAre';
import SelectedWork from './SelectedWork';
import MoreWork from './MoreWork'; 
import MouseTrail from './MouseTrail'; // Import the MouseTrail component
import LogoSection from './LogoSection'; // Import the new LogoSection component

import './App.css';
import ContentSection from './ContentSection';
import ImageRowSection from './ImageRowSection';
import CenteredTextSection from './CenteredTextSection';
import NewSection from './NewSection';
import PrAbout from './PrAbout';
import CircularTextSection from './CircularTextSection';

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

  return (
    <>
      <LocomotiveScrollProvider options={options} containerRef={containerRef}>
        <main data-scroll-container ref={containerRef} className="bg-[#f8c33c]">
          <MouseTrail /> {/* Add the MouseTrail component here */}
          <section data-scroll-section>
            <Navbar />
          </section>
          <section data-scroll-section className="relative">
            <Banner />
          </section>
          <section data-scroll-section>
            <WhoWeAre />
          </section>
          <section data-scroll-section>
            <SelectedWork />
          </section>
          <section data-scroll-section>
            <MoreWork />
          </section>
          <section data-scroll-section>
            <ContentSection /> {/* Add the LogoSection component here */}
          </section>
          <section data-scroll-section>
            <ImageRowSection /> {/* Add the LogoSection component here */}
          </section>
          <section data-scroll-section>
            <LogoSection /> {/* Add the LogoSection component here */}
          </section>
          <section data-scroll-section>
            <PrAbout /> {/* Add the LogoSection component here */}
          </section>
          <section data-scroll-section>
            <CircularTextSection /> {/* Add the LogoSection component here */}
          </section>
          <section data-scroll-section>
            <CenteredTextSection /> {/* Add the LogoSection component here */}
          </section>
          <section data-scroll-section>
            <NewSection /> {/* Add the LogoSection component here */}
          </section>
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}

export default App;
