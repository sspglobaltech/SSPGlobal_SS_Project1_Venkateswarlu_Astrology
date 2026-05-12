import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-gold-400' : 'text-gray-600'}`}
          fill="currentColor"
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
    <section id="testimonials" className="relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-[#030612] via-[#09152b] to-[#030612]">
      {/* Premium Particles / Mandala Background Effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#040815] via-[#091022]/70 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Section header */}
        <div
          ref={sectionRef}
          className={`mx-auto mb-16 max-w-4xl text-center transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <span className="inline-flex flex-col items-center justify-center gap-4 mb-6">
            <span className="px-6 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase border border-gold-500/40 text-gold-400 bg-gold-500/10 shadow-[0_0_20px_rgba(234,179,8,0.15)]">
              {t.testimonials.sectionTag}
            </span>
          </span>
          
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-tight tracking-wide mb-6">
            <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(234,179,8,0.3)]">
              {t.testimonials.title}
            </span>
          </h2>
          
          <p className="mx-auto max-w-2xl text-lg sm:text-xl leading-8 text-white/80 font-light drop-shadow-sm">
            {t.testimonials.subtitle}
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

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          {/* Main testimonial */}
          <div className="relative">
            {/* Large quote mark */}
            <div className="absolute -top-8 left-4 text-8xl text-gold-500/10 font-decorative leading-none select-none">
              &ldquo;
            </div>

            <div className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden">
              {/* Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 via-saffron-500 to-gold-400" />

              {/* Content */}
              <div
                className={`transition-all duration-500 ${
                  isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                }`}
              >
                <StarRating rating={items[currentIndex].rating} />
                
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mt-6 mb-8 font-light italic">
                  &ldquo;{items[currentIndex].text}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-400 to-saffron-500 flex items-center justify-center text-spiritual-dark font-heading font-bold text-xl">
                    {items[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-heading text-lg font-semibold text-gold-300">
                      {items[currentIndex].name}
                    </div>
                    <div className="text-sm text-gray-400 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
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
            {/* Prev button */}
            <button
              onClick={prev}
              className="group flex items-center justify-center text-gray-500 hover:text-gold-400 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <svg className="w-8 h-8 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Minimalist Bars Pagination */}
            <div className="flex items-center gap-3">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="group py-4 flex items-center"
                  aria-label={`Go to testimonial ${i + 1}`}
                >
                  <div className={`h-[2px] rounded-full transition-all duration-500 ${
                    i === currentIndex
                      ? 'w-10 bg-gradient-to-r from-gold-300 to-gold-500 shadow-[0_0_10px_rgba(212,175,55,0.3)]'
                      : 'w-4 bg-white/10 group-hover:bg-white/30'
                  }`} />
                </button>
              ))}
            </div>

            {/* Next button */}
            <button
              onClick={next}
              className="group flex items-center justify-center text-gray-500 hover:text-gold-400 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <svg className="w-8 h-8 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
