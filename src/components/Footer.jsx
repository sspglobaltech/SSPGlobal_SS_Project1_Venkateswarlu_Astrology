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
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z', name: 'Twitter' },
                { icon: 'M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z', name: 'Facebook' },
                { icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z', name: 'Instagram' },
                { icon: 'M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z', name: 'YouTube' },
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-gold-500/10 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-500/30 hover:bg-gold-500/5 transition-all duration-300"
                  aria-label={social.name}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
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
