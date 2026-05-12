import { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Attempt to play a subtle sine wave as a temple bell substitute
    // (May be blocked by browser autoplay policy, but we try)
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        const ctx = new AudioContext();
        if (ctx.state === 'running') {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(880, ctx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 2);
          gain.gain.setValueAtTime(0, ctx.currentTime);
          gain.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 0.1);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 3);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          osc.stop(ctx.currentTime + 3);
        }
      }
    } catch (e) {
      // Ignore audio errors
    }

    // Start fade out after 3.5 seconds
    const timer = setTimeout(() => {
      setIsFading(true);
      // Unmount after 1.5s fade out
      setTimeout(() => {
        onComplete();
      }, 1500); 
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  // Generate particles
  const particles = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 2}s`,
    animationDuration: `${3 + Math.random() * 4}s`,
    opacity: Math.random() * 0.4 + 0.1,
    size: Math.random() * 3 + 1,
  }));

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden transition-all duration-[1500ms] ease-in-out ${
        isFading ? 'opacity-0 pointer-events-none scale-105 blur-sm' : 'opacity-100 scale-100 blur-0'
      }`}
      style={{
        background: 'linear-gradient(135deg, #380814 0%, #1a0206 50%, #0a0102 100%)',
      }}
    >
      {/* Background radial soft light */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[80vh] h-[80vh] rounded-full bg-gold-500/10 blur-[120px] animate-pulse-slow"></div>
      </div>

      {/* Particles */}
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute rounded-full bg-gold-400 blur-[1px] animate-float-particle pointer-events-none"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDelay: p.animationDelay,
            animationDuration: p.animationDuration,
          }}
        />
      ))}

      {/* Main Logo Container */}
      <div className="relative z-10 flex flex-col items-center">
        <div 
          className="relative animate-logo-flip will-change-transform" 
          style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', WebkitFontSmoothing: 'antialiased' }}
        >
          {/* Subtle divine light pulse from center */}
          <div className="absolute inset-0 rounded-full bg-gold-300/20 blur-[40px] animate-divine-pulse scale-150"></div>
          
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full p-[2px] bg-gradient-to-br from-gold-300 via-gold-500 to-gold-700 shadow-[0_0_50px_rgba(212,175,55,0.4)] animate-rim-glow">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#380814] relative">
               {/* Small golden light sweep */}
               <div className="absolute inset-0 z-20 animate-light-sweep bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 pointer-events-none"></div>
               <img 
                 src="/assets/acharya_logo.jpg" 
                 alt="Astrologer Venkateswarlu Loading" 
                 className="w-full h-full object-cover relative z-10"
                 style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
               />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
