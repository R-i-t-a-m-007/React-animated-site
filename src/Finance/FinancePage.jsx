import React from 'react';
import Navbar from '../Home/Navbar';
import FinanceAbout from './FinanceAbout';
import FinanceDomain from './FinanceDomain';
import FinanceClients from './FinanceClients';
import CenteredTextSection from '../CenteredTextSection';
import Footer from '../Footer';
import LogoSection from '../Home/LogoSection';
function FinancePage() {
    return (
      <>
        <Navbar />
        <FinanceAbout />
        <FinanceDomain />
        <FinanceClients />
        <LogoSection />
        <CenteredTextSection bgColor="#121212" />
        <Footer bgColor="#252525" />
      </>
    );
  }
  
  export default FinancePage;
  
