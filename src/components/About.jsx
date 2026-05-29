import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FeatureIcon = ({ index }) => {
  const common = {
    className: "w-7 h-7 sm:w-8 sm:h-8 text-gold-400 transform group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4",
    viewBox: "0 0 24 24"
  };
  
  switch(index) {
    case 0:
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 19a8.5 8.5 0 0 1 0-14" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 19a8.5 8.5 0 0 0 0-14" />
          <circle cx="12" cy="12" r="5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.5v2.5l1.5 1.5" />
        </svg>
      );
    case 1:
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <circle cx="12" cy="9" r="2.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 15c0-1.5 2.5-2.5 4-2.5s4 1 4 2.5" />
        </svg>
      );
    case 2:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18M6.3 6.3l11.4 11.4M6.3 17.7l11.4-11.4" />
          <circle cx="12" cy="12" r="2.5" fill="currentColor" opacity="0.2" />
        </svg>
      );
    case 3:
      return (
        <svg {...common}>
          {/* Hereditary Lineage Tree & Cosmic Arc */}
          {/* Deep Roots and Solid Trunk */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22v-8" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 22c2-3 5-3 5-8" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 22c-2-3-5-3-5-8" />
          
          {/* Branches Reaching to the Stars */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14c0-3-4-4-5-8M12 14c0-3 4-4 5-8M12 14c0-4 0-6 0-10" />
          
          {/* Glowing Generation Stars */}
          <circle cx="7" cy="6" r="1.5" />
          <circle cx="17" cy="6" r="1.5" />
          <circle cx="12" cy="4" r="1.5" />
          <circle cx="4" cy="11" r="1" className="opacity-60" />
          <circle cx="20" cy="11" r="1" className="opacity-60" />
          
          {/* Sacred Cosmic/Zodiac Arch */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 14a10 10 0 0 1 18 0" strokeDasharray="2.5 3.5" className="opacity-40" />
        </svg>
      );
    default: return null;
  }
};

export default function About() {
  const { t } = useLanguage();
  const [sectionRef, isVisible] = useScrollAnimation(0.1);
  const [imageRef, imageVisible] = useScrollAnimation(0.2);

  const highlights = [
    { text: t.about.highlight1 },
    { text: t.about.highlight2 },
    { text: t.about.highlight3 },
    { text: t.about.highlight4 },
  ];

  const stats = [
    { title: t.about.stat1Title, label: t.about.stat1Label, color: 'from-gold-400 to-saffron-500' },
    { title: t.about.stat2Title, label: t.about.stat2Label, color: 'from-sacred-green to-green-400' },
    { title: t.about.stat3Title, label: t.about.stat3Label, color: 'from-sacred-blue to-blue-400' },
  ];

  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-[#02040A] via-[#050712] to-[#0A1128]">
      {/* Premium Particles / Mandala Background Effect */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-spiritual-accent/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#02040A] via-[#050712]/70 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Section header */}
        <div
          ref={sectionRef}
          className={`mx-auto mb-16 lg:mb-20 max-w-4xl text-center transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <span className="inline-flex flex-col items-center justify-center gap-4 mb-6">
            <span className="px-6 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase border border-gold-500/40 text-gold-400 bg-gold-500/10 shadow-[0_0_20px_rgba(234,179,8,0.15)]">
              {t.about.sectionTag}
            </span>
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-tight tracking-wide mb-6">
            <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(234,179,8,0.3)]">
              {t.about.title}
            </span>
          </h2>
          
          <div className="mx-auto mt-8 w-full flex justify-center items-center gap-4">
            <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent to-gold-500/50" />
            <svg viewBox="0 0 120 24" className="h-6 w-28 text-gold-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" fill="none" stroke="currentColor">
              <path strokeWidth="1.5" strokeLinecap="round" d="M4 12h34m44 0h34" />
              <path strokeLinejoin="round" fill="currentColor" d="M60 2 c 2 8 2 8 8 10 c -6 2 -6 2 -8 10 c -2 -8 -2 -8 -8 -10 c 6 -2 6 -2 8 -10 z" />
            </svg>
            <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-l from-transparent to-gold-500/50" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image Section */}
          <div
            ref={imageRef}
            className={`transition-all duration-1000 delay-200 ${
              imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative mt-2">
              {/* Glowing decorative background */}
              <div className="absolute -inset-6 bg-gradient-to-br from-gold-500/40 via-gold-500/10 to-transparent rounded-[2.5rem] blur-[40px] opacity-80" />
              
              {/* Main image wrapper */}
              <div className="relative rounded-[2rem] overflow-hidden border-2 border-gold-500/50 shadow-[0_20px_60px_-12px_rgba(212,175,55,0.4)] group">
                <div className="absolute inset-0 bg-[url('/images/pattern-overlay.png')] opacity-10 mix-blend-overlay z-10 pointer-events-none" />
                <img
                  src="/images/profile.jpg"
                  alt="Astrologer Venkateswarlu - Profile"
                  className="w-full h-[550px] lg:h-[680px] object-cover object-[center_20%] transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02040A]/90 via-[#02040A]/20 to-transparent pointer-events-none z-10" />
              </div>

              {/* Stats overlaid on image */}
              <div className="absolute -bottom-8 left-4 right-4 sm:left-6 sm:right-6 flex gap-3 sm:gap-4 z-10">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="flex-1 glass-card rounded-2xl p-4 sm:p-5 text-center border border-gold-500/20 shadow-2xl bg-[#0a0f18]/80 backdrop-blur-xl hover:border-gold-500/40 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className={`font-heading text-xl sm:text-2xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent drop-shadow-md`}>
                      {stat.title}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-300 mt-1.5 uppercase font-medium tracking-[0.15em] opacity-90">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Added spacer to account for absolute-positioned stats breaking out of normal flow */}
            <div className="h-10 sm:h-12 w-full lg:hidden"></div>
          </div>

          {/* Text Content */}
          <div
            className={`flex flex-col h-full transition-all duration-1000 delay-400 ${
              imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {/* Premium Typographic Paragraphs */}
            <p className="text-white/95 text-lg sm:text-xl leading-relaxed mb-6 font-light drop-shadow-sm">
              {t.about.description}
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-10 font-light text-justify hyphens-auto sm:text-left sm:hyphens-none">
              {t.about.description2}
            </p>

            {/* Feature Cards Grids (2x2) */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-12">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="group relative flex items-center gap-5 p-5 rounded-[1.25rem] bg-[#0A1128]/60 backdrop-blur-xl border border-gold-500/20 shadow-[0_8px_30px_-5px_rgba(0,0,0,0.6)] hover:shadow-[0_12px_40px_-5px_rgba(212,175,55,0.3)] hover:border-gold-500/60 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                >
                  {/* Hover Aura Effect */}
                  <div className="absolute inset-x-0 -bottom-10 h-20 bg-gradient-to-t from-gold-500/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Icon Container */}
                  <div className="relative flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#0c1322] to-[#040810] border border-gold-500/30 group-hover:border-gold-400 group-hover:bg-gradient-to-br group-hover:from-gold-500/10 group-hover:to-transparent shadow-[inset_0_0_15px_rgba(234,179,8,0.05)] transition-all duration-500 flex-shrink-0">
                    <FeatureIcon index={i} />
                    {/* Inner shimmer inside icon container */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                  </div>

                  <span className="text-[15px] sm:text-base text-white/90 font-semibold tracking-wide leading-snug group-hover:text-gold-300 transition-colors duration-300 relative z-10">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Second image (formal) & Profile badge (Pushed to bottom using mt-auto if there was space, else just standard margin) */}
            <div className="flex items-center gap-5 mt-auto pt-8 border-t border-gold-500/10">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-gold-400 shadow-[0_0_20px_rgba(234,179,8,0.25)] flex-shrink-0 relative group">
                {/* Subtle rotating glow around the badge */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-gold-500/20 to-transparent group-hover:rotate-180 transition-transform duration-1000 ease-linear pointer-events-none"></div>
                <img
                  src="/images/venkateswarlu-formal.jpg"
                  alt="Venkateswarlu - Formal"
                  className="w-full h-full object-cover object-top relative z-10"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="font-heading text-xl sm:text-2xl font-bold bg-gradient-to-r from-gold-400 to-saffron-400 bg-clip-text text-transparent mb-1 drop-shadow-sm">
                  {t.about.profileName}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-[0.2em] font-medium flex items-center gap-2">
                  {t.about.profileTitle} <span className="text-gold-500/50">|</span> {t.about.profileSubtitle}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
