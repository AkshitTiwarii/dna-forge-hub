import Navigation from '@/components/Navigation';
import EventsComponent from '@/components/Events';
import RewardsContent from '@/components/RewardsContent';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Events = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main className="relative z-10">
        <EventsComponent />
        <RewardsContent />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Events;
