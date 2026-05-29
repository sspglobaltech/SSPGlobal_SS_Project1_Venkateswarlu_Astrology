import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function QualificationIcon({ icon, className = 'w-7 h-7' }) {
  const commonProps = {
    className,
    fill: 'none',
    stroke: 'currentColor',
    viewBox: '0 0 24 24',
  };

  switch (icon) {
    // AWARDS — common trophy icon
    case '🏆':
    case '🌟':
      return (
        <svg {...commonProps}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 21h8M10 17h4M8 4h8v4a4 4 0 01-8 0V4Z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 6h2a2 2 0 010 4h-2M8 6H6a2 2 0 000 4h2M12 12v5" />
        </svg>
      );
    // APPRECIATION — common certificate/scroll icon
    case '📜':
    case '🙏':
      return (
        <svg {...commonProps}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 5.5h8a3 3 0 013 3V17a2.5 2.5 0 01-2.5 2.5H9a3 3 0 010-6h8" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 5.5A2.5 2.5 0 005.5 8v8A2.5 2.5 0 008 18.5" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M10.5 9.5h5M10.5 12.5h4M10.5 15.5h5" />
        </svg>
      );
    // EDUCATION — common graduation cap icon
    case '📚':
    case '🎓':
    case '⭐':
      return (
        <svg {...commonProps}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="m3 9 9-4 9 4-9 4-9-4Z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 11.5V15c0 .9 2.24 2.5 5 2.5s5-1.6 5-2.5v-3.5M21 10v5" />
        </svg>
      );
    default:
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="8" strokeWidth={1.8} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l2.5 2.5" />
        </svg>
      );
  }
}

function QualificationIconBadge({ icon, large = false }) {
  return (
    <div className={`qualification-icon-badge ${large ? 'qualification-icon-badge-large' : ''}`}>
      <div className="qualification-icon-badge-ring" />
      <div className="qualification-icon-badge-core">
        <QualificationIcon icon={icon} className={large ? 'w-9 h-9' : 'w-7 h-7'} />
      </div>
    </div>
  );
}

function QualificationCertifiedBadge() {
  return (
    <div className="qualification-certified-badge">
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="m12 3 2.1 4.3 4.8.7-3.4 3.3.8 4.7-4.3-2.3-4.3 2.3.8-4.7L5.1 8l4.8-.7L12 3Z" />
      </svg>
      <span>Certified</span>
    </div>
  );
}

export default function Qualifications() {
  const { t } = useLanguage();
  const [sectionRef, isVisible] = useScrollAnimation(0.1);
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="qualifications" className="relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-[#0A1128] via-[#050712] to-[#0A1128]">
      {/* Premium Particles / Mandala Background Effect */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-spiritual-accent/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0A1128] via-[#050712]/70 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div
          ref={sectionRef}
          className={`mx-auto mb-16 max-w-4xl text-center transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <span className="inline-flex flex-col items-center justify-center gap-4 mb-6">
            <span className="px-6 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase border border-gold-500/40 text-gold-400 bg-gold-500/10 shadow-[0_0_20px_rgba(234,179,8,0.15)]">
              {t.qualifications.sectionTag}
            </span>
          </span>
          
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-tight tracking-wide mb-6">
            <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(234,179,8,0.3)]">
              {t.qualifications.title}
            </span>
          </h2>
          
          <p className="mx-auto max-w-2xl text-lg sm:text-xl leading-8 text-white/80 font-light drop-shadow-sm">
            {t.qualifications.subtitle}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {t.qualifications.items.map((item, i) => (
            <div key={i} className="w-full">
              <QualificationCard item={item} index={i} onClick={() => setSelectedCert(item)} />
            </div>
          ))}
        </div>
      </div>

      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity" onClick={() => setSelectedCert(null)}>
          <div className="relative max-w-4xl w-full bg-spiritual-dark border border-gold-500/30 rounded-2xl overflow-hidden shadow-2xl p-8 text-center" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gold-400 transition-colors"
              onClick={() => setSelectedCert(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="mb-6">
              <div className="mb-4">
                <QualificationIconBadge icon={selectedCert.icon} large />
              </div>
              <h3 className="font-heading text-2xl font-bold text-gold-300">{selectedCert.title}</h3>
              <p className="text-gray-400">{selectedCert.issuer}</p>
            </div>

            <div className="relative mx-auto rounded-xl border-4 border-gold-500/20 shadow-inner overflow-hidden max-w-2xl bg-spiritual-slate/50 flex items-center justify-center min-h-[300px]">
              <img
                src={selectedCert.certificateImage || "/assets/certificate_mockup_1776496466745.png"}
                alt={`${selectedCert.title} Certificate`}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function QualificationCard({ item, index, onClick }) {
  const [cardRef, isVisible] = useScrollAnimation(0.1);

  return (
    <div
      ref={cardRef}
      className={`group h-full transition-all duration-700 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onClick={onClick}
    >
      <div className="qualification-card relative h-full min-h-[290px] w-full flex flex-col overflow-hidden text-center">
        <div className="qualification-card-border" />
        <div className="qualification-card-inner flex-1 w-full relative flex flex-col items-center justify-start rounded-2xl px-8 pt-10 pb-8">
          <div className="qualification-card-shimmer" />
          <QualificationCertifiedBadge />

          <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
            <QualificationIconBadge icon={item.icon} />
          </div>

          <h3 className="qualification-card-title">
            {item.title}
          </h3>

          <div className="qualification-card-divider" />

          <p className="qualification-card-issuer">
            {item.issuer}
          </p>
        </div>
      </div>
    </div>
  );
}
