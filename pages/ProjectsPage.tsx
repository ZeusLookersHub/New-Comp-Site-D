
import React, { useEffect } from 'react';
// Fixed: import useLanguage from LanguageContext instead of App
import { useLanguage } from '../LanguageContext';

const ProjectsPage: React.FC = () => {
  const { lang } = useLanguage();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-navy min-h-screen pt-40 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-7xl md:text-[10rem] font-black text-white leading-[0.85] tracking-tighter mb-8">
          {lang === 'en' ? <>The <span className="text-gold">Portfolio.</span></> : <>معرض <span className="text-gold">المشاريع.</span></>}
        </h1>
        <p className="text-2xl md:text-3xl text-mutedGray tracking-tight max-w-2xl font-medium">
          {lang === 'en' 
            ? "A showcase of products engineered to outperform. Detailed case studies coming soon." 
            : "معرض للمنتجات التي تم هندستها لتتفوق. دراسات الحالة التفصيلية ستتوفر قريباً."}
        </p>
        <div className="mt-20 h-[50vh] flex items-center justify-center border border-white/5 rounded-[4rem] bg-white/[0.02]">
           <span className="text-dimGray font-black uppercase tracking-[0.5em] text-xs">Project list coming later</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
