import React from 'react';
import Navbar from './Home/Navbar';
import PrAbout from './PR/PrAbout';
import DomainExpertise from './PR/DomainExpertise';
import InfluencerOutreachSection from './PR/InfluencerOutreach';
import MediaRelationsSection from './PR/MediaRelations';
import ContactUs from './Contact';
import Footer from './Footer';

function PRPage() {
  return (
    <>
      <Navbar />
      <PrAbout />
      <DomainExpertise />
      <InfluencerOutreachSection />
      <MediaRelationsSection />
      <ContactUs />
      <Footer />
    </>
  );
}

export default PRPage;