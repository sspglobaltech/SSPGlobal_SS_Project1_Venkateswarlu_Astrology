import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#qualifications', label: t.nav.qualifications },
    { href: '#services', label: t.nav.services },
    { href: '#testimonials', label: t.nav.testimonials },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-lg shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
      style={scrolled ? { backgroundColor: `${theme.bgDark}ee` } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center transition-transform group-hover:scale-110 border-2 border-gold-500/30 shadow-lg shadow-gold-500/10">
              <img src="/assets/acharya_logo.jpg" alt="Acharya Venkateswarlu Logo" className="w-full h-full object-cover" />
            </div>
            <div className="hidden sm:block">
              <span className="font-heading text-lg font-bold text-[#FFC526]">
                {t.nav.brandName}
              </span>
              <span className="block text-xs tracking-widest uppercase" style={{ color: `${theme.textPrimary}99` }}>
                {t.nav.brandSubtitle}
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm transition-colors duration-300 relative group"
                style={{ color: theme.isLight ? '#555' : '#d1d5db' }}
                onMouseEnter={(e) => e.target.style.color = theme.textPrimary}
                onMouseLeave={(e) => e.target.style.color = theme.isLight ? '#555' : '#d1d5db'}
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-3/4 rounded-full"
                  style={{ background: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})` }}
                />
              </a>
            ))}
          </div>

          {/* Right section */}
          <div className="flex items-center gap-3">
            {/* Premium Sliding Language Toggle */}
            <button
              id="language-toggle"
              onClick={toggleLanguage}
              className="relative flex items-center p-1 rounded-full bg-[#0a0f25] border cursor-pointer hover:shadow-[0_0_15px_rgba(255,197,38,0.15)] transition-shadow duration-300"
              style={{ borderColor: `rgba(${theme.primaryRgb}, 0.2)` }}
              title="Toggle Language"
            >
              {/* Sliding Gold Background */}
              <div 
                className="absolute top-1 bottom-1 w-[38px] rounded-full transition-transform duration-400 ease-out"
                style={{
                  background: theme.buttonBg,
                  transform: language === 'en' ? 'translateX(0)' : 'translateX(38px)',
                  boxShadow: `0 0 10px ${theme.glowColor}`
                }}
              />
              
              <span className={`relative z-10 w-[38px] text-center text-[11px] font-bold transition-colors duration-300 tracking-wider uppercase ${language === 'en' ? 'text-[#0A0A1A]' : 'text-[#D4AF37]/50 hover:text-[#D4AF37]'}`}>
                EN
              </span>
              <span className={`relative z-10 w-[38px] text-center text-[13px] font-bold transition-colors duration-300 tracking-wider ${language === 'te' ? 'text-[#0A0A1A]' : 'text-[#D4AF37]/50 hover:text-[#D4AF37]'}`}>
                తె
              </span>
            </button>

            {/* Book Now CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-flex glow-button text-sm !px-5 !py-2.5"
            >
              {t.nav.bookNow}
            </a>

            {/* Mobile menu button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 transition-colors"
              style={{ color: theme.textPrimary }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            mobileOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <div className="glass-card rounded-2xl p-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 hover:bg-white/5 rounded-xl transition-all duration-300"
                style={{ color: theme.isLight ? '#555' : '#d1d5db' }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center glow-button mt-3 !py-3 text-sm"
            >
              {t.nav.bookNow}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
