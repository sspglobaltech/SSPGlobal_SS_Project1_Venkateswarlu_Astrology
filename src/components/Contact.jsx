import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeading from './SectionHeading';

export default function Contact({ onOpenWhatsAppModal }) {
  const { t } = useLanguage();
  const [sectionRef, isVisible] = useScrollAnimation(0.1);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [errors, setErrors] = useState({ name: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    }
  };

  const validate = () => {
    let isValid = true;
    const newErrors = { name: '', phone: '' };

    if (!formData.name.trim() || formData.name.length < 3) {
      newErrors.name = 'Name must be at least 3 characters.';
      isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = 'Name can only contain letters and spaces.';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    
    try {
      const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
      if (scriptUrl) {
        const url = new URL(scriptUrl);
        url.searchParams.append('Name', formData.name);
        url.searchParams.append('Phone', formData.phone);
        url.searchParams.append('Query', formData.message);
        
        await fetch(url.toString(), {
          method: 'GET',
          mode: 'no-cors',
        });
      }
    } catch (error) {
      console.error('Error saving to sheets:', error);
    }
    
    setSubmitted(true);
    setIsSubmitting(false);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', message: '' });
    }, 3000);
  };

  const contactMethods = [

    {
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-gold-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      title: t.contact.whatsappText,
      value: t.contact.whatsappAction,
      href: '#',
      onClick: (e) => {
        e.preventDefault();
        onOpenWhatsAppModal();
      }
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
      href: 'https://maps.google.com/?q=Tirupati,Andhra+Pradesh',
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
          <SectionHeading 
            title={t.contact.title} 
            subtitle={t.contact.sectionTag} 
          />
          
          <p className="mx-auto max-w-2xl text-lg sm:text-xl leading-8 text-white/80 font-light drop-shadow-sm mt-4">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Methods */}
          <div className="lg:col-span-2 space-y-4">
            {contactMethods.map((method, i) => (
              <a
                key={i}
                href={method.href}
                onClick={method.onClick}
                target={method.href !== '#' && method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href !== '#' && method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-6 p-5 rounded-[24px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] hover:border-gold-500/60 hover:shadow-[0_20px_50px_-12px_rgba(212,175,55,0.4)] transition-all duration-500"
              >
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl bg-white/20 border border-white/30 group-hover:border-gold-400 group-hover:scale-110 transition-all duration-500 shadow-[0_4px_15px_rgba(0,0,0,0.1)] shrink-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-60" />
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
                src="https://maps.google.com/maps?q=Tirupati,+Andhra+Pradesh&output=embed"
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
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] rounded-[32px] p-8 space-y-6">
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
                  className={`w-full px-5 py-4 rounded-xl bg-white/5 backdrop-blur-md border ${errors.name ? 'border-red-500/80 focus:border-red-500' : 'border-white/20 focus:border-gold-400'} text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:bg-white/10 transition-all duration-300 shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)]`}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1.5 ml-1">{errors.name}</p>}
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
                  className={`w-full px-5 py-4 rounded-xl bg-white/5 backdrop-blur-md border ${errors.phone ? 'border-red-500/80 focus:border-red-500' : 'border-white/20 focus:border-gold-400'} text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:bg-white/10 transition-all duration-300 shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)]`}
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1.5 ml-1">{errors.phone}</p>}
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
                  className="w-full px-5 py-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:bg-white/10 transition-all duration-300 shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)] resize-none"
                />
              </div>

              {/* Special Offer Banner */}
              <div className="bg-gold-500/10 border border-gold-500/20 rounded-xl p-4 flex items-start gap-3 shadow-[inset_0_0_20px_rgba(212,175,55,0.05)] animate-pulse-slow">
                <svg className="w-6 h-6 text-gold-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm sm:text-base text-gray-200 leading-snug font-medium">
                  {t.contact.offerText}
                </p>
              </div>

              <button
                type="submit"
                id="contact-submit"
                disabled={isSubmitting}
                className="w-full glow-button text-lg !py-4"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    "Sending..."
                  ) : submitted ? (
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
