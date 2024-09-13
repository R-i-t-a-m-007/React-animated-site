import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import WhoWeAre from './WhoWeAre';
import SelectedWork from './SelectedWork';
import MoreWork from './ClientNumber';
import ContentSection from './MeetTheTeam';
import ImageRowSection from './AwardsSection';
import LogoSection from './LogoSection';
import Footer from '../Footer';
import CenteredTextSection from '../CenteredTextSection';
import Loader from '../Loader';

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  // Hide the loader after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Stop showing the loader after 4 seconds
    }, 4000); // Adjust the time as needed

    return () => clearTimeout(timer); // Cleanup the timeout
  }, []);

  return (
    <>
      {/* Render Loader if still loading, otherwise render the full page */}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Banner />
          <WhoWeAre />
          <SelectedWork />
          <MoreWork />
          <ContentSection />
          <ImageRowSection />
          <LogoSection />
          <CenteredTextSection />
          <Footer />
        </>
      )}
    </>
  );
}

export default HomePage;
