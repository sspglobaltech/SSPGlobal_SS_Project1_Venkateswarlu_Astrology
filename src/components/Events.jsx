import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeading from './SectionHeading';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Events() {
  const { t } = useLanguage();
  const [sectionRef, isVisible] = useScrollAnimation(0.1);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      image: '/assets/event-1.jpg',
      title: 'AWARD CEREMONY',
      location: 'HYDERABAD',
      date: 'March 2024',
      description: 'Receiving honors at the Jyotisha award ceremony.'
    },
    {
      id: 2,
      image: '/assets/event-2.jpg',
      title: 'ASTROLOGY SEMINAR',
      location: 'HYDERABAD',
      date: 'January 2024',
      description: 'Addressing the gathering at the Vedic Astrology seminar.'
    },
    {
      id: 3,
      image: '/assets/event-3.png',
      title: 'CAMPUS VISIT',
      location: 'TIRUPATI',
      date: 'December 2023',
      description: 'At the university campus with scenic mountain views.'
    },
    {
      id: 4,
      image: '/assets/event-4.jpg',
      title: 'SPIRITUAL EVENT 1',
      location: 'CHENNAI',
      date: '2024',
      description: 'Participating in a grand spiritual ceremony.'
    },
    {
      id: 5,
      image: '/assets/event-5.png',
      title: 'SPIRITUAL EVENT 2',
      location: 'BANGALORE',
      date: '2024',
      description: 'Guiding devotees during a spiritual gathering.'
    },
    {
      id: 6,
      image: '/assets/event-6.png',
      title: 'SPIRITUAL EVENT 3',
      location: 'COIMBATORE',
      date: '2024',
      description: 'A special moment captured during a temple visit.'
    },
    {
      id: 7,
      image: '/assets/event-7.png',
      title: 'SPIRITUAL EVENT 4',
      location: 'CHENNAI',
      date: '2024',
      description: 'Sharing Jyotisha wisdom at a recent gathering.'
    },
    {
      id: 8,
      image: '/assets/event-8.png',
      title: 'SPIRITUAL EVENT 5',
      location: 'TIRUPATI',
      date: '2024',
      description: 'Participating in sacred rituals.'
    }
  ];

  const nextEvent = (e) => {
    e?.stopPropagation();
    if (!selectedEvent) return;
    const currentIndex = events.findIndex(ev => ev.id === selectedEvent.id);
    setSelectedEvent(events[(currentIndex + 1) % events.length]);
  };

  const prevEvent = (e) => {
    e?.stopPropagation();
    if (!selectedEvent) return;
    const currentIndex = events.findIndex(ev => ev.id === selectedEvent.id);
    setSelectedEvent(events[currentIndex === 0 ? events.length - 1 : currentIndex - 1]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedEvent) return;
      if (e.key === 'Escape') setSelectedEvent(null);
      if (e.key === 'ArrowRight') nextEvent();
      if (e.key === 'ArrowLeft') prevEvent();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedEvent]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedEvent]);

  return (
    <section id="events" className="relative overflow-hidden py-24 sm:py-32 bg-[#050B1E]">
      {/* Luxury Spiritual Enhancements - Particles & Glows */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div
          ref={sectionRef}
          className={`mx-auto mb-16 max-w-4xl text-center transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <SectionHeading 
            title={t.events?.title || 'Spiritual Journey & Events'} 
            subtitle={t.events?.sectionTag || 'Gallery'} 
          />
          
          <p className="mx-auto max-w-2xl text-lg sm:text-xl leading-8 text-white/80 font-light drop-shadow-sm mt-4">
            {t.events?.subtitle || 'Glimpses of our spiritual ceremonies, astrology seminars, and divine gatherings.'}
          </p>
        </div>

        {/* Masonry Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {events.map((event, index) => (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedEvent(event)}
              className="break-inside-avoid relative overflow-hidden rounded-[24px] cursor-pointer group bg-[#020510] border border-[#D4AF37]/10 shadow-lg"
            >
              <div className="relative w-full overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  loading="lazy"
                  className="w-full h-auto object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Smooth Dark Gradient Overlay (Optional now, but good for pure image depth) */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Hover Reveal Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_40px_rgba(212,175,55,0.15)] pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#02040A]/95 backdrop-blur-xl p-4 md:p-8"
            onClick={() => setSelectedEvent(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors border border-white/10 z-[110]"
              onClick={(e) => { e.stopPropagation(); setSelectedEvent(null); }}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button 
              className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#050B1E]/80 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#050B1E] transition-all border border-[#D4AF37]/30 z-[110]"
              onClick={prevEvent}
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <button 
              className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#050B1E]/80 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#050B1E] transition-all border border-[#D4AF37]/30 z-[110]"
              onClick={nextEvent}
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Modal Content container */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row bg-[#050B1E] rounded-3xl overflow-hidden border border-[#D4AF37]/20 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Section */}
              <div className="w-full md:w-2/3 bg-black relative flex items-center justify-center min-h-[300px] md:min-h-[500px]">
                <img 
                  src={selectedEvent.image} 
                  alt={selectedEvent.title}
                  className="w-full h-full object-contain md:object-cover"
                />
              </div>

              {/* Info Section */}
              <div className="w-full md:w-1/3 p-8 flex flex-col justify-center relative">
                {/* Mandala Corner Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none">
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-[#D4AF37]">
                    <path d="M50 0 C60 30 70 40 100 50 C70 60 60 70 50 100 C40 70 30 60 0 50 C30 40 40 30 50 0 Z" />
                  </svg>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#D4AF37]">
                    {selectedEvent.location}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40" />
                  <span className="text-xs text-white/50 font-light">
                    {selectedEvent.date}
                  </span>
                </div>

                <h2 className="text-3xl font-heading font-bold text-white mb-6 leading-tight">
                  {selectedEvent.title}
                </h2>
                
                <div className="w-12 h-px bg-[#D4AF37]/40 mb-6" />

                <p className="text-white/70 leading-relaxed font-light text-lg">
                  {selectedEvent.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
