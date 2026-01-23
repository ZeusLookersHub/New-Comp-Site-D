
import React from 'react';
import { Binoculars, Brain, Activity } from 'lucide-react';
// Fixed: import useLanguage from LanguageContext instead of App
import { useLanguage } from '../LanguageContext';

const WhyLookers: React.FC = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      title: "Why LookersHub",
      text: "“Being a Looker means observing deeply, understanding patterns, and turning insight into action. With every step forward, our vision becomes sharper.”",
      features: [
        { icon: <Binoculars />, label: "Observation" },
        { icon: <Brain />, label: "Insight" },
        { icon: <Activity />, label: "Precision" }
      ]
    },
    ar: {
      title: "لماذا LookersHub؟",
      text: "كونك «Looker» لا يعني أنك تشاهد فقط، بل أنك تلاحظ، تفهم، وتربط النقاط. ومع كل خطوة للأمام، تصبح رؤيتنا أوضح.",
      features: [
        { icon: <Binoculars />, label: "الملاحظة" },
        { icon: <Brain />, label: "الرؤية" },
        { icon: <Activity />, label: "الدقة" }
      ]
    }
  };

  const active = content[lang];

  return (
    <section className="py-32 bg-[#05070a] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
          <h2 className={`text-4xl md:text-7xl font-black text-white tracking-tighter mb-10 ${lang === 'ar' ? 'font-arabic' : ''}`}>
            {active.title}
          </h2>
          <p className={`text-xl md:text-2xl text-[#B8BDC4] font-medium leading-relaxed italic ${lang === 'ar' ? 'font-arabic' : ''}`}>
            {active.text}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {active.features.map((feature, i) => (
            <div key={i} className="p-12 rounded-[3rem] bg-[#0a0c12] border border-white/5 flex flex-col items-center text-center group hover:border-[#E6C15A]/30 transition-all duration-700">
              <div className="w-20 h-20 rounded-2xl bg-[#E6C15A]/10 flex items-center justify-center text-[#E6C15A] mb-8 group-hover:scale-110 transition-transform">
                {React.cloneElement(feature.icon as React.ReactElement<any>, { size: 36 })}
              </div>
              <h4 className={`text-2xl font-black text-white uppercase tracking-tighter ${lang === 'ar' ? 'font-arabic' : ''}`}>{feature.label}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLookers;
