import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Qualifications from './components/Qualifications';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ShareFloat from './components/ShareFloat';
import Events from './components/Events';
import BookingModal from './components/BookingModal';
import WhatsAppModal from './components/WhatsAppModal';

function App() {
  const [showLoading, setShowLoading] = useState(true);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <LanguageProvider>
        {showLoading && <LoadingScreen onComplete={() => setShowLoading(false)} />}
        <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
        <WhatsAppModal isOpen={isWhatsAppModalOpen} onClose={() => setIsWhatsAppModalOpen(false)} />
        <div className={`cosmic-reference-shell min-h-screen transition-opacity duration-1000 ${showLoading ? 'opacity-0' : 'opacity-100'}`} style={{ transition: 'background-color 0.5s ease, opacity 1s ease' }}>
          <Navbar onOpenBookingModal={() => setIsBookingModalOpen(true)} />
          <main>
            <Hero 
              onOpenBookingModal={() => setIsBookingModalOpen(true)} 
              onOpenWhatsAppModal={() => setIsWhatsAppModalOpen(true)} 
            />
            <About />
            <Qualifications />
            <Services onOpenBookingModal={() => setIsBookingModalOpen(true)} />
            <Events />
            <Testimonials />
            <Contact onOpenWhatsAppModal={() => setIsWhatsAppModalOpen(true)} />
          </main>
          <Footer onOpenWhatsAppModal={() => setIsWhatsAppModalOpen(true)} />
          <WhatsAppFloat onOpenWhatsAppModal={() => setIsWhatsAppModalOpen(true)} />
          <ShareFloat />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
