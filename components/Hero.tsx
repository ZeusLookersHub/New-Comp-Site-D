
import React from 'react';
import { Eye } from 'lucide-react';
import { useLanguage } from '../App';

const Hero: React.FC = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      tag: "Visionary Hub",
      headline: <>We See <br /><span className="italic gold-gradient bg-clip-text text-transparent">Differently.</span></>,
      subtext: <>“We are the <span className="text-white">Lookers</span> — the ones who observe, track details, and see patterns others miss. <br /> We turn that vision into smart digital products.”</>
    },
    ar: {
      tag: "مركز الرؤية",
      headline: <>نحن نرى ما <br /><span className="italic gold-gradient bg-clip-text text-transparent">لا يراه غيرنا</span></>,
      subtext: <>نحن «لوكرز»… <br /> نراقب التفاصيل، نحلّل المشهد كاملًا، <br /> ونحوّل الرؤية المختلفة إلى منتجات رقمية ذكية.</>
    }
  };

  const active = content[lang];

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#05070a]">
      {/* Background Visuals */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-gold/5 rounded-full blur-[150px] pointer-events-none opacity-40 animate-float"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[120px] pointer-events-none opacity-20 animate-float" style={{ animationDelay: '3s' }}></div>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#d4af37 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-gold/20 bg-gold/5 backdrop-blur-xl text-gold text-[10px] font-black uppercase tracking-[0.5em] mb-12">
          <Eye size={16} fill="currentColor" />
          <span>{active.tag}</span>
        </div>
        
        <h1 className="text-[12vw] md:text-[8.5rem] font-black text-white leading-[0.8] tracking-tighter mb-12">
          {active.headline}
        </h1>
        
        <p className="max-w-4xl mx-auto text-xl md:text-3xl text-gray-400 font-medium leading-tight tracking-tight">
          {active.subtext}
        </p>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#05070a] to-transparent"></div>
    </div>
  );
};

export default Hero;
