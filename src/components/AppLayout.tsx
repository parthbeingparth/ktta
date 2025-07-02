import React, { useState } from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import TournamentSection from './TournamentSection';
import ResultsSection from './ResultsSection';
import Footer from './Footer';

interface AppLayoutProps {
  children?: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  if (children) {
    return (
      <div className="min-h-screen bg-white">
        <Header 
          onMenuClick={toggleMobileMenu}
          isMobileMenuOpen={mobileMenuOpen}
          onMobileMenuClose={closeMobileMenu}
        />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onMenuClick={toggleMobileMenu}
        isMobileMenuOpen={mobileMenuOpen}
        onMobileMenuClose={closeMobileMenu}
      />
      <main>
        <HeroSection />
        <TournamentSection />
        <ResultsSection />
      </main>
      <Footer />
    </div>
  );
};

export { AppLayout };
export default AppLayout;