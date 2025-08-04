import Navigation from '@/components/Navigation';
import EventsComponent from '@/components/Events';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Events = () => {
  return (
    <div className="min-h-screen bg-black pb-20 md:pb-0">
      <Navigation />
      <main className="relative z-10">
        <EventsComponent />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Events;
