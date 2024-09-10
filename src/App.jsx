import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
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
            <InfluencerOutreachSection /> {/* Add the LogoSection component here */}
          </section>
          <section data-scroll-section>
            <MediaRelationsSection /> {/* Add the LogoSection component here */}
          </section>
          <section data-scroll-section>
            <StudioAbout /> {/* Add the LogoSection component here */}
          </section>
          <section data-scroll-section>
            <StudioDomain /> {/* Add the LogoSection component here */}
          </section>
          <section data-scroll-section>
            <Portfolio /> {/* Add the LogoSection component here */}
          </section>
          <section data-scroll-section>
            <StudiosClient /> {/* Add the LogoSection component here */}
          </section>
          <section data-scroll-section>
            <FinanceAbout /> {/* Add the LogoSection component here */}
          </section>
          <section data-scroll-section>
            <FinanceDomain /> {/* Add the LogoSection component here */}
          </section>
          <section data-scroll-section>
            <FinanceClients /> {/* Add the LogoSection component here */}
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
