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
    <section id="qualifications" className="relative py-24 overflow-hidden bg-cosmic">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#040815] via-[#091022]/70 to-transparent pointer-events-none" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.02]">
        <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow">
          <circle cx="100" cy="100" r="90" fill="none" stroke="#FFC526" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="#FFC526" strokeWidth="0.3" />
          <circle cx="100" cy="100" r="50" fill="none" stroke="#FFC526" strokeWidth="0.3" />
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1="100"
              y1="10"
              x2="100"
              y2="190"
              stroke="#FFC526"
              strokeWidth="0.2"
              transform={`rotate(${i * 30} 100 100)`}
            />
          ))}
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-gold-500/30 text-gold-400 bg-gold-500/5 mb-4">
            {t.qualifications.sectionTag}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            {t.qualifications.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t.qualifications.subtitle}
          </p>
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
                src="/assets/certificate_mockup_1776496466745.png"
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
