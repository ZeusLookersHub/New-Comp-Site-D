
import React from 'react';
import { Target, Compass } from 'lucide-react';
// Fixed: import useLanguage from LanguageContext instead of App
import { useLanguage } from '../LanguageContext';

const VisionMission: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-32 bg-[#0a0c12] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision Block */}
          <div className="p-12 md:p-20 rounded-[4rem] bg-[#05070a] border border-white/5 hover:border-[#E6C15A]/20 transition-all duration-700 group">
            <div className="w-16 h-16 rounded-2xl bg-[#E6C15A]/10 flex items-center justify-center text-[#E6C15A] mb-10 group-hover:rotate-12 transition-transform">
              <Compass size={40} />
            </div>
            <h5 className={`text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase ${lang === 'ar' ? 'font-arabic' : ''}`}>
              {lang === 'en' ? 'Vision' : 'الرؤية'}
            </h5>
            <p className={`text-xl md:text-2xl text-[#B8BDC4] leading-tight font-bold tracking-tight ${lang === 'ar' ? 'font-arabic' : ''}`}>
              {lang === 'en' 
                ? 'To lead with vision — building smarter digital experiences for the next generation.'
                : 'أن نقود المستقبل برؤية أوضح، ونبني تجارب رقمية أذكى للجيل القادم.'}
            </p>
          </div>

          {/* Mission Block */}
          <div className="p-12 md:p-20 rounded-[4rem] bg-[#05070a] border border-white/5 hover:border-[#E6C15A]/20 transition-all duration-700 group">
            <div className="w-16 h-16 rounded-2xl bg-[#E6C15A]/10 flex items-center justify-center text-[#E6C15A] mb-10 group-hover:-rotate-12 transition-transform">
              <Target size={40} />
            </div>
            <h5 className={`text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase ${lang === 'ar' ? 'font-arabic' : ''}`}>
              {lang === 'en' ? 'Mission' : 'الرسالة'}
            </h5>
            <p className={`text-xl md:text-2xl text-[#B8BDC4] leading-tight font-bold tracking-tight ${lang === 'ar' ? 'font-arabic' : ''}`}>
              {lang === 'en'
                ? 'We build, operate, and grow smart applications that solve real problems with precision and style.'
                : 'نطوّر، نشغّل، وننمّي تطبيقات ذكية تحل مشكلات حقيقية بدقة ووعي وأسلوب حديث.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
