import { useEffect, useRef, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';

// Sanatana Dharma sacred symbols
const sacredSymbols = ['ॐ', '🙏', '🪔', '☸', '🔱', '🐚', '📿', '🌸'];
const navagrahaNames = ['సూర్యుడు', 'చంద్రుడు', 'కుజుడు', 'బుధుడు', 'గురుడు', 'శుక్రుడు', 'శని', 'రాహు', 'కేతు'];
const sacredTexts = ['ॐ नमः शिवाय', 'श्री गणेशाय नमः', 'ॐ गुरवे नमः', 'ॐ नमो नारायणाय', 'सर्वे भवन्तु सुखिनः'];

// Floating sacred symbol component
function FloatingSacred({ symbol, style }) {
  return (
    <div
      className="absolute select-none pointer-events-none animate-float"
      style={{
        ...style,
        animationDelay: `${Math.random() * 8}s`,
        animationDuration: `${6 + Math.random() * 6}s`,
      }}
    >
      <span style={{ fontSize: style.fontSize || '2rem', opacity: style.opacity || 0.12 }}>
        {symbol}
      </span>
    </div>
  );
}

// Floating Om symbol with glow
function FloatingOm({ style }) {
  return (
    <div
      className="absolute select-none pointer-events-none animate-float"
      style={{
        ...style,
        animationDelay: `${Math.random() * 6}s`,
        animationDuration: `${8 + Math.random() * 4}s`,
      }}
    >
      <span
        className="font-decorative"
        style={{
          fontSize: style.fontSize || '3rem',
          color: 'rgba(212, 175, 55, 0.08)',
          textShadow: '0 0 20px rgba(212, 175, 55, 0.15)',
        }}
      >
        ॐ
      </span>
    </div>
  );
}

// Animated Diya flame
function Diya({ style }) {
  return (
    <div
      className="absolute select-none pointer-events-none"
      style={style}
    >
      <div className="relative flex flex-col items-center" style={{ opacity: 0.15 }}>
        {/* Flame */}
        <div
          className="w-3 h-5 rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(ellipse at bottom, #B8860B, #D4AF37, transparent)',
            filter: 'blur(1px)',
            animationDuration: `${1 + Math.random() * 1.5}s`,
          }}
        />
        {/* Diya base */}
        <div
          className="w-5 h-2 rounded-b-full mt-[-2px]"
          style={{ background: 'rgba(255, 152, 0, 0.4)' }}
        />
      </div>
    </div>
  );
}

// Lotus SVG component
function Lotus({ style, size = 60 }) {
  return (
    <div
      className="absolute select-none pointer-events-none animate-float"
      style={{
        ...style,
        animationDelay: `${Math.random() * 10}s`,
        animationDuration: `${10 + Math.random() * 8}s`,
      }}
    >
      <svg width={size} height={size} viewBox="0 0 100 100" style={{ opacity: 0.06 }}>
        {/* Lotus petals */}
        {Array.from({ length: 8 }).map((_, i) => (
          <ellipse
            key={i}
            cx="50"
            cy="35"
            rx="12"
            ry="28"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="1"
            transform={`rotate(${i * 45} 50 50)`}
          />
        ))}
        {/* Center circle */}
        <circle cx="50" cy="50" r="8" fill="none" stroke="#B8860B" strokeWidth="1" />
        <circle cx="50" cy="50" r="4" fill="rgba(212, 175, 55, 0.3)" />
      </svg>
    </div>
  );
}

// Floating Sanskrit text
function FloatingShloka({ text, style }) {
  return (
    <div
      className="absolute select-none pointer-events-none animate-float"
      style={{
        ...style,
        animationDelay: `${Math.random() * 12}s`,
        animationDuration: `${12 + Math.random() * 8}s`,
      }}
    >
      <span
        className="font-decorative italic whitespace-nowrap"
        style={{
          fontSize: '0.75rem',
          color: 'rgba(212, 175, 55, 0.06)',
          letterSpacing: '0.15em',
        }}
      >
        {text}
      </span>
    </div>
  );
}

export default function Hero({ onOpenBookingModal }) {
  const { t, language } = useLanguage();
  const heroRef = useRef(null);
  
  const langSuffix = language === 'te' ? 'tel' : 'eng';

  // Sacred symbol positions (memoized for stable render)
  const sacredPositions = useMemo(() => 
    sacredSymbols.map((symbol, i) => ({
      symbol,
      style: {
        left: `${3 + (i % 4) * 24 + Math.random() * 12}%`,
        top: `${8 + Math.floor(i / 4) * 40 + Math.random() * 20}%`,
        fontSize: `${1.5 + Math.random() * 1.5}rem`,
        opacity: 0.08 + Math.random() * 0.08,
      },
    })),
  []);

  // Om positions
  const omPositions = useMemo(() => 
    Array.from({ length: 5 }, (_, i) => ({
      style: {
        left: `${10 + i * 20 + Math.random() * 10}%`,
        top: `${15 + Math.random() * 65}%`,
        fontSize: `${2 + Math.random() * 2.5}rem`,
      },
    })),
  []);

  // Diya positions
  const diyaPositions = useMemo(() => 
    Array.from({ length: 8 }, (_, i) => ({
      left: `${5 + Math.random() * 90}%`,
      top: `${5 + Math.random() * 85}%`,
    })),
  []);

  // Lotus positions
  const lotusPositions = useMemo(() => [
    { left: '5%', top: '15%' },
    { left: '85%', top: '10%' },
    { left: '15%', top: '75%' },
    { left: '75%', top: '70%' },
    { left: '45%', top: '5%' },
  ], []);

  // Shloka positions
  const shlokaPositions = useMemo(() => 
    sacredTexts.map((text, i) => ({
      text,
      style: {
        left: `${5 + Math.random() * 60}%`,
        top: `${10 + i * 18 + Math.random() * 8}%`,
      },
    })),
  []);

  // Small twinkling lights (like diya lights in distance)
  const lights = useMemo(() => 
    Array.from({ length: 40 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      opacity: 0.15 + Math.random() * 0.4,
      width: `${1 + Math.random() * 2}px`,
      height: `${1 + Math.random() * 2}px`,
    })),
  []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Sanatana Dharma Background */}
      <div className="absolute inset-0">
        {/* Base gradient aligned with the site-wide cosmic flow */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, #02040A 0%, #050712 34%, #0A1128 72%, #02040A 100%)'
        }} />
        
        {/* Sacred cosmic glows */}
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-spiritual-accent/10 via-spiritual-light/5 to-transparent rounded-full translate-x-1/4 translate-y-1/4" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-[#050712]/80 to-[#02040A]" />

        {/* Sri Yantra sacred geometry in center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-[0.025] animate-spin-slow" style={{ animationDuration: '120s' }}>
          <svg viewBox="0 0 400 400" className="w-full h-full">
            {/* Outer circle (Bhupura) */}
            <circle cx="200" cy="200" r="195" fill="none" stroke="#F7D774" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="180" fill="none" stroke="#D4AF37" strokeWidth="0.3" />
            <circle cx="200" cy="200" r="165" fill="none" stroke="#B8860B" strokeWidth="0.3" />
            {/* Lotus petals outer ring - 16 petals */}
            {Array.from({ length: 16 }).map((_, i) => (
              <ellipse key={`outer-${i}`} cx="200" cy="60" rx="18" ry="45" fill="none" stroke="#D4AF37" strokeWidth="0.3" transform={`rotate(${i * 22.5} 200 200)`} />
            ))}
            {/* Inner lotus - 8 petals */}
            {Array.from({ length: 8 }).map((_, i) => (
              <ellipse key={`inner-${i}`} cx="200" cy="100" rx="14" ry="35" fill="none" stroke="#B8860B" strokeWidth="0.3" transform={`rotate(${i * 45} 200 200)`} />
            ))}
            {/* Upward triangles (Shiva) */}
            <polygon points="200,50 320,310 80,310" fill="none" stroke="#D4AF37" strokeWidth="0.4" />
            <polygon points="200,70 300,290 100,290" fill="none" stroke="#D4AF37" strokeWidth="0.3" />
            <polygon points="200,90 280,270 120,270" fill="none" stroke="#D4AF37" strokeWidth="0.3" />
            <polygon points="200,110 260,250 140,250" fill="none" stroke="#D4AF37" strokeWidth="0.3" />
            {/* Downward triangles (Shakti) */}
            <polygon points="200,350 80,90 320,90" fill="none" stroke="#B8860B" strokeWidth="0.4" />
            <polygon points="200,330 100,110 300,110" fill="none" stroke="#B8860B" strokeWidth="0.3" />
            <polygon points="200,310 120,130 280,130" fill="none" stroke="#B8860B" strokeWidth="0.3" />
            <polygon points="200,290 140,150 260,150" fill="none" stroke="#B8860B" strokeWidth="0.3" />
            {/* Bindu (center point) */}
            <circle cx="200" cy="200" r="5" fill="rgba(212, 175, 55, 0.3)" />
            <circle cx="200" cy="200" r="2" fill="rgba(212, 175, 55, 0.5)" />
          </svg>
        </div>

        {/* Twinkling golden lights (like distant diyas) */}
        {lights.map((light, i) => (
          <div
            key={`light-${i}`}
            className="star"
            style={{
              ...light,
              background: i % 3 === 0 ? '#F7D774' : i % 3 === 1 ? '#D4AF37' : '#FFE082',
              borderRadius: '50%',
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Floating Om symbols */}
        {omPositions.map((item, i) => (
          <FloatingOm key={`om-${i}`} {...item} />
        ))}

        {/* Floating sacred symbols */}
        {sacredPositions.map((item, i) => (
          <FloatingSacred key={`sacred-${i}`} {...item} />
        ))}

        {/* Animated Diyas */}
        {diyaPositions.map((pos, i) => (
          <Diya key={`diya-${i}`} style={pos} />
        ))}

        {/* Lotus patterns */}
        {lotusPositions.map((pos, i) => (
          <Lotus key={`lotus-${i}`} style={pos} size={50 + Math.random() * 40} />
        ))}

        {/* Floating Sanskrit shlokas */}
        {shlokaPositions.map((item, i) => (
          <FloatingShloka key={`shloka-${i}`} {...item} />
        ))}

        {/* Navagraha names floating subtly */}
        {navagrahaNames.map((name, i) => (
          <div
            key={`graha-${i}`}
            className="absolute select-none pointer-events-none animate-float"
            style={{
              left: `${5 + (i % 3) * 35 + Math.random() * 10}%`,
              top: `${10 + Math.floor(i / 3) * 28 + Math.random() * 10}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
            }}
          >
            <span style={{ fontSize: '0.65rem', color: 'rgba(212, 175, 55, 0.05)', letterSpacing: '0.1em' }}>
              {name}
            </span>
          </div>
        ))}

        {/* Decorative sacred rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold-500/[0.03] rounded-full animate-spin-slow" style={{ animationDuration: '60s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-saffron-500/[0.02] rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '80s' }} />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 sm:pt-36 lg:pt-40 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8 animate-fade-in">
              {[t.hero.badge1, t.hero.badge2, t.hero.badge3].map((badge, i) => (
                <span
                  key={i}
                  className="group relative overflow-hidden flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-500 hover:-translate-y-0.5 border border-gold-400/50 text-gold-400 bg-black/40 backdrop-blur-xl hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:border-gold-300 hover:bg-black/60 cursor-default"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {/* Antique gold glass overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-500/20 via-gold-300/20 to-gold-600/20 opacity-100 mix-blend-overlay pointer-events-none"></div>
                  {/* Hover gold light sweep effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[length:200%_auto] animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 mix-blend-screen pointer-events-none"></div>
                  
                  <span className="relative z-10 drop-shadow-md">
                    ✦ {badge}
                  </span>
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.3] mb-8 animate-slide-up drop-shadow-2xl flex flex-col">
              <span className="text-[#FDFBF3] tracking-[0.05em] block pb-1" style={{ textShadow: '0 4px 20px rgba(212, 175, 55, 0.25), 0 0 10px rgba(255, 253, 240, 0.15)' }}>
                {t.hero.titleLine1}
              </span>
              <span className="text-[#FDFBF3] tracking-[0.05em] block pb-3" style={{ textShadow: '0 4px 20px rgba(212, 175, 55, 0.25), 0 0 10px rgba(255, 253, 240, 0.15)' }}>
                {t.hero.titleLine2}
              </span>
              
              {/* Signature / Experience Line */}
              <span className="mt-6 flex flex-wrap gap-x-2.5 items-center justify-center lg:justify-start text-2xl sm:text-3xl bg-gradient-to-r from-gold-500 via-gold-200 to-gold-500 bg-[length:200%_auto] animate-shimmer text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]">
                <span className="font-heading font-bold tracking-[0.1em]">{t.hero.titleHighlightPart1}</span>
                <span className="font-heading font-bold tracking-[0.1em]">{t.hero.titleHighlightPart2}</span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed animate-slide-up font-light drop-shadow-md" style={{ animationDelay: '0.3s' }}>
              {t.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <button
                onClick={onOpenBookingModal}
                id="hero-book-consultation"
                className="group relative overflow-hidden flex items-center justify-center gap-3 px-8 py-4 rounded-full w-full sm:w-auto text-base sm:text-lg whitespace-nowrap font-heading font-bold transition-all duration-500 hover:-translate-y-1 
                bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 text-[#02040A] border-2 border-gold-200/50 hover:border-gold-100
                shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)]
                z-10 cursor-pointer"
              >
                {/* Antique gold glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-gold-200/20 via-white/10 to-gold-200/20 opacity-100 mix-blend-overlay"></div>
                {/* Hover gold light sweep effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[length:200%_auto] animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 mix-blend-screen"></div>
                
                <span className="relative z-10 flex items-center justify-center gap-2 drop-shadow-md">
                  <svg className="w-5 h-5 drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {t.hero.cta1}
                </span>
              </button>

              <a
                href="https://wa.me/917799099069"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp"
                className="group relative overflow-hidden flex items-center justify-center gap-3 px-8 py-4 rounded-full w-full sm:w-auto text-base sm:text-lg whitespace-nowrap font-heading font-semibold transition-all duration-500 hover:-translate-y-1
                bg-black/30 backdrop-blur-xl border border-gold-500/20 hover:border-emerald-500/40 text-gold-50
                shadow-[0_0_20px_rgba(37,211,102,0.05)] hover:shadow-[0_0_30px_rgba(37,211,102,0.25)]
                hover:bg-black/50 z-10"
              >
                {/* Frosted emerald hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-400/10 to-emerald-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-screen"></div>
                {/* Shimmer sweep */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[length:200%_auto] animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"></div>

                <span className="relative z-10 flex items-center justify-center gap-2 drop-shadow-sm">
                  <svg className="w-5 h-5 text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] group-hover:text-emerald-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {t.hero.cta2}
                </span>
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <style>
              {`
                @keyframes breathe {
                  0%, 100% { transform: scale(1); }
                  50% { transform: scale(1.02); }
                }
                @keyframes spin {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
                @keyframes spinReverseCentered {
                  from { transform: translate(-50%, -50%) rotate(0deg); }
                  to { transform: translate(-50%, -50%) rotate(-360deg); }
                }
                .wheel-wrapper {
                  position: relative;
                  width: 320px;
                  height: 320px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  border-radius: 50%;
                }
                @media (min-width: 640px) {
                  .wheel-wrapper { width: 450px; height: 450px; }
                }
                @media (min-width: 1024px) {
                  .wheel-wrapper { width: 550px; height: 550px; }
                }
                .wheel-group {
                  position: absolute;
                  inset: 0;
                  width: 100%;
                  height: 100%;
                  animation: breathe 6s ease-in-out infinite;
                }
                .zodiac-group {
                  mix-blend-mode: screen;
                }
                .wheel-container {
                  position: relative;
                  width: 100%;
                  height: 100%;
                }
                .wheel-layer {
                  position: absolute;
                  inset: 0;
                  margin: auto;
                  width: 100%;
                  height: 100%;
                  border-radius: 50%;
                  background-repeat: no-repeat;
                  background-position: center;
                  background-size: contain;
                  overflow: hidden;
                }
                .layer-inner {
                  width: 95.8%;
                  height: 95.8%;
                  background-image: url("/images/up-sticker-${langSuffix}.png");
                  background-size: cover;
                  background-position: center center;
                  z-index: 1;
                  mask-image: radial-gradient(circle at center, black 92%, transparent 100%);
                  -webkit-mask-image: radial-gradient(circle at center, black 92%, transparent 100%);
                }
                .layer-zodiac {
                  width: 88.7%;
                  height: 88.7%;
                  z-index: 3;
                }
                .zodiac-rotator {
                  width: 100%;
                  height: 100%;
                  background-image: url("/images/up-sticker-clean-${langSuffix}.png");
                  background-repeat: no-repeat;
                  background-position: center center;
                  background-size: contain;
                  animation: spin 40s linear infinite;
                  border-radius: 50%;
                }
                .layer-outer {
                  width: 115%;
                  height: 115%;
                  top: 50%;
                  left: 50%;
                  margin: 0;
                  background-image: url("/images/outer-ring.png");
                  background-size: 100% 100%;
                  background-position: center;
                  z-index: 2;
                  animation: spinReverseCentered 40s linear infinite;
                }
                .layer-idol-person {
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -38%) translateY(25.45%);
                  z-index: 5;
                  width: 100%;
                  height: 100%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
                .layer-idol-person img {
                  max-height: 50%;
                  transform: scale(1.06);
                  object-fit: contain;
                }
                .layer-idol-person::before {
                /* Yellow radial glow behind idol removed per user request */
              `}
            </style>
            
            <div className="relative flex justify-center items-center">
              {/* Divine Aura Glow behind the wheel has been removed per request */}
              <div className="wheel-wrapper">
                <div className="wheel-group zodiac-group">
                    <div className="wheel-layer layer-inner"></div>
                    <div className="wheel-layer layer-zodiac">
                        <div className="zodiac-rotator"></div>
                    </div>
                    <div className="wheel-layer layer-outer"></div>
                </div>
                <div className="wheel-group idol-group">
                    <div className="wheel-layer layer-idol-person drop-shadow-[0_0_20px_rgba(212,175,55,0.6)]">
                        <img src="/images/SSSS.png" alt="Astrologer Venkateswarlu" />
                    </div>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
