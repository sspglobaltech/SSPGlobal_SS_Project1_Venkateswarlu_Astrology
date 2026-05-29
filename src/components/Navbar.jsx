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
      className={`fixed left-0 right-0 z-[100] mx-4 sm:mx-6 lg:mx-auto max-w-7xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] border ${
        scrolled
          ? 'top-4 py-2 rounded-full border-gold-500/40 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.7),0_0_20px_rgba(212,175,55,0.2)]'
          : 'top-6 py-4 rounded-[2.5rem] border-gold-500/20 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5),0_0_15px_rgba(212,175,55,0.1)]'
      }`}
      style={{
        background: scrolled ? 'rgba(5, 8, 22, 0.65)' : 'rgba(5, 8, 22, 0.45)',
        backdropFilter: scrolled ? 'blur(24px)' : 'blur(20px)',
        WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'blur(20px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group relative">
            <div className="absolute inset-0 bg-gold-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 border border-gold-500/40 group-hover:border-gold-400 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
              <img src="/assets/acharya_logo.jpg" alt="Acharya Venkateswarlu Logo" className="w-full h-full object-cover" />
            </div>
            <div className="hidden sm:block transition-all duration-500 group-hover:translate-x-1">
              <span className="font-heading text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300 drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)] tracking-wide">
                {t.nav.brandName}
              </span>
              <span className="block text-[10px] tracking-[0.2em] uppercase text-gray-400 group-hover:text-gold-200/80 transition-colors duration-500">
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
                className="px-4 py-2 text-[15px] font-body tracking-wide transition-all duration-500 relative group text-[#FAFAFA] hover:text-gold-300 hover:-translate-y-0.5 drop-shadow-sm"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-3/4 rounded-full bg-gradient-to-r from-transparent via-gold-400 to-transparent shadow-[0_0_10px_rgba(212,175,55,0.8)] opacity-0 group-hover:opacity-100" />
              </a>
            ))}
          </div>

          {/* Right section */}
          <div className="flex items-center gap-3">
            {/* Premium Sliding Language Toggle */}
            <button
              id="language-toggle"
              onClick={toggleLanguage}
              className="relative flex items-center p-1 rounded-full bg-[rgba(5,8,22,0.6)] border border-gold-500/30 hover:border-gold-400 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-500 backdrop-blur-md cursor-pointer"
              title="Toggle Language"
            >
              {/* Sliding Gold Background */}
              <div 
                className="absolute top-1 bottom-1 w-[38px] rounded-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] bg-gradient-to-r from-gold-400 to-gold-500"
                style={{
                  transform: language === 'en' ? 'translateX(0)' : 'translateX(38px)',
                  boxShadow: '0 0 15px rgba(212,175,55,0.4)'
                }}
              />
              
              <span className={`relative z-10 w-[38px] text-center text-[11px] font-bold transition-colors duration-300 tracking-wider uppercase ${language === 'en' ? 'text-[#02040A]' : 'text-gray-300 hover:text-white'}`}>
                EN
              </span>
              <span className={`relative z-10 w-[38px] text-center text-[13px] font-bold transition-colors duration-300 tracking-wider ${language === 'te' ? 'text-[#02040A]' : 'text-gray-300 hover:text-white'}`}>
                తె
              </span>
            </button>

            {/* Book Now CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-flex relative group overflow-hidden px-6 py-2.5 rounded-full font-heading font-bold text-sm tracking-wide text-[#02040A] bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 shadow-[0_4px_15px_rgba(212,175,55,0.4)] hover:shadow-[0_8px_25px_rgba(212,175,55,0.6)] transition-all duration-500 hover:-translate-y-0.5 border border-white/20 hover:border-white/50"
            >
              <span className="relative z-10">{t.nav.bookNow}</span>
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 transition-all" />
            </a>

            {/* Mobile menu button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-full border border-gold-500/20 text-gold-400 hover:bg-gold-500/10 hover:border-gold-500/40 transition-all duration-300"
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
          className={`lg:hidden overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-[rgba(5,8,22,0.8)] backdrop-blur-3xl rounded-[2rem] p-5 space-y-1 border border-gold-500/30 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.7)]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 hover:bg-gold-500/10 hover:text-gold-300 rounded-xl transition-all duration-300 text-gray-200 font-body tracking-wide font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center mt-4 w-full relative group overflow-hidden px-6 py-3 rounded-xl font-heading font-bold tracking-wide text-[#02040A] bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 shadow-[0_4px_15px_rgba(212,175,55,0.4)]"
            >
              <span className="relative z-10">{t.nav.bookNow}</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
