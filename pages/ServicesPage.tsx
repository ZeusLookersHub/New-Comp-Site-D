import React, { useEffect } from 'react';
import { Smartphone, Activity, TrendingUp, Sparkles } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const ServicesPage: React.FC = () => {
  const { lang } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const content = {
    en: {
      title: <>Our <span className="text-[#E6C15A]">Services</span></>,
      intro: "This is how we build, operate, and grow digital products.",
      sections: [
        {
          title: <>App <span className="text-[#E6C15A]">Development</span></>,
          desc: "From idea to launch — UI/UX, mobile development, testing, and release.",
          icon: <Smartphone size={40} />,
          image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
        },
        {
          title: <>Product <span className="text-[#E6C15A]">Operations</span></>,
          desc: "We manage the product daily: stability, updates, insights, and support.",
          icon: <Activity size={40} />,
          image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop",
        },
        {
          title: <>Marketing & <span className="text-[#E6C15A]">Growth</span></>,
          desc: "We turn products into businesses through positioning, campaigns, and growth.",
          icon: <TrendingUp size={40} />,
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        }
      ],
      cta: <>Let's Build <span className="text-[#E6C15A]">Something</span></>,
      ctaNote: "Main call-to-action will be added later."
    },
    ar: {
      title: <>خدماتنا <span className="text-[#E6C15A]">الرقمية</span></>,
      intro: "هكذا نبني، نشغّل، وننمّي المنتجات الرقمية.",
      sections: [
        {
          title: <>تطوير <span className="text-[#E6C15A]">التطبيقات</span></>,
          desc: "من الفكرة إلى الإطلاق — تصميم واجهات، تطوير موبايل، اختبار جودة، ونشر.",
          icon: <Smartphone size={40} />,
          image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
        },
        {
          title: <>عمليات <span className="text-[#E6C15A]">المنتج</span></>,
          desc: "ندير المنتج يوميًا: استقرار، تحديثات، تحليل، ودعم العملاء.",
          icon: <Activity size={40} />,
          image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop",
        },
        {
          title: <>التسويق <span className="text-[#E6C15A]">والنمو</span></>,
          desc: "نحوّل المنتجات إلى بيزنس من خلال التموضع، الحملات، والنمو.",
          icon: <TrendingUp size={40} />,
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        }
      ],
      cta: <>لنصنع شيئًا <span className="text-[#E6C15A]">مختلفًا</span></>,
      ctaNote: "سيتم إضافة زر الإجراء الرئيسي لاحقاً."
    }
  };

  const active = content[lang];

  return (
    <div className="bg-[#05070a] pt-32 animate-fade-in">
      {/* Intro Header */}
      <section className="py-20 md:py-40">
        <div className="max-w-7xl mx-auto px-6 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[#EAEAEA] text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            <Sparkles size={14} fill="currentColor" className="text-[#E6C15A]" />
            <span>LookersHub Core</span>
          </div>
          <h1 className="text-6xl md:text-[8rem] font-black text-white leading-[0.85] tracking-tighter mb-10">
            {active.title}
          </h1>
          <p className="text-2xl md:text-4xl text-[#B8BDC4] font-medium leading-tight max-w-4xl tracking-tight">
            {active.intro}
          </p>
        </div>
      </section>

      {/* Services Sections */}
      {active.sections.map((service, idx) => (
        <section 
          key={idx} 
          className={`py-24 md:py-40 border-t border-white/5 overflow-hidden ${idx % 2 !== 0 ? 'bg-[#0a0c12]' : 'bg-[#05070a]'}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className={`flex flex-col lg:flex-row items-center gap-16 md:gap-32 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content side */}
              <div className="lg:w-1/2 reveal">
                <div className="w-20 h-20 rounded-2xl bg-[#E6C15A]/10 flex items-center justify-center text-[#E6C15A] mb-10">
                  {service.icon}
                </div>
                <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none uppercase">
                  {service.title}
                </h2>
                <p className="text-xl md:text-3xl text-[#B8BDC4] mb-10 font-medium leading-relaxed tracking-tight">
                  {service.desc}
                </p>
              </div>

              {/* Visual side */}
              <div className="lg:w-1/2 reveal">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-[#E6C15A]/10 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                  <div className="relative aspect-[4/3] rounded-[3.5rem] overflow-hidden border border-white/10 startup-shadow">
                    <img 
                      src={service.image} 
                      alt="Service Visual" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Footer CTA Placeholder */}
      <section className="py-40 bg-[#05070a] text-center overflow-hidden border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 reveal">
          <h2 className="text-5xl md:text-[8rem] font-black text-white mb-10 tracking-tighter leading-none">
            {active.cta}
          </h2>
          <div className="w-24 h-1 bg-[#E6C15A]/20 mx-auto mb-10"></div>
          <p className="text-xs md:text-sm font-black text-[#8C9197] uppercase tracking-[0.5em]">
            {active.ctaNote}
          </p>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;