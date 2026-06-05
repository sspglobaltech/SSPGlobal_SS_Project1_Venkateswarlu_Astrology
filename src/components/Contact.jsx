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

        <div className="grid lg:grid-cols-5 gap-10 lg:items-stretch">
          {/* Consultation Information Panel */}
          <div className="lg:col-span-2 gap-6 relative flex flex-col h-full">
            {/* Background Temple Silhouette */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-[24px]">
               {/* Optional temple silhouette image if available in assets, else just uses the gradient styling below */}
               <div className="absolute inset-0 bg-[url('/assets/temple_silhouette.png')] bg-cover bg-bottom opacity-5 mix-blend-screen" />
            </div>



            {/* CARD 2: Consultation Center */}
            <div className="relative z-10 p-6 sm:p-8 rounded-[24px] bg-[rgba(10,14,35,0.6)] backdrop-blur-[16px] border border-gold-500/20 shadow-[0_15px_40px_rgba(0,0,0,0.4),inset_0_0_20px_rgba(212,175,55,0.05)] hover:border-gold-500/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all duration-500 overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-[40px] -mr-10 -mt-10 group-hover:bg-gold-500/20 transition-all duration-700 pointer-events-none z-20" />
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-saffron-500 flex items-center justify-center text-[#02040A] shadow-[0_0_15px_rgba(212,175,55,0.5)]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl text-gold-300 font-bold tracking-wide">Consultation Center</h3>
              </div>
              
              <div className="ml-16">
                <p className="text-gray-200 font-medium text-base mb-1">Tirupati, Andhra Pradesh, India</p>
                <p className="text-gray-400 text-sm italic">Serving clients across India and Worldwide.</p>
              </div>
            </div>

            {/* CARD 3: Premium Map Card */}
            <div className="relative z-10 rounded-[24px] bg-[rgba(10,14,35,0.6)] backdrop-blur-[16px] border border-gold-500/20 p-2 shadow-[0_15px_40px_rgba(0,0,0,0.4)] hover:border-gold-500/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all duration-500 overflow-hidden group flex-1 flex flex-col min-h-[300px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-[40px] -mr-10 -mt-10 group-hover:bg-gold-500/20 transition-all duration-700 pointer-events-none z-20" />
              <div className="rounded-[18px] overflow-hidden relative flex-1 z-10">
                <iframe
                  title="Location"
                  src="https://maps.google.com/maps?q=Tirupati,+Andhra+Pradesh&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(100%) invert(95%) contrast(1.1) brightness(0.85) sepia(20%) hue-rotate(180deg)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105"
                ></iframe>
                <div className="absolute inset-0 bg-[#02040A]/30 pointer-events-none mix-blend-multiply" />
                <div className="absolute inset-0 bg-gold-500/5 pointer-events-none mix-blend-overlay" />
              </div>
              <a 
                href="https://maps.google.com/?q=Tirupati,Andhra+Pradesh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-gold-500/90 text-[#02040A] font-semibold text-xs tracking-wide shadow-[0_4px_15px_rgba(0,0,0,0.5)] backdrop-blur-md hover:bg-gold-400 hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
              >
                <span>Get Directions</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
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
                <svg className="w-5 h-5 text-gold-400 shrink-0 mt-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
