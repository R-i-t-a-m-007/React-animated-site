import { useEffect, useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import gsap from 'gsap';
import Navbar from './Home/Navbar';
import Banner from './Home/Banner';
import WhoWeAre from './Home/WhoWeAre';
import SelectedWork from './Home/SelectedWork';
import MoreWork from './Home/ClientNumber';
import MouseTrail from './MouseTrail'; // Import the MouseTrail component
import LogoSection from './Home/LogoSection'; // Import the new LogoSection component

import './App.css';
import ContentSection from './Home/MeetTheTeam';
import ImageRowSection from './Home/AwardsSection';
import CenteredTextSection from './CenteredTextSection';
import NewSection from './Footer';
import PrAbout from './PR/PrAbout';
import CircularTextSection from './PR/DomainExpertise';
import InfluencerOutreachSection from './PR/InfluencerOutreach';
import MediaRelationsSection from './PR/MediaRelations';
import StudioAbout from './Studio/StudioAbout';
import StudioDomain from './Studio/StudioDomain';
import Portfolio from './Studio/Portfolio';
import StudiosClient from './Studio/StudioClients';
import FinanceAbout from './Finance/FinanceAbout';
import FinanceDomain from './Finance/FinanceDomain';
import FinanceClients from './Finance/FinanceClients';
import ContactUs from './Contact';

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

  // Curtain effect with GSAP
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section) => {
      const curtainEffect = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top bottom", // when the top of the section reaches the bottom of the viewport
          end: "top top", // when the top of the section reaches the top of the viewport
          scrub: true,
        }
      });

      curtainEffect
        .fromTo(section, { y: '100%' }, { y: '0%', ease: 'power2.out' }) // Slide in from below
        .fromTo(section, { opacity: 0 }, { opacity: 1, duration: 1 }, 0); // Fade in
    });
  }, []);

  return (
    <>
      <LocomotiveScrollProvider options={options} containerRef={containerRef}>
        <main data-scroll-container ref={containerRef} className="bg-[#252525]">
          <MouseTrail /> {/* Add the MouseTrail component here */}
          <section data-scroll-section className="relative">
            <Navbar />
          </section>
          <section data-scroll-section className="relative">
            <Banner />
          </section>
          <section data-scroll-section className="relative">
            <WhoWeAre />
          </section>
          <section data-scroll-section className="relative">
            <SelectedWork />
          </section>
          <section data-scroll-section className="relative">
            <MoreWork />
          </section>
          <section data-scroll-section className="relative">
            <ContentSection /> {/* Add the LogoSection component here */}
          </section>
          <section data-scroll-section className="relative">
            <ImageRowSection /> {/* Add the LogoSection component here */}
          </section>
          <section data-scroll-section className="relative">
            <LogoSection /> {/* Add the LogoSection component here */}
          </section>
          <section data-scroll-section className="relative">
            <PrAbout /> {/* Add the LogoSection component here */}
          </section>
          <section data-scroll-section className="relative">
            <CircularTextSection /> {/* Add the LogoSection component here */}
          </section>
          <section data-scroll-section className="relative">
            <InfluencerOutreachSection /> {/* Add the LogoSection component here */}
          </section>
          <section data-scroll-section className="relative">
            <MediaRelationsSection /> {/* Add the LogoSection component here */}
          </section>
          <section data-scroll-section className="relative">
            <StudioAbout /> {/* Add the LogoSection component here */}
          </section>
          <section data-scroll-section className="relative">
            <StudioDomain /> {/* Add the LogoSection component here */}
          </section>
          <section data-scroll-section className="relative">
            <Portfolio /> {/* Add the LogoSection component here */}
          </section>
          <section data-scroll-section className="relative">
            <StudiosClient /> {/* Add the LogoSection component here */}
          </section>
          <section data-scroll-section className="relative">
            <FinanceAbout /> {/* Add the LogoSection component here */}
          </section>
          <section data-scroll-section className="relative">
            <FinanceDomain /> {/* Add the LogoSection component here */}
          </section>
          <section data-scroll-section className="relative">
            <FinanceClients /> {/* Add the LogoSection component here */}
          </section>
          <section data-scroll-section className="relative">
            <ContactUs /> {/* Add the LogoSection component here */}
          </section>
          <section data-scroll-section className="relative">
            <CenteredTextSection /> {/* Add the LogoSection component here */}
          </section>
          <section data-scroll-section className="relative">
            <NewSection /> {/* Add the LogoSection component here */}
          </section>
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}

export default App;
