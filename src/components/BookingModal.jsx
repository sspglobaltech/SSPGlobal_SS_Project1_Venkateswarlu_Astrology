import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function BookingModal({ isOpen, onClose }) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', phone: '', query: '' });
  const [errors, setErrors] = useState({ name: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

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
      const url = new URL(scriptUrl);
      url.searchParams.append('Name', formData.name);
      url.searchParams.append('Phone', formData.phone);
      url.searchParams.append('Query', formData.query);
      
      await fetch(url.toString(), {
        method: 'GET',
        mode: 'no-cors',
      });
      
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', phone: '', query: '' });
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Error connecting to database:', error);
      alert('There was an error connecting to the database. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 sm:px-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#02040A]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(255,255,255,0.15)] rounded-[32px] p-8 animate-slide-up overflow-hidden">
        
        {/* Premium Om Loading Overlay */}
        {isSubmitting && (
          <div className="absolute inset-0 z-50 backdrop-blur-xl bg-[#02040A]/85 flex flex-col items-center justify-center transition-all duration-500">
            <div className="relative flex items-center justify-center w-56 h-56">
              {/* Core glow */}
              <div className="absolute inset-0 bg-gold-500/20 rounded-full blur-[50px] animate-pulse"></div>
              
              <svg viewBox="0 0 100 100" className="w-full h-full relative z-10 drop-shadow-[0_0_20px_rgba(212,175,55,0.8)]">
                <defs>
                  <linearGradient id="premium-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FDE047" />
                    <stop offset="25%" stopColor="#D4AF37" />
                    <stop offset="50%" stopColor="#FFF7D6" />
                    <stop offset="75%" stopColor="#AA7C11" />
                    <stop offset="100%" stopColor="#E6C252" />
                  </linearGradient>
                  <filter id="premium-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
                
                {/* Spinning Mandala Rings */}
                <circle cx="50" cy="50" r="46" fill="none" stroke="url(#premium-gold)" strokeWidth="0.5" strokeDasharray="1 3" className="origin-center animate-[spin_20s_linear_infinite]" opacity="0.6" />
                <circle cx="50" cy="50" r="42" fill="none" stroke="url(#premium-gold)" strokeWidth="1.5" strokeDasharray="12 6 2 6" className="origin-center animate-[spin_15s_linear_infinite_reverse]" opacity="0.8" />
                <circle cx="50" cy="50" r="37" fill="none" stroke="url(#premium-gold)" strokeWidth="0.5" strokeDasharray="20 10" className="origin-center animate-[spin_25s_linear_infinite]" opacity="0.5" />
                
                {/* The Golden Om */}
                <text 
                  x="50" 
                  y="68" 
                  fontFamily="Georgia, serif" 
                  fontSize="48" 
                  fontWeight="bold"
                  textAnchor="middle" 
                  fill="url(#premium-gold)" 
                  filter="url(#premium-glow)"
                  className="animate-pulse"
                >
                  ॐ
                </text>
              </svg>
            </div>
            <p className="mt-6 font-heading text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200 text-lg tracking-[0.3em] animate-pulse">
              DIVINE CONNECTION...
            </p>
          </div>
        )}

        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 mb-2">
          {t.nav.bookNow}
        </h2>
        <p className="text-sm text-gray-300 mb-6">
          {t.contact.offerText}
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">{t.contact.nameLabel}</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder={t.contact.namePlaceholder}
              className={`w-full px-5 py-3.5 rounded-xl bg-white/5 backdrop-blur-md border ${errors.name ? 'border-red-500/80 focus:border-red-500' : 'border-white/20 focus:border-gold-400'} text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500/30 transition-all shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)]`}
            />
            {errors.name && <p className="text-red-400 text-xs mt-1.5 ml-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">{t.contact.phoneLabel}</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder={t.contact.phonePlaceholder}
              className={`w-full px-5 py-3.5 rounded-xl bg-white/5 backdrop-blur-md border ${errors.phone ? 'border-red-500/80 focus:border-red-500' : 'border-white/20 focus:border-gold-400'} text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500/30 transition-all shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)]`}
            />
            {errors.phone && <p className="text-red-400 text-xs mt-1.5 ml-1">{errors.phone}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">Query</label>
            <textarea
              name="query"
              required
              rows={3}
              value={formData.query}
              onChange={handleChange}
              placeholder={t.contact.messagePlaceholder}
              className="w-full px-5 py-3.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-500/30 transition-all shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)] resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full glow-button text-base !py-3.5 mt-2"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {isSubmitting ? "Sending..." : submitted ? "Sent!" : "Book Consultation"}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
