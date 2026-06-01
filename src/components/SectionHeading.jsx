import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const SectionHeading = ({ title, subtitle, titleEn, titleTe, subtitleEn, subtitleTe }) => {
  const { language } = useLanguage();

  const finalTitle = title || (language === 'en' ? titleEn : (titleTe || titleEn));
  const finalSubtitle = subtitle || (language === 'en' ? subtitleEn : (subtitleTe || subtitleEn));

  return (
    <div className="flex flex-col items-center w-full">
      {/* Subtitle Pill */}
      {finalSubtitle && (
        <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 backdrop-blur-sm">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#D4AF37]">
            {finalSubtitle}
          </span>
        </div>
      )}

      {/* Clean Title Container */}
      <div className="relative inline-flex items-center justify-center w-full px-4 my-2 sm:my-4">
        <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-b from-[#FFF4CC] via-[#D4AF37] to-[#8B6508] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-wide text-center whitespace-nowrap">
          {finalTitle}
        </h2>
      </div>
      
      {/* Elegant Divider Flourish beneath the heading */}
      <div className="flex items-center justify-center gap-3 w-full max-w-[280px] sm:max-w-[400px] mt-6 opacity-90">
        <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-[#D4AF37]/20" />
        {/* Center Diamond/Star */}
        <div className="relative flex items-center justify-center w-6 h-6">
          <div className="absolute w-4 h-4 rotate-45 border border-[#D4AF37] bg-[#07142A]"></div>
          <div className="absolute w-2 h-2 rotate-45 bg-[#D4AF37]"></div>
        </div>
        <div className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent via-[#D4AF37]/80 to-[#D4AF37]/20" />
      </div>
    </div>
  );
};

export default SectionHeading;
