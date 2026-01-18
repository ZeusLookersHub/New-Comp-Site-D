
import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#05070a]">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#d4af37]/10 rounded-full blur-[150px] pointer-events-none opacity-40"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[150px] pointer-events-none opacity-30"></div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none brightness-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[#d4af37] text-[10px] font-extrabold uppercase tracking-[0.2em] mb-10 animate-fade-in shadow-xl">
            <Zap size={14} fill="currentColor" />
            <span>Built for the Next Generation</span>
          </div>
          
          <h1 className="text-7xl md:text-[9.5rem] font-extrabold text-white leading-[0.85] tracking-tighter mb-10 animate-fade-in drop-shadow-2xl">
            We See <br />
            <span className="text-transparent bg-clip-text gold-gradient italic">Differently.</span>
          </h1>
          
          <p className="max-w-xl text-xl md:text-2xl text-gray-400 mb-14 leading-tight font-medium tracking-tight animate-fade-in delay-100">
            We build, operate, and grow smart applications that define the digital edge. 
            <span className="text-white"> No fluff, just pure performance.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 animate-fade-in delay-200">
            <a 
              href="#contact" 
              className="group px-12 py-6 rounded-2xl gold-gradient text-[#05070a] font-black text-xl shadow-[0_20px_40px_rgba(212,175,55,0.25)] hover:shadow-[0_25px_50px_rgba(212,175,55,0.4)] transition-all duration-500 flex items-center gap-3 hover:-translate-y-1"
            >
              Start a Project
              <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-500" />
            </a>
            <a 
              href="#services" 
              className="px-12 py-6 rounded-2xl border-2 border-white/10 text-white font-bold text-xl hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
            >
              What we do
            </a>
          </div>
        </div>
      </div>

      {/* Abstract Tech Glow Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-20"></div>
    </div>
  );
};

export default Hero;
