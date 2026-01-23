
import React from 'react';
// Fixed: import useLanguage from LanguageContext instead of App
import { useLanguage } from '../LanguageContext';

const CTAPlaceholder: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-40 bg-[#05070a] relative overflow-hidden text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className={`text-5xl md:text-[8rem] font-black text-white mb-10 tracking-tighter leading-none ${lang === 'ar' ? 'font-arabic' : ''}`}>
          {lang === 'en' ? (
            <>Let's Build <br /><span className="text-[#E6C15A]">Something</span></>
          ) : (
            <>لنقم ببناء <br /><span className="text-[#E6C15A]">شيء ما</span></>
          )}
        </h2>
        <div className="w-24 h-1 bg-[#E6C15A]/20 mx-auto mb-10"></div>
        <p className={`text-xs md:text-sm font-black text-[#8C9197] uppercase tracking-[0.5em] ${lang === 'ar' ? 'font-arabic' : ''}`}>
          {lang === 'en' 
            ? 'Main call-to-action will be added later.' 
            : 'سيتم إضافة زر الإجراء الرئيسي لاحقاً.'}
        </p>
      </div>
      
      {/* Visual Accent */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E6C15A]/5 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
};

export default CTAPlaceholder;
