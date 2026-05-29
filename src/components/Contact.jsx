import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const { t } = useLanguage();
  const [sectionRef, isVisible] = useScrollAnimation(0.1);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build WhatsApp message
    const msg = `Name: ${formData.name}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/917799099069?text=${msg}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-gold-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
      title: t.contact.callText,
      value: t.contact.phone,
      href: `tel:${t.contact.phone.replace(/\s/g, '')}`,
    },
    {
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-gold-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      title: t.contact.whatsappText,
      value: t.contact.phone,
      href: 'https://wa.me/917799099069',
    },
    {
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-gold-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      title: t.contact.emailText,
      value: t.contact.email,
      href: `mailto:${t.contact.email}`,
    },
    {
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-gold-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      title: t.contact.locationText,
      value: t.contact.address,
      href: 'https://maps.google.com/?q=Hyderabad,Telangana',
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-[#02040A] via-[#050712] to-[#02040A]">
      {/* Premium Particles / Mandala Background Effect */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-spiritual-accent/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#02040A] via-[#050712]/70 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Section header */}
        <div
          ref={sectionRef}
          className={`mx-auto mb-16 max-w-4xl text-center transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <span className="inline-flex flex-col items-center justify-center gap-4 mb-6">
            <span className="px-6 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase border border-gold-500/40 text-gold-400 bg-gold-500/10 shadow-[0_0_20px_rgba(234,179,8,0.15)]">
              {t.contact.sectionTag}
            </span>
          </span>
          
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-tight tracking-wide mb-6">
            <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(234,179,8,0.3)]">
              {t.contact.title}
            </span>
          </h2>
          
          <p className="mx-auto max-w-2xl text-lg sm:text-xl leading-8 text-white/80 font-light drop-shadow-sm">
            {t.contact.subtitle}
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

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Methods */}
          <div className="lg:col-span-2 space-y-4">
            {contactMethods.map((method, i) => (
              <a
                key={i}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-6 p-5 rounded-2xl glass-card border border-gold-500/20 hover:border-gold-500/50 hover:shadow-[0_10px_30px_-10px_rgba(212,175,55,0.4)] transition-all duration-500"
              >
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl bg-[#0A1128]/80 border border-gold-500/30 group-hover:border-gold-400 group-hover:scale-110 transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.15)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] shrink-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 via-transparent to-transparent opacity-60" />
                  {method.icon}
                </div>
                <div className="flex-1">
                  <div className="text-xs sm:text-sm text-gray-300 uppercase tracking-widest font-semibold mb-1 group-hover:text-gold-300 transition-colors">{method.title}</div>
                  <div className="text-base sm:text-lg text-gold-400 font-bold tracking-wide break-all sm:break-normal drop-shadow-sm">{method.value}</div>
                </div>
              </a>
            ))}

            {/* Map placeholder */}
            <div className="rounded-xl overflow-hidden border border-gold-500/10 mt-6">
              <iframe
                title="Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3170479863!2d78.24323179640122!3d17.412608593492476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-300 mb-2">
                  {t.contact.nameLabel}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.contact.namePlaceholder}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-[#0A1128]/40 backdrop-blur-md border border-gold-500/20 text-white placeholder-gray-400 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:bg-[#0A1128]/60 transition-all duration-300 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]"
                />
              </div>

              <div>
                <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-300 mb-2">
                  {t.contact.phoneLabel}
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t.contact.phonePlaceholder}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-[#0A1128]/40 backdrop-blur-md border border-gold-500/20 text-white placeholder-gray-400 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:bg-[#0A1128]/60 transition-all duration-300 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-300 mb-2">
                  {t.contact.messageLabel}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact.messagePlaceholder}
                  rows={5}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-[#0A1128]/40 backdrop-blur-md border border-gold-500/20 text-white placeholder-gray-400 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:bg-[#0A1128]/60 transition-all duration-300 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] resize-none"
                />
              </div>

              <button
                type="submit"
                id="contact-submit"
                className="w-full glow-button text-lg !py-4"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {submitted ? (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Sent!
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      {t.contact.submitBtn}
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
