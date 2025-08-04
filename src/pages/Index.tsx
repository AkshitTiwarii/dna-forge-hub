import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation on page load
    if (location.hash) {
      const elementId = location.hash.substring(1); // Remove the '#'
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100); // Small delay to ensure page is fully loaded
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-black pb-20 md:pb-0">
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Team />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
