import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeading from './SectionHeading';

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
          <SectionHeading 
            title={t.qualifications.title} 
            subtitle={t.qualifications.sectionTag} 
          />
          
          <p className="mx-auto max-w-2xl text-lg sm:text-xl leading-8 text-white/80 font-light drop-shadow-sm mt-4">
            {t.qualifications.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {t.qualifications.items.map((item, i) => (
            <div key={i} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-[320px] lg:max-w-none">
              <QualificationCard item={item} index={i} onClick={() => setSelectedCert(item)} />
            </div>
          ))}
        </div>
      </div>

      {/* Hidden preloader for certificates to remove loading lag */}
      <div className="hidden">
        {t.qualifications.items.map((item, i) => (
          <img key={`preload-${i}`} src={item.certificateImage || "/assets/certificate_mockup_1776496466745.png"} alt="" />
        ))}
      </div>

      {selectedCert && (
        <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
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
        <div className="qualification-card-inner flex-1 w-full relative flex flex-col items-center justify-start rounded-2xl px-8 pt-10 pb-8">
          <QualificationCertifiedBadge />

          <div className="mb-6 transition-transform duration-300 group-hover:scale-110 relative z-10">
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

function CertificateModal({ cert, onClose }) {
  const [scale, setScale] = useState(1);
  const [isFitToScreen, setIsFitToScreen] = useState(true);

  const handleZoomIn = () => {
    setScale(prev => Math.min(3, prev + 0.25));
    setIsFitToScreen(false);
  };
  
  const handleZoomOut = () => {
    setScale(prev => Math.max(0.5, prev - 0.25));
    setIsFitToScreen(false);
  };
  
  const handleReset = () => {
    setScale(1);
    setIsFitToScreen(false);
  };
  
  const handleFitToScreen = () => {
    setScale(1);
    setIsFitToScreen(true);
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center transition-opacity" 
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
      onClick={onClose}
    >
      {/* Scrollable Modal Container */}
      <div className="w-full h-full overflow-auto flex items-start justify-center p-2 sm:p-4 pb-28 custom-scrollbar touch-pan-x touch-pan-y" onClick={onClose}>
        
        {/* Frame Design */}
        <div 
          className="relative w-auto bg-spiritual-dark border border-gold-500/30 rounded-2xl shadow-2xl p-4 sm:p-8 text-center transition-transform duration-300 origin-top mt-8 sm:mt-12 flex flex-col" 
          onClick={(e) => e.stopPropagation()}
          style={{ 
            transform: `scale(${scale})`,
            ...(isFitToScreen ? { maxHeight: '85vh', maxWidth: '90vw' } : { maxWidth: 'none' })
          }}
        >
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-50 text-gray-400 hover:text-gold-400 bg-black/40 hover:bg-black/60 p-2 rounded-full backdrop-blur-md transition-all border border-white/10"
            onClick={onClose}
            title="Close"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Header */}
          <div className="mb-4 sm:mb-6 mt-4 sm:mt-0 flex-shrink-0">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-gold-300">{cert.title}</h3>
            <p className="text-gray-400 text-sm sm:text-base">{cert.issuer}</p>
          </div>

          {/* Image Container with Original Styling */}
          <div className="relative mx-auto rounded-xl border-4 border-gold-500/20 shadow-inner overflow-hidden bg-spiritual-slate/50 flex items-center justify-center flex-1">
            <img
              src={cert.certificateImage || "/assets/certificate_mockup_1776496466745.png"}
              alt={`${cert.title} Certificate`}
              style={isFitToScreen ? {
                maxHeight: '100%',
                maxWidth: '100%',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain'
              } : {
                maxHeight: 'none',
                maxWidth: 'none',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain'
              }}
              className="min-h-[200px]"
            />
          </div>
        </div>
      </div>

      {/* Zoom Controls */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[110] flex items-center gap-2 sm:gap-4 px-3 sm:px-6 py-2 sm:py-3 bg-black/70 backdrop-blur-md border border-white/10 rounded-full shadow-2xl text-xs sm:text-sm" onClick={e => e.stopPropagation()}>
        <button onClick={handleZoomIn} className="text-white hover:text-gold-400 px-1 sm:px-2 py-1 transition-colors flex items-center gap-1">➕<span className="hidden sm:inline"> Zoom In</span></button>
        <div className="w-px h-4 bg-white/20"></div>
        <button onClick={handleZoomOut} className="text-white hover:text-gold-400 px-1 sm:px-2 py-1 transition-colors flex items-center gap-1">➖<span className="hidden sm:inline"> Zoom Out</span></button>
        <div className="w-px h-4 bg-white/20"></div>
        <button onClick={handleReset} className="text-white hover:text-gold-400 px-1 sm:px-2 py-1 transition-colors flex items-center gap-1">🔄<span className="hidden sm:inline"> Reset</span></button>
        <div className="w-px h-4 bg-white/20"></div>
        <button onClick={handleFitToScreen} className={`px-1 sm:px-2 py-1 transition-colors flex items-center gap-1 ${isFitToScreen ? 'text-gold-400' : 'text-white hover:text-gold-400'}`}>🔍<span className="hidden sm:inline"> Fit to Screen</span></button>
      </div>
    </div>
  );
}
