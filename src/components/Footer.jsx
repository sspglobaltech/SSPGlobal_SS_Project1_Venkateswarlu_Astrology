import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, Globe } from 'lucide-react';

export default function Footer({ onOpenWhatsAppModal }) {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.qualifications, href: '#qualifications' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.testimonials, href: '#testimonials' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const serviceLinks = [
    t.services.items[0].title,
    t.services.items[1].title,
    t.services.items[2].title,
    t.services.items[3].title,
    t.services.items[4].title,
    t.services.items[5].title,
  ];

  return (
    <footer className="relative bg-spiritual-dark">
      {/* Spiritual quote banner */}
      <div className="bg-gradient-to-r from-gold-500/5 via-saffron-500/10 to-gold-500/5 py-8">
        <p className="text-center font-decorative text-lg sm:text-xl text-gold-400/80 italic max-w-3xl mx-auto px-4">
          {t.footer.quote}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-11 h-11 rounded-full overflow-hidden flex items-center justify-center border border-gold-500/40 shadow-[0_0_15px_rgba(212,175,55,0.2)] shrink-0">
                <img src="/assets/acharya_logo.jpg" alt="Acharya Venkateswarlu Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="font-heading text-lg font-semibold gradient-text block">
                  {t.nav.brandName}
                </span>
                <span className="text-xs text-gold-400/60 tracking-widest uppercase">
                  {t.nav.brandSubtitle}
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-gold-400 mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-gold-400 text-sm transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="text-gold-500/30">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-gold-400 mb-4">
              {t.footer.services}
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((name, i) => (
                <li key={i}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-gold-400 text-sm transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="text-gold-500/30">›</span>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-gold-400 mb-4">
              {t.contact.sectionTag}
            </h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p className="flex items-start gap-2">
                <svg className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <a href="#" onClick={(e) => { e.preventDefault(); onOpenWhatsAppModal(); }} className="hover:text-gold-400 transition-colors">
                  {t.hero.cta2 || "Consult on WhatsApp"}
                </a>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                {t.contact.address}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 mt-8">
        <p className="text-sm text-gold-500/60 text-center max-w-4xl mx-auto leading-relaxed border border-gold-500/10 bg-gold-500/5 p-4 rounded-lg">
          <strong className="text-gold-400">{t.footer.disclaimerTitle}</strong>
          {t.footer.disclaimer}
        </p>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold-500/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="text-sm text-gray-500 text-center md:text-left mb-2 md:mb-0">
            {t.footer.copyright}
          </p>
          
          <div className="text-sm text-gray-500 flex flex-col items-center md:items-end space-y-2.5">
            <p className="text-center md:text-right">
              Website Designed & Developed by <strong className="text-gold-400 font-medium tracking-wide">SSP Global Software Solutions</strong> | Tirupati
            </p>
            <div className="flex items-center gap-4">
              <a href="tel:+919035011859" className="flex items-center gap-1.5 hover:text-gold-400 transition-colors group">
                <Phone className="w-4 h-4 text-gold-400 group-hover:text-gold-300" />
                <span className="font-medium tracking-wide">+91 90350 11859</span>
              </a>
              <span className="text-gold-500/30 text-xs">|</span>
              <a href="https://ssptechedu.com" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-gold-400 transition-colors group">
                <Globe className="w-4 h-4 text-gold-400 group-hover:text-gold-300" />
                <span className="font-medium tracking-wide">ssptechedu.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
