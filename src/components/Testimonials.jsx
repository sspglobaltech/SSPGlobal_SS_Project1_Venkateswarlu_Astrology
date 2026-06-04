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
  const items = t.testimonials.items;

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
      </div>

      {/* Infinite Marquee Testimonials - Full Width */}
      <div 
        className="relative w-full overflow-hidden py-10 group mt-8 z-10"
        style={{ 
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' 
        }}
      >
        {/* Scrolling tracks container */}
        <div className="flex w-max">
            {/* Track 1 */}
            <div className="flex gap-6 sm:gap-8 pr-6 sm:pr-8 animate-marquee group-hover:[animation-play-state:paused]">
              {items.map((item, index) => (
                <div 
                  key={`t1-${index}`} 
                  className="w-[320px] sm:w-[450px] shrink-0 rounded-[32px] p-8 sm:p-10 relative overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_15px_45px_0_rgba(255,255,255,0.2)] flex flex-col"
                >
                  <div className="absolute -top-6 left-4 text-[120px] text-white/10 font-serif leading-none select-none pointer-events-none">
                    &ldquo;
                  </div>

                  <div className="relative z-10 flex-1 flex flex-col">
                    <StarRating rating={item.rating} />
                    
                    <p className="text-sm sm:text-[15px] text-white/90 leading-relaxed mt-6 mb-8 font-light italic tracking-wide flex-1">
                      &ldquo;{item.text}&rdquo;
                    </p>

                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-[0_4px_15px_rgba(0,0,0,0.1)] flex items-center justify-center text-[#D4AF37] font-serif font-bold text-xl drop-shadow-[0_0_5px_rgba(212,175,55,0.5)] shrink-0">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-serif text-[17px] font-semibold text-[#D4AF37] tracking-wide">
                          {item.name}
                        </div>
                        <div className="text-xs text-white/60 flex items-center gap-1.5 mt-0.5 font-light tracking-wide uppercase">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {item.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Track 2 (Duplicate for seamless loop) */}
            <div className="flex gap-6 sm:gap-8 pr-6 sm:pr-8 animate-marquee group-hover:[animation-play-state:paused]" aria-hidden="true">
              {items.map((item, index) => (
                <div 
                  key={`t2-${index}`} 
                  className="w-[320px] sm:w-[450px] shrink-0 rounded-[32px] p-8 sm:p-10 relative overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_15px_45px_0_rgba(255,255,255,0.2)] flex flex-col"
                >
                  <div className="absolute -top-6 left-4 text-[120px] text-white/10 font-serif leading-none select-none pointer-events-none">
                    &ldquo;
                  </div>

                  <div className="relative z-10 flex-1 flex flex-col">
                    <StarRating rating={item.rating} />
                    
                    <p className="text-sm sm:text-[15px] text-white/90 leading-relaxed mt-6 mb-8 font-light italic tracking-wide flex-1">
                      &ldquo;{item.text}&rdquo;
                    </p>

                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-[0_4px_15px_rgba(0,0,0,0.1)] flex items-center justify-center text-[#D4AF37] font-serif font-bold text-xl drop-shadow-[0_0_5px_rgba(212,175,55,0.5)] shrink-0">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-serif text-[17px] font-semibold text-[#D4AF37] tracking-wide">
                          {item.name}
                        </div>
                        <div className="text-xs text-white/60 flex items-center gap-1.5 mt-0.5 font-light tracking-wide uppercase">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {item.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
}
