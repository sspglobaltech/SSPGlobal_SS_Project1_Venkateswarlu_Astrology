import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Events() {
  const { t } = useLanguage();
  const [sectionRef, isVisible] = useScrollAnimation(0.1);
  const [currentIndex, setCurrentIndex] = useState(0);

  // We are using the generated placeholder images
  const events = [
    {
      id: 1,
      image: '/assets/event-1.jpg',
      alt: 'Isha Foundation Visit',
      description: 'A spiritual journey to the magnificent Adiyogi Shiva statue at Isha Foundation, Coimbatore.'
    },
    {
      id: 2,
      image: '/assets/event-2.jpg',
      alt: 'Sharing Vedic Wisdom',
      description: 'Sharing profound Jyotisha wisdom and Sanatana Dharma insights through traditional teaching.'
    },
    {
      id: 3,
      image: '/assets/event-4.jpg',
      alt: 'Vedic Scholars Gathering',
      description: 'Collaborating with esteemed Vedic scholars to preserve and promote ancient astrology sciences.'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  // Auto-play for professional feel
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="events" className="relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-[#030612] via-[#09152b] to-[#030612]">
      {/* Premium Particles / Mandala Background Effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#040815] via-[#091022]/70 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div
          ref={sectionRef}
          className={`mx-auto mb-16 max-w-4xl text-center transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <span className="inline-flex flex-col items-center justify-center gap-4 mb-6">
            <span className="px-6 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase border border-gold-500/40 text-gold-400 bg-gold-500/10 shadow-[0_0_20px_rgba(234,179,8,0.15)]">
              {t.events?.sectionTag || 'Gallery'}
            </span>
          </span>
          
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-tight tracking-wide mb-6">
            <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(234,179,8,0.3)]">
              {t.events?.title || 'Spiritual Journey & Events'}
            </span>
          </h2>
          
          <p className="mx-auto max-w-2xl text-lg sm:text-xl leading-8 text-white/80 font-light drop-shadow-sm">
            {t.events?.subtitle || 'Glimpses of our spiritual ceremonies, astrology seminars, and divine gatherings.'}
          </p>

          <div className="mx-auto mt-10 w-full flex justify-center items-center gap-4">
            <div className="h-[1px] w-16 sm:w-32 bg-gradient-to-r from-transparent to-gold-500/50" />
            <svg viewBox="0 0 120 24" className="h-7 w-36 text-gold-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" fill="none" stroke="currentColor">
              <path strokeWidth="1.5" strokeLinecap="round" d="M4 12h34m44 0h34" />
              <path strokeLinejoin="round" fill="currentColor" d="M60 2 c 2 8 2 8 8 10 c -6 2 -6 2 -8 10 c -2 -8 -2 -8 -8 -10 c 6 -2 6 -2 8 -10 z" />
              <path strokeLinejoin="round" fill="currentColor" opacity="0.6" d="M44 12 l2 -2 l2 2 l-2 2 z" />
              <path strokeLinejoin="round" fill="currentColor" opacity="0.6" d="M76 12 l-2 -2 l-2 2 l2 2 z" />
            </svg>
            <div className="h-[1px] w-16 sm:w-32 bg-gradient-to-l from-transparent to-gold-500/50" />
          </div>
        </div>

        {/* Professional Carousel */}
        <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-gold-500/10 group">
          
          {/* Main Track */}
          <div 
            className="flex transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] h-[400px] md:h-[600px]"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {events.map((event) => (
              <div key={event.id} className="w-full flex-shrink-0 relative">
                <img 
                  src={event.image} 
                  alt={event.alt} 
                  className="w-full h-full object-cover select-none"
                />
                {/* Premium Gradient Shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent flex items-end">
                  <div className="p-8 md:p-12 w-full text-center md:text-left translate-y-4 group-hover:translate-y-0 transition-all duration-700 opacity-90 group-hover:opacity-100">
                    <h3 className="text-white font-heading text-2xl md:text-4xl font-bold mb-2 drop-shadow-lg">
                      {event.alt}
                    </h3>
                    <p className="text-gold-200/80 md:text-lg max-w-2xl leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Minimal Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white/50 hover:text-gold-400 hover:bg-gold-500/10 transition-all backdrop-blur-sm opacity-0 group-hover:opacity-100 border border-white/5 hover:border-gold-500/30"
            aria-label="Previous Slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white/50 hover:text-gold-400 hover:bg-gold-500/10 transition-all backdrop-blur-sm opacity-0 group-hover:opacity-100 border border-white/5 hover:border-gold-500/30"
            aria-label="Next Slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Professional Minimalist Pagination (Moved below photos to prevent overlap) */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="group py-2 flex items-center"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className={`h-[3px] rounded-full transition-all duration-500 ${
                currentIndex === index 
                  ? 'bg-gradient-to-r from-gold-300 to-gold-500 w-12 shadow-[0_0_10px_rgba(212,175,55,0.3)]' 
                  : 'bg-white/10 w-6 group-hover:bg-white/30'
              }`} />
            </button>
          ))}
        </div>

        {/* Gallery Footer Subtext */}
        <div className="mt-8 text-center text-gray-500/60 text-xs tracking-widest uppercase">
          Slide to explore the spiritual legacy
        </div>
      </div>
    </section>
  );
}
