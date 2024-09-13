import React from 'react';
import Navbar from '../Home/Navbar';
import PrAbout from './PrAbout';
import CircularTextSection from './DomainExpertise';
import InfluencerOutreachSection from './InfluencerOutreach';
import MediaRelationsSection from './MediaRelations';
import LogoSection from '../Home/LogoSection';
import ContactUs from '../Contact';
import Footer from '../Footer';
import CenteredTextSection from '../CenteredTextSection';

function PRPage() {
  return (
    <>
      <Navbar />
      <PrAbout />
      <CircularTextSection />
      <InfluencerOutreachSection />
      <MediaRelationsSection />
      <LogoSection bgColor="#252525" />
      <CenteredTextSection bgColor="#121212"/>
      {/* <ContactUs bgColor="#252525" /> */}
      <Footer bgColor="#252525" />
    </>
  );
}

export default PRPage;
