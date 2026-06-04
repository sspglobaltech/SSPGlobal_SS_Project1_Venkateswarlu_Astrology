import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeading from './SectionHeading';

function ServiceIcon({ title }) {
  const common = {
    className: 'w-10 h-10 sm:w-12 sm:h-12 drop-shadow-[0_0_10px_rgba(234,179,8,0.6)]',
    fill: 'none',
    stroke: 'currentColor',
    viewBox: '0 0 24 24',
  };

  switch (title) {
    case 'Horoscope Reading':
    case 'జాతక చదవడం':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="1" strokeWidth="1.2" />
          <path strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M21 3L3 21" />
          <path strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" d="M12 3l9 9-9 9-9-9z" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    case 'Marriage Matching':
    case 'వివాహ అనుకూలత':
      return (
        <img
          src="/marriage-matching-icon.png"
          alt="Marriage Matching"
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain drop-shadow-[0_0_10px_rgba(234,179,8,0.6)]"
        />
      );
    case 'Career Guidance':
    case 'వృత్తి మార్గదర్శనం':
      return (
        <svg {...common} viewBox="0 0 48 48" strokeWidth="2.5">
          {/* Stairs - with a gap below feet */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 43h11v-6h11v-6h11v-6h6" />
          
          {/* Person Head */}
          <circle cx="22" cy="10" r="4" />
          
          {/* Person Body */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M22 14v12" />
          
          {/* Legs */}
          {/* Back leg */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M22 26l-5 8" />
          {/* Front leg */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M22 26l6-4v6" />
          
          {/* Arms */}
          {/* Front arm */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M22 16l6 3" />
          {/* Back arm */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M22 16l-6 7" />
        </svg>
      );
    case 'Vastu Consultation':
    case 'వాస్తు సంప్రదింపు':
      return (
        <svg {...common}>
          <path strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-8 9 8v9H3v-9z" />
          <path strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" d="M9 21v-6h6v6M8 11h8" />
        </svg>
      );
    case 'Dosha Analysis':
    case 'దోష విశ్లేషణ':
      return (
        <svg {...common}>
          {/* Background Kundali */}
          <g opacity="0.2" strokeWidth="1">
            <rect x="2" y="2" width="20" height="20" rx="1" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2 2l20 20M22 2L2 22M12 2l10 10-10 10-10-10z" />
          </g>



          {/* Snake Tail */}
          <path strokeWidth="1.2" strokeLinecap="round" d="M16 19.5c2 0 3.5-.5 3.5-1.5" />

          {/* Cobra Profile Body */}
          <path strokeWidth="1.2" strokeLinejoin="round" fill="#0a1122" d="M10 18 v-6 c0-3 -2-4 -2-6 c0-3 3-4 6-4 c2 0 3 1 3 3 c0 1 -2 2 -3 2 c-1 0 -2 1 -2 3 v8 z" />
          
          {/* Main Front Coil */}
          <ellipse cx="12" cy="18" rx="6" ry="2.5" strokeWidth="1.2" fill="#0a1122" />
          <path strokeWidth="1.2" strokeLinecap="round" d="M7 18c0 1.2 2 2 5 2s5-.8 5-2" />
          
          {/* Snake Eye */}
          <circle cx="14" cy="4.5" r="0.6" fill="currentColor" />
          
          {/* Snake Tongue */}
          <path strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" d="M17 5.5h1.5l1-1M18.5 5.5l1 1" />
        </svg>
      );
    case 'Muhurtham Fixing':
    case 'ముహూర్త నిర్ణయం':
      return (
        <svg {...common} viewBox="0 0 48 48" strokeWidth="2.5">
          {/* Pot Rim */}
          <rect x="12" y="22" width="24" height="4" rx="2" strokeLinejoin="round" />
          
          {/* Pot Body */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 26 C4 32, 10 46, 20 46 h8 C38 46, 44 32, 34 26" />
          
          {/* Coconut Top */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 22 C19 8, 24 2, 24 2 C24 8, 29 22, 29 22" />
          
          {/* Left Mango Leaves */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14 Q14 8 8 10 Q14 14 19 18" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 18 Q12 16 4 20 Q10 22 14 22" />
          
          {/* Right Mango Leaves */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M29 14 Q34 8 40 10 Q34 14 29 18" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M29 18 Q36 16 44 20 Q38 22 34 22" />
          
          {/* Swastika */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M24 31 v8 M20 35 h8 M24 31 h4 M24 39 h-4 M28 35 v4 M20 35 v-4" />
          
          {/* Swastika Dots */}
          <circle cx="21.5" cy="32.5" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="26.5" cy="32.5" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="21.5" cy="37.5" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="26.5" cy="37.5" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'Personal Consultation':
    case 'వ్యక్తిగత సంప్రదింపు':
      return (
        <svg {...common} viewBox="0 0 48 48" strokeWidth="2.5">
          {/* Left person head */}
          <circle cx="13" cy="28" r="4" />
          {/* Left person body */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 44v-3c0-4.4 3.6-8 8-8c1.5 0 3 .4 4 1.2" />
          
          {/* Right person head */}
          <circle cx="35" cy="28" r="4" />
          {/* Right person body */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M43 44v-3c0-4.4-3.6-8-8-8c-1.5 0-3 .4-4 1.2" />
          
          {/* Chat bubble - well above */}
          <rect x="15" y="2" width="18" height="12" rx="3" strokeLinejoin="round" />
          <path strokeLinejoin="round" fill="#0a1122" d="M21 14l3 5 3-5" />
          {/* Chat dots inside bubble */}
          <circle cx="20" cy="8" r="1.2" fill="currentColor" />
          <circle cx="24" cy="8" r="1.2" fill="currentColor" />
          <circle cx="28" cy="8" r="1.2" fill="currentColor" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" strokeWidth="1.2" />
          <path strokeWidth="1.2" strokeLinecap="round" d="M12 7v5l3 2" />
        </svg>
      );
  }
}

function ServiceCard({ service, index, className = '' }) {
  const [cardRef, isVisible] = useScrollAnimation(0.1);

  return (
    <div
      ref={cardRef}
      className={`h-full transition-all duration-1000 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      } ${className}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <article className="group relative h-full flex flex-col rounded-[28px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] hover:shadow-[0_20px_50px_-12px_rgba(212,175,55,0.4)] hover:border-gold-500/60 hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 overflow-hidden">
        {/* Shimmer Animation */}
        <div className="qualification-card-shimmer z-10" />
        
        {/* Sacred Glow */}
        <div className="absolute -inset-4 bg-gradient-to-br from-gold-500/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <div className="relative z-20 flex flex-col h-full p-8 sm:p-10">
          <div className="mb-8 relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-gold-500/20 to-transparent border border-gold-500/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ease-out shadow-[0_0_20px_rgba(234,179,8,0.15)] group-hover:shadow-[0_0_30px_rgba(234,179,8,0.3)] text-gold-400 shrink-0">
            <ServiceIcon title={service.title} />
          </div>

          <h3 className="font-heading text-2xl sm:text-[1.6rem] tracking-wide font-bold bg-gradient-to-r from-gold-400 to-saffron-400 bg-clip-text text-transparent mb-5 transition-all duration-300 drop-shadow-sm">
            {service.title}
          </h3>

          <div className="h-px w-12 bg-gradient-to-r from-gold-500/60 to-transparent mb-6 transition-all duration-500 group-hover:w-24 group-hover:from-gold-400" />

          <p className="text-base sm:text-lg leading-relaxed text-gray-300 font-light flex-1">
            {service.description}
          </p>
        </div>
      </article>
    </div>
  );
}

export default function Services() {
  const { language, t } = useLanguage();
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  const sectionCopy = language === 'te'
    ? {
        title: 'మా దివ్య జ్యోతిష సేవలు',
        subtitle: 'ప్రాచీన వేద జ్ఞానం మరియు గ్రహ దర్శనంతో మీ జీవితానికి మార్గదర్శనం',
        cta: 'సంప్రదింపు బుక్ చేయండి',
      }
    : {
        title: 'OUR DIVINE ASTROLOGY SERVICES',
        subtitle: 'Guiding your life through ancient Vedic wisdom and cosmic insights',
        cta: 'Book Sacred Consultation',
      };

  return (
    <section id="services" className="relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-[#0A1128] via-[#050712] to-[#02040A]">
      {/* Premium Particles / Mandala Background Effect */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-spiritual-accent/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0A1128] via-[#050712]/70 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div
          ref={sectionRef}
          className={`mx-auto mb-20 max-w-4xl text-center transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <SectionHeading 
            title={sectionCopy.title} 
            subtitle={t.services.sectionTag} 
          />
          
          <p className="mx-auto max-w-2xl text-lg sm:text-xl leading-8 text-white/80 font-light drop-shadow-sm mt-4">
            {sectionCopy.subtitle}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, index) => {
            // Center the 7th item on lg screens (3 columns) and sm screens (2 columns)
            const isSeventhItem = index === 6;
            const alignmentClasses = isSeventhItem 
              ? 'sm:col-span-2 lg:col-span-1 lg:col-start-2 sm:max-w-md sm:mx-auto lg:max-w-none lg:mx-0 w-full' 
              : '';

            return (
              <ServiceCard 
                key={service.title} 
                service={service} 
                index={index} 
                className={alignmentClasses}
              />
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <a href="#contact" className="glow-button inline-flex items-center gap-3 text-lg sm:text-xl font-bold !py-5 !px-10 shadow-[0_0_30px_rgba(234,179,8,0.4)] hover:shadow-[0_0_40px_rgba(234,179,8,0.6)] transition-all">
            <span className="relative z-10">{sectionCopy.cta}</span>
            <svg className="relative z-10 h-6 w-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
