
import React, { useEffect } from 'react';
// Fixed: import useLanguage from LanguageContext instead of App
import { useLanguage } from '../LanguageContext';

const StartProjectPage: React.FC = () => {
  const { lang } = useLanguage();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-navy min-h-screen pt-40 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-7xl md:text-[10rem] font-black text-white leading-[0.85] tracking-tighter mb-8">
          {lang === 'en' ? <>Let's <span className="text-gold">Build.</span></> : <>لنقم <span className="text-gold">بالبناء.</span></>}
        </h1>
        <p className="text-2xl md:text-3xl text-mutedGray tracking-tight max-w-4xl font-medium leading-relaxed">
          {lang === 'en' 
            ? "Turn your idea into a high-performance product. This section will be updated with a project brief form."
            : "حوّل فكرتك إلى منتج عالي الأداء. سيتم تحديث هذا القسم بنموذج مختصر للمشروع."}
        </p>
      </div>
    </div>
  );
};

export default StartProjectPage;
