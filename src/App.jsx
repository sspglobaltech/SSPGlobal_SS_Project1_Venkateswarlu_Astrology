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

function App() {
  const [showLoading, setShowLoading] = useState(true);

  return (
    <ThemeProvider>
      <LanguageProvider>
        {showLoading && <LoadingScreen onComplete={() => setShowLoading(false)} />}
        <div className={`cosmic-reference-shell min-h-screen transition-opacity duration-1000 ${showLoading ? 'opacity-0' : 'opacity-100'}`} style={{ transition: 'background-color 0.5s ease, opacity 1s ease' }}>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Qualifications />
            <Services />
            <Events />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
          <WhatsAppFloat />
          <ShareFloat />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
