import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeading from './SectionHeading';

function StarRating({ rating }) {
  return (
    <div className="flex justify-end gap-1 relative z-10">
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="gold-metallic" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5E6B8" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8B6508" />
          </linearGradient>
        </defs>
      </svg>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 transition-all duration-300 ${i < rating ? 'drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]' : 'opacity-30 text-gray-500'}`}
          fill={i < rating ? "url(#gold-metallic)" : "currentColor"}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { t } = useLanguage();
  const [sectionRef, isVisible] = useScrollAnimation(0.1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const items = t.testimonials.items;

  const goTo = useCallback((index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const next = useCallback(() => {
    goTo((currentIndex + 1) % items.length);
  }, [currentIndex, items.length, goTo]);

  const prev = useCallback(() => {
    goTo((currentIndex - 1 + items.length) % items.length);
  }, [currentIndex, items.length, goTo]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="testimonials" className="relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-[#02040A] via-[#050712] to-[#0A1128]">
      {/* Premium Particles / Mandala Background Effect */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-spiritual-accent/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#02040A] via-[#050712]/70 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Section header */}
        <div
          ref={sectionRef}
          className={`mx-auto mb-16 max-w-4xl text-center transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <SectionHeading 
            title={t.testimonials.title} 
            subtitle={t.testimonials.sectionTag} 
          />
          
          <p className="mx-auto max-w-2xl text-lg sm:text-xl leading-8 text-white/80 font-light drop-shadow-sm mt-4">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          {/* Main testimonial */}
          <div className="relative group">
            
            {/* Ultra-Premium Glassmorphism Card */}
            <div className="rounded-[32px] p-8 sm:p-12 relative overflow-hidden bg-[rgba(8,15,35,0.22)] backdrop-blur-[24px] border border-[rgba(212,175,55,0.18)] shadow-[0_8px_40px_rgba(0,0,0,0.35),0_0_25px_rgba(212,175,55,0.06),inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-300 ease-out group-hover:-translate-y-[6px] group-hover:shadow-[0_12px_45px_rgba(0,0,0,0.45),0_0_40px_rgba(212,175,55,0.08),inset_0_1px_0_rgba(255,255,255,0.1)]">
              
              {/* Glass Reflection Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-40 pointer-events-none" />
              
              {/* Soft Golden Ambient Glow on Hover */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[#D4AF37]/5 blur-[80px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Large Transparent Left Quote Mark */}
              <div className="absolute -top-4 left-6 text-[180px] text-white/5 font-serif leading-none select-none pointer-events-none">
                &ldquo;
              </div>



              {/* Content */}
              <div
                className={`relative z-10 transition-all duration-500 ${
                  isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                }`}
              >
                <StarRating rating={items[currentIndex].rating} />
                
                {/* Premium Typography for Review */}
                <p className="text-lg sm:text-xl text-[#F8F9FA] leading-loose mt-8 mb-10 font-light italic tracking-wide">
                  &ldquo;{items[currentIndex].text}&rdquo;
                </p>

                <div className="flex items-center gap-5">
                  {/* Luxury Circular Badge Avatar */}
                  <div className="w-16 h-16 rounded-full bg-[rgba(255,255,255,0.06)] backdrop-blur-[12px] border border-[rgba(212,175,55,0.25)] shadow-[0_4px_15px_rgba(0,0,0,0.2)] flex items-center justify-center text-[#D4AF37] font-serif font-bold text-2xl drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]">
                    {items[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    {/* Royal Gold Client Name */}
                    <div className="font-serif text-xl font-semibold text-[#D4AF37] drop-shadow-[0_0_8px_rgba(212,175,55,0.3)] tracking-wide">
                      {items[currentIndex].name}
                    </div>
                    {/* Minimalist Location */}
                    <div className="text-sm text-white/50 flex items-center gap-1.5 mt-1 font-light tracking-wide uppercase">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {items[currentIndex].location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Navigation Controls */}
          <div className="flex items-center justify-center gap-8 mt-12">
            {/* Minimalist Bars Pagination */}
            <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="group py-4 flex items-center"
                  aria-label={`Go to testimonial ${i + 1}`}
                >
                  <div className={`h-[2px] rounded-full transition-all duration-500 ${
                    i === currentIndex
                      ? 'w-10 bg-gradient-to-r from-[#D4AF37] to-[#F5E6B8] shadow-[0_0_10px_rgba(212,175,55,0.5)]'
                      : 'w-4 bg-white/20 group-hover:bg-white/50'
                  }`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
