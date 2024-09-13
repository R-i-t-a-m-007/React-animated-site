import React from 'react';
import Navbar from '../Home/Navbar';
import StudioAbout from './StudioAbout';
import Portfolio from './Portfolio';
import StudioDomain from './StudioDomain';
import StudiosClient from './StudioClients';
import CenteredTextSection from '../CenteredTextSection';
import Footer from '../Footer';
import LogoSection from '../Home/LogoSection';

function StudioPage() {
  return (
    <>
      <Navbar />
      <StudioAbout />
      <Portfolio />
      <StudioDomain bgColor="#252525" />
      <StudiosClient />
      <LogoSection bgColor="#252525" />
      <CenteredTextSection />
      <Footer />
    </>
  );
}

export default StudioPage;
