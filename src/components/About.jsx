import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Award, Users, GraduationCap, ScrollText } from 'lucide-react';

export default function About() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="about" className="relative bg-[#071224] py-24 sm:py-32 overflow-hidden">
      {/* Background Depth Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1e3a8a]/10 via-[#0B132B]/5 to-transparent blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1e3a8a]/10 via-[#0B132B]/5 to-transparent blur-[120px]" />
        <div className="absolute inset-0 bg-[url('/images/pattern-overlay.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* SECTION HEADER */}
        <div 
          ref={sectionRef}
          className={`mx-auto mb-16 lg:mb-24 flex flex-col items-center text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 backdrop-blur-sm">
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#D4AF37]">
              Our Legacy
            </span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#D4AF37] mb-6 drop-shadow-sm">
            About Acharya Venkateswarlu
          </h2>
          
          <div className="flex items-center justify-center gap-4 w-full max-w-[200px]">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]/40" />
            <div className="w-2 h-2 rotate-45 border border-[#D4AF37]/60" />
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]/40" />
          </div>
        </div>

        {/* LAYOUT STRUCTURE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 flex flex-col h-full">
            {/* PORTRAIT */}
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] mb-12 h-[560px] lg:h-[580px]">
              <img
                src="/images/profile.jpg"
                alt="Acharya Venkateswarlu"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
              {/* Subtle inner shadow for premium feel */}
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(7,18,36,0.6)] pointer-events-none" />
            </div>

            {/* LEGACY STATISTICS */}
            <div className="flex flex-col gap-4 px-2 mt-auto">
              <div className="flex items-center justify-between pb-4 border-b border-white/5">
                <span className="text-2xl font-heading font-bold text-[#D4AF37]">15+</span>
                <span className="text-[11px] uppercase tracking-widest text-slate-400">Years Experience</span>
              </div>
              <div className="flex items-center justify-between pb-4 border-b border-white/5">
                <span className="text-2xl font-heading font-bold text-[#D4AF37]">10000+</span>
                <span className="text-[11px] uppercase tracking-widest text-slate-400">Consultations</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-heading font-bold text-[#D4AF37]">5000+</span>
                <span className="text-[11px] uppercase tracking-widest text-slate-400">Families Guided</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-7 flex flex-col h-full">
            {/* BIOGRAPHY CONTENT */}
            <div className="flex flex-col gap-8 mb-12 sm:mb-14">
              <p className="text-[#FDFBF3]/90 font-body text-[16px] sm:text-[17px] leading-[2.1] text-justify sm:text-left font-light tracking-wide">
                Astrology has been practiced in our family for <span className="font-heading font-bold tracking-wider bg-gradient-to-b from-[#FFF4CC] via-[#D4AF37] to-[#8B6508] bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] antialiased">generations</span>, passed down from our revered ancestors and forefathers. This sacred knowledge of <span className="font-heading font-bold tracking-wider bg-gradient-to-b from-[#FFF4CC] via-[#D4AF37] to-[#8B6508] bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] antialiased">Jyotisha Shastra</span> has been preserved and refined through each generation, combining the <span className="font-heading font-bold tracking-wider bg-gradient-to-b from-[#FFF4CC] via-[#D4AF37] to-[#8B6508] bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] antialiased">timeless wisdom of Vedic astrology</span> with modern analytical approaches.
              </p>

              <p className="text-[#FDFBF3]/90 font-body text-[16px] sm:text-[17px] leading-[2.1] text-justify sm:text-left font-light tracking-wide">
                With over <span className="font-heading font-bold tracking-wider bg-gradient-to-b from-[#FFF4CC] via-[#D4AF37] to-[#8B6508] bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] antialiased">15 years of dedicated practice</span>, Astrologer Acharya Venkateswarlu has guided <span className="font-heading font-bold tracking-wider bg-gradient-to-b from-[#FFF4CC] via-[#D4AF37] to-[#8B6508] bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] antialiased">thousands of families</span> and individuals through life's most important decisions — from <span className="font-heading font-bold tracking-wider bg-gradient-to-b from-[#FFF4CC] via-[#D4AF37] to-[#8B6508] bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] antialiased">marriage compatibility</span> and career choices to resolving <span className="font-heading font-bold tracking-wider bg-gradient-to-b from-[#FFF4CC] via-[#D4AF37] to-[#8B6508] bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] antialiased">planetary doshas</span> and <span className="font-heading font-bold tracking-wider bg-gradient-to-b from-[#FFF4CC] via-[#D4AF37] to-[#8B6508] bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] antialiased">vastu consultations</span>.
              </p>
            </div>

            {/* TRUST INDICATOR GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-16">
              {[
                { icon: Award, text: "15+ Years of Experience" },
                { icon: Users, text: "Trusted by Families" },
                { icon: GraduationCap, text: "Traditional & Scientific" },
                { icon: ScrollText, text: "Hereditary Lineage" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="group flex items-center gap-3 p-3.5 rounded-xl bg-[#0F172A]/30 backdrop-blur-md border border-white/5 hover:bg-[#071224]/60 hover:border-[#D4AF37]/50 hover:-translate-y-1 transition-all duration-500 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_30px_-10px_rgba(212,175,55,0.4)] relative overflow-hidden"
                >
                  {/* Subtle hover gradient sweep inside tile */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
                  
                  <div className="relative p-2 rounded-lg bg-[#071224]/80 border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/80 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.35)] shrink-0 transition-all duration-300 z-10">
                    <item.icon className="w-5 h-5 text-[#D4AF37] opacity-80 group-hover:opacity-100 transition-all duration-300" strokeWidth={1.5} />
                  </div>
                  <span className="relative text-[13px] font-medium text-slate-200 tracking-wide group-hover:text-[#D4AF37] group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.4)] transition-all duration-300 z-10">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* SIGNATURE PROFILE IDENTITY BLOCK */}
            <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-start gap-5 sm:gap-6">
              {/* Profile Image (Left) */}
              <div className="w-20 h-20 sm:w-[90px] sm:h-[90px] rounded-full overflow-hidden border-[1.5px] border-[#D4AF37]/40 shadow-[0_8px_25px_-5px_rgba(0,0,0,0.6)] shrink-0">
                <img 
                  src="/images/venkateswarlu-formal.jpg" 
                  alt="Acharya Venkateswarlu" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Text Block (Right) */}
              <div className="flex flex-col text-left">
                <span className="font-heading text-xl sm:text-[22px] font-medium text-[#D4AF37] tracking-[0.05em] mb-1.5">
                  ACHARYA VENKATESWARLU
                </span>
                <span className="font-body text-[10px] sm:text-xs uppercase tracking-[0.2em] text-slate-400 font-medium">
                  Hereditary Astrologer <span className="text-white/20 mx-1">|</span> Jyotisha Acharya
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
