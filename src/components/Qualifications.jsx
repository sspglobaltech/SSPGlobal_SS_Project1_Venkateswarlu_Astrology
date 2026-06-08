import { useState, useRef } from 'react';
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
          className={`mx-auto mb-16 max-w-4xl text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
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
              <QualificationCard item={item} index={i} onOpenModal={() => setSelectedCert(item)} />
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

function QualificationCard({ item, index, onOpenModal }) {
  const [cardRef, isVisible] = useScrollAnimation(0.1);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleViewClick = (e) => {
    e.stopPropagation();
    onOpenModal(item);
  };

  return (
    <div
      ref={cardRef}
      className={`group h-full w-full min-h-[340px] transition-all duration-700 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      style={{ transitionDelay: `${index * 100}ms`, perspective: '1200px' }}
      onClick={handleCardClick}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className="relative h-full w-full text-center transition-transform duration-[800ms] ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:-translate-y-2 sm:hover:scale-[1.02] hover:shadow-[0_15px_50px_rgba(212,175,55,0.18),0_0_35px_rgba(212,175,55,0.12)] hover:z-20 rounded-2xl"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* Front Face */}
        <div 
          className={`absolute inset-0 w-full h-full flex flex-col items-center justify-start rounded-2xl px-6 pt-10 pb-12 bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] transition-opacity duration-300 ${isFlipped ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          {/* Inner Golden Boundary */}
          <div className="absolute inset-2 border border-[#D4AF37]/50 rounded-xl pointer-events-none" />

          <QualificationCertifiedBadge />

          <div className="mb-6 transition-transform duration-300 sm:group-hover:scale-110 relative z-10">
            <QualificationIconBadge icon={item.icon} />
          </div>

          <h3 className="qualification-card-title text-[#D4AF37] font-serif font-semibold text-lg tracking-wide mb-4 whitespace-pre-line">
            {item.title}
          </h3>

          <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto mb-4" />

          <p className="text-white/80 text-xs tracking-widest uppercase mb-4">
            {item.issuer}
          </p>

          <div className="absolute bottom-6 left-0 w-full opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-[#D4AF37] text-sm font-light tracking-wide">📜 Click to View Certificate</span>
          </div>
        </div>

        {/* Back Face */}
        <div 
          className={`absolute inset-0 w-full h-full rounded-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] overflow-hidden flex flex-col items-center justify-between py-6 px-4 bg-white/10 backdrop-blur-xl transition-opacity duration-300 ${isFlipped ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          style={{ 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)' 
          }}
        >
          {/* Inner Golden Boundary */}
          <div className="absolute inset-2 border border-[#D4AF37]/50 rounded-xl pointer-events-none z-0" />

          {/* Subtle glow behind certificate */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)] pointer-events-none" />

          <div className="flex-1 w-full flex flex-col items-center justify-center relative z-10">
            {/* Small framed certificate image */}
            <div className="w-full h-[130px] flex-shrink-0 border border-[#D4AF37]/40 p-1.5 rounded-md mb-4 bg-white/5 backdrop-blur-sm shadow-inner flex items-center justify-center overflow-hidden">
              <img
                src={item.certificateImage || "/assets/certificate_mockup_1776496466745.png"}
                alt="Certificate"
                className="w-full h-full object-contain drop-shadow-md opacity-90 select-none"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>

            <h4 className="text-[#D4AF37] font-serif font-semibold text-sm mb-1 tracking-wide leading-tight px-2 text-center line-clamp-2 whitespace-pre-line">
              {item.title}
            </h4>
            <p className="text-white/80 text-[10px] tracking-wider uppercase text-center px-2 line-clamp-2">
              {item.issuer}
            </p>
          </div>

          <button
            onClick={handleViewClick}
            className="relative z-20 mt-3 px-5 py-2 rounded-full bg-[rgba(212,175,55,0.1)] border border-[#D4AF37]/60 text-[#D4AF37] text-xs font-medium tracking-wide hover:bg-[#D4AF37] hover:text-[#050B1E] transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] flex items-center justify-center gap-2 w-full max-w-[200px]"
          >
            <span>🔍 View Full Certificate</span>
          </button>
        </div>

      </div>
    </div>
  );
}

function CertificateModal({ cert, onClose }) {
  const [scale, setScale] = useState(1);
  const [isFitToScreen, setIsFitToScreen] = useState(true);

  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({ isDown: false, startX: 0, startY: 0, scrollLeft: 0, scrollTop: 0, hasDragged: false });

  const handleZoomIn = () => {
    setScale(prev => Math.min(4, prev + 0.5));
    setIsFitToScreen(false);
  };

  const handleZoomOut = () => {
    setScale(prev => {
      const newScale = Math.max(0.5, prev - 0.5);
      if (newScale <= 1) {
        setIsFitToScreen(true);
        return 1;
      }
      return newScale;
    });
  };

  const handleFitToScreen = () => {
    setScale(1);
    setIsFitToScreen(true);
  };

  const handlePointerDown = (e) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    const clientX = e.type.includes('touch') ? e.touches[0].pageX : e.pageX;
    const clientY = e.type.includes('touch') ? e.touches[0].pageY : e.pageY;

    dragState.current = {
      isDown: true,
      startX: clientX - scrollContainerRef.current.offsetLeft,
      startY: clientY - scrollContainerRef.current.offsetTop,
      scrollLeft: scrollContainerRef.current.scrollLeft,
      scrollTop: scrollContainerRef.current.scrollTop,
      hasDragged: false
    };
  };

  const handlePointerUpOrLeave = () => {
    setIsDragging(false);
    dragState.current.isDown = false;
  };

  const handlePointerMove = (e) => {
    if (!dragState.current.isDown || !scrollContainerRef.current) return;
    dragState.current.hasDragged = true;
    const clientX = e.type.includes('touch') ? e.touches[0].pageX : e.pageX;
    const clientY = e.type.includes('touch') ? e.touches[0].pageY : e.pageY;

    const x = clientX - scrollContainerRef.current.offsetLeft;
    const y = clientY - scrollContainerRef.current.offsetTop;
    const walkX = (x - dragState.current.startX) * 1.5;
    const walkY = (y - dragState.current.startY) * 1.5;
    scrollContainerRef.current.scrollLeft = dragState.current.scrollLeft - walkX;
    scrollContainerRef.current.scrollTop = dragState.current.scrollTop - walkY;
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 select-none"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl h-full max-h-[90vh] bg-spiritual-dark border border-gold-500/30 rounded-2xl shadow-2xl p-4 sm:p-8 flex flex-col mx-auto transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
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
        <div className="mb-4 sm:mb-6 flex-shrink-0 text-center pr-8 sm:pr-0">
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-gold-300">{cert.title}</h3>
          <p className="text-gray-400 text-sm sm:text-base">{cert.issuer}</p>
        </div>

        {/* Scrollable Image Container */}
        <div
          ref={scrollContainerRef}
          className={`relative w-full flex-1 rounded-xl border border-gold-500/20 shadow-inner bg-spiritual-slate/30 overflow-auto custom-scrollbar flex ${isFitToScreen ? 'items-center justify-center' : 'items-start justify-start'} ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          onMouseDown={handlePointerDown}
          onMouseLeave={handlePointerUpOrLeave}
          onMouseUp={handlePointerUpOrLeave}
          onMouseMove={handlePointerMove}
          onTouchStart={handlePointerDown}
          onTouchEnd={handlePointerUpOrLeave}
          onTouchMove={handlePointerMove}
        >
          <img
            src={cert.certificateImage || "/assets/certificate_mockup_1776496466745.png"}
            alt={`${cert.title} Certificate`}
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            className="select-none transition-all duration-300 ease-out origin-top-left"
            style={isFitToScreen ? {
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            } : {
              width: `${1200 * scale}px`,
              maxWidth: 'none',
              height: 'auto',
              minHeight: '100%',
              objectFit: 'contain'
            }}
          />
        </div>

        {/* Zoom Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[110] flex items-center gap-2 sm:gap-4 px-3 sm:px-6 py-2 sm:py-3 bg-black/80 backdrop-blur-md border border-gold-500/30 rounded-full shadow-2xl text-xs sm:text-sm">
          <button onClick={handleZoomIn} className="text-white hover:text-gold-400 px-1 sm:px-2 py-1 transition-colors flex items-center gap-1" title="Zoom In">➕<span className="hidden sm:inline"> Zoom In</span></button>
          <div className="w-px h-4 bg-white/20"></div>
          <button onClick={handleZoomOut} className="text-white hover:text-gold-400 px-1 sm:px-2 py-1 transition-colors flex items-center gap-1" title="Zoom Out">➖<span className="hidden sm:inline"> Zoom Out</span></button>
          <div className="w-px h-4 bg-white/20"></div>
          <button onClick={handleFitToScreen} className={`px-1 sm:px-2 py-1 transition-colors flex items-center gap-1 ${isFitToScreen ? 'text-gold-400' : 'text-white hover:text-gold-400'}`} title="Fit to Screen">🔍<span className="hidden sm:inline"> Fit to Screen</span></button>
        </div>
      </div>
    </div>
  );
}
