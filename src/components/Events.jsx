import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeading from './SectionHeading';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const eventsData = [
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
  },
  {
    id: 9,
    image: '/assets/gallery-5.jpg',
    title: 'DIVINE PRESENCE',
    location: 'ADIYOGI',
    date: '2024',
    description: 'In deep meditation at the majestic Adiyogi Shiva statue.'
  },
  {
    id: 11,
    image: '/assets/gallery-7.jpg',
    title: 'SACRED GATEWAY',
    location: 'DHYANALINGA',
    date: '2024',
    description: 'Standing before the powerful snake archway of Dhyanalinga.'
  },
  {
    id: 13,
    image: '/assets/gallery-9.jpg',
    title: 'TEMPLE BLESSINGS',
    location: 'SHIVA SHRINE',
    date: '2024',
    description: 'Offering prayers at a historic and grand Shiva temple.'
  }
];

export default function Events() {
  const { t } = useLanguage();
  const [sectionRef, isVisible] = useScrollAnimation(0.1);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextEvent = () => {
    setActiveIndex((prev) => (prev + 1) % eventsData.length);
  };

  const prevEvent = () => {
    setActiveIndex((prev) => (prev === 0 ? eventsData.length - 1 : prev - 1));
  };

  // Auto-play logic
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextEvent();
    }, 5500); // 5.5 seconds

    return () => clearInterval(interval);
  }, [isPaused, activeIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextEvent();
      if (e.key === 'ArrowLeft') prevEvent();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const activeEvent = eventsData[activeIndex];

  return (
    <section id="events" className="relative overflow-hidden py-24 sm:py-32 bg-[#050B1E]">
      {/* Luxury Spiritual Background Enhancements */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[100px] mix-blend-screen" />
        
        {/* Subtle Om Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#D4AF37] opacity-[0.03] text-[800px] font-serif leading-none select-none">
          ॐ
        </div>

        {/* Temple Silhouette using stylized CSS gradient */}
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#020510] to-transparent opacity-80" />
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

        {/* Premium Slideshow Container */}
        <div 
          className="relative max-w-5xl mx-auto h-[500px] md:h-[650px] rounded-[24px] overflow-hidden border border-[#D4AF37]/30 shadow-[0_20px_50px_rgba(212,175,55,0.15)] bg-black/50 backdrop-blur-sm group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Subtle golden glow around the active image */}
          <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(212,175,55,0.15)] pointer-events-none z-10" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeEvent.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <motion.img
                src={activeEvent.image}
                alt={activeEvent.title}
                initial={{ scale: 1.02 }}
                animate={{ scale: 1.06 }}
                transition={{ duration: 6, ease: "linear" }}
                className="w-full h-full object-cover bg-black"
                loading="lazy"
              />
            </motion.div>
          </AnimatePresence>

          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050B1E]/90 via-[#050B1E]/40 to-transparent pointer-events-none z-20" />

          {/* Content Overlay */}
          <div className="absolute bottom-0 inset-x-0 p-8 md:p-12 z-30 flex flex-col md:flex-row md:items-end justify-between gap-6">
            {/* Bottom Left: Title & Description */}
            <div className="flex-1">
              <motion.div
                key={`text-${activeEvent.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-[#D4AF37]">
                    {activeEvent.location}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/50" />
                  <span className="text-[10px] md:text-xs text-white/60 font-light">
                    {activeEvent.date}
                  </span>
                </div>
                <h3 className="text-2xl md:text-4xl font-heading font-bold text-white mb-2 leading-tight drop-shadow-md">
                  {activeEvent.title}
                </h3>
                <p className="text-white/80 font-light text-sm md:text-lg max-w-2xl drop-shadow-sm">
                  {activeEvent.description}
                </p>
              </motion.div>
            </div>

            {/* Bottom Right: Index */}
            <div className="flex items-center gap-4">
              <div className="text-[#D4AF37] font-serif tracking-widest text-lg md:text-xl font-medium drop-shadow-md">
                {String(activeIndex + 1).padStart(2, '0')} <span className="text-white/40 text-sm md:text-base mx-1">/</span> {String(eventsData.length).padStart(2, '0')}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#050B1E]/40 text-[#D4AF37] backdrop-blur-md border border-[#D4AF37]/20 hover:bg-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 z-40 opacity-0 group-hover:opacity-100 hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]"
            onClick={prevEvent}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#050B1E]/40 text-[#D4AF37] backdrop-blur-md border border-[#D4AF37]/20 hover:bg-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 z-40 opacity-0 group-hover:opacity-100 hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]"
            onClick={nextEvent}
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
