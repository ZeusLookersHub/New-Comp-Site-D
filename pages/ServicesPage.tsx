import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { ChevronDown, ArrowRight, Sparkles } from 'lucide-react';

interface ServiceContent {
  id: number;
  title: { en: string; ar: string };
  short: { en: string; ar: string };
  full: { en: string; ar: string };
  includes: { en: string[]; ar: string[] };
  image: string;
}

const services: ServiceContent[] = [
  {
    id: 1,
    title: { en: 'App & Game Development', ar: 'تطوير التطبيقات والألعاب' },
    short: { 
      en: 'We build mobile applications and games with a strong focus on experience and performance.', 
      ar: 'نطوّر تطبيقات وألعاب موبايل بتجربة قوية وأداء عالي.' 
    },
    full: { 
      en: 'We design and develop mobile applications and games from idea to launch. Our work combines UX thinking, clean architecture, and scalable performance.', 
      ar: 'نصمّم ونطوّر تطبيقات وألعاب موبايل من الفكرة حتى الإطلاق، مع التركيز على تجربة المستخدم، البنية القوية، وقابلية التوسّع.' 
    },
    includes: {
      en: ['Mobile Apps (iOS & Android)', 'Mobile Game Development', 'UI/UX Design', 'Frontend & Backend Development', 'In-house game project: Aero Runner'],
      ar: ['تطبيقات موبايل (iOS و Android)', 'تطوير ألعاب موبايل', 'تصميم واجهات وتجربة المستخدم', 'تطوير الواجهة والخلفية', 'لعبة داخلية: Aero Runner']
    },
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 2,
    title: { en: 'Product & Business Operations', ar: 'عمليات المنتج والأعمال' },
    short: { 
      en: 'We operate products and brands as if they were part of our own team.', 
      ar: 'نقدّم تشغيل كامل للمنتجات والبراندات كجزء من الفريق.' 
    },
    full: { 
      en: 'We provide full operational support for products and brands after launch. We analyze performance, manage growth, and continuously improve the product.', 
      ar: 'نوفّر أوبريشن كامل للمنتجات والبراندات بعد الإطلاق، من تحليل الأداء إلى تحسين التجربة والتطوير المستمر.' 
    },
    includes: {
      en: ['Product operation & monitoring', 'Performance analysis', 'User behavior insights', 'Feature optimization', 'Full operational support for brands and startups'],
      ar: ['تشغيل وإدارة المنتج', 'تحليل الأداء', 'دراسة سلوك المستخدم', 'تحسين الخصائص', 'دعم تشغيلي كامل للشركات والبراندات']
    },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
  },
  {
    id: 3,
    title: { en: 'Marketing & Growth', ar: 'التسويق والنمو' },
    short: { 
      en: 'We help products reach the right users and grow sustainably.', 
      ar: 'نساعد المنتجات على الوصول للجمهور الصحيح والنمو بذكاء.' 
    },
    full: { 
      en: 'We build growth strategies based on data, testing, and real performance. Our focus is sustainable growth, not vanity metrics.', 
      ar: 'نبني استراتيجيات نمو قائمة على الداتا والتجارب الحقيقية، مع التركيز على نمو مستدام وليس أرقام وهمية.' 
    },
    includes: {
      en: ['Go-to-market strategy', 'Performance marketing', 'Growth experiments', 'Data-driven decisions'],
      ar: ['استراتيجيات دخول السوق', 'تسويق الأداء', 'تجارب النمو', 'قرارات مبنية على البيانات']
    },
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 4,
    title: { en: 'Product Strategy & UX Thinking', ar: 'استراتيجية المنتج وتفكير UX' },
    short: { 
      en: 'We turn ideas into clear, executable product strategies.', 
      ar: 'نحوّل الأفكار إلى استراتيجيات منتجات قابلة للتنفيذ.' 
    },
    full: { 
      en: 'We help founders and teams shape ideas into real products by defining vision, priorities, and user experience.', 
      ar: 'نساعد الفرق والمؤسسين على تحويل الأفكار إلى منتجات حقيقية من خلال تحديد الرؤية، الأولويات، وتجربة المستخدم.' 
    },
    includes: {
      en: ['Product vision & roadmap', 'UX research & thinking', 'Feature prioritization', 'MVP definition'],
      ar: ['رؤية وخارطة طريق المنتج', 'أبحاث وتجربة المستخدم', 'تحديد الأولويات', 'تعريف الـ MVP']
    },
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1936&auto=format&fit=crop'
  }
];

const ServicesPage: React.FC = () => {
  const { lang } = useLanguage();
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bg-navy min-h-screen text-white pt-32 selection:bg-gold selection:text-black">
      
      {/* 1) HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-gold text-[10px] font-black uppercase tracking-[0.3em] mb-10">
            <Sparkles size={14} fill="currentColor" />
            <span>LookersHub Core</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black mb-10 tracking-tighter leading-[0.85]">
            {lang === 'en' ? 'What We Do' : 'ماذا نفعل'}
          </h1>
          <p className="text-xl md:text-4xl text-mutedGray font-medium max-w-4xl tracking-tight leading-tight">
            {lang === 'en' 
              ? "We don’t just build products. We think, operate, and grow them." 
              : "نحن لا نبني منتجات فحسب، بل نفكر فيها ونشغلها وننميها."}
          </p>
        </div>
      </section>

      {/* 2) SERVICES LIST SECTION */}
      <section className="border-t border-white/5">
        {services.map((service) => {
          const isExpanded = expandedId === service.id;
          return (
            <div 
              key={service.id}
              onClick={() => toggleExpand(service.id)}
              className={`group border-b border-white/5 cursor-pointer transition-all duration-700 relative overflow-hidden ${isExpanded ? 'bg-gold/[0.03]' : 'hover:bg-gold/[0.01]'}`}
            >
              {/* Gold border accent on hover/expand */}
              <div className={`absolute top-0 left-0 w-1 h-full bg-gold transition-transform duration-700 origin-top ${isExpanded ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-100'}`}></div>
              
              <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-16">
                  
                  {/* Left Side: Basic Info */}
                  <div className="flex-grow">
                    <span className="text-gold font-black text-[10px] uppercase tracking-[0.5em] mb-4 block opacity-60">
                      0{service.id}
                    </span>
                    <h2 className="text-3xl md:text-6xl font-black mb-4 tracking-tighter transition-colors duration-500 group-hover:text-gold">
                      {lang === 'en' ? service.title.en : service.title.ar}
                    </h2>
                    <p className={`text-lg md:text-xl text-mutedGray font-medium tracking-tight transition-all duration-500 ${isExpanded ? 'opacity-0 h-0 pointer-events-none' : 'opacity-100'}`}>
                      {lang === 'en' ? service.short.en : service.short.ar}
                    </p>
                  </div>

                  {/* Right Side: Visual/Arrow */}
                  <div className="flex items-center gap-8">
                    <div className="hidden md:block relative w-40 h-24 rounded-2xl overflow-hidden border border-white/10 opacity-40 group-hover:opacity-100 transition-all duration-700">
                      <img 
                        src={service.image} 
                        alt={service.title.en} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-1000 group-hover:scale-110"
                      />
                    </div>
                    <ChevronDown 
                      className={`text-gold transition-transform duration-500 ${isExpanded ? 'rotate-180' : 'rotate-0'}`} 
                      size={32} 
                    />
                  </div>
                </div>

                {/* Expanded Content */}
                <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[1200px] mt-12 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
                    
                    {/* Content Column */}
                    <div className="lg:w-3/5">
                      <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-12 tracking-tight">
                        {lang === 'en' ? service.full.en : service.full.ar}
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-gold text-xs font-black uppercase tracking-[0.3em] mb-6">
                            {lang === 'en' ? 'Includes' : 'يشمل'}
                          </h4>
                          <ul className="space-y-4">
                            {(lang === 'en' ? service.includes.en : service.includes.ar).map((item, i) => (
                              <li key={i} className="flex items-center gap-4 text-mutedGray group/li transition-colors hover:text-white">
                                <div className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover/li:bg-gold"></div>
                                <span className="text-sm md:text-base font-bold tracking-tight">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Image Column */}
                    <div className="lg:w-2/5">
                      <div className="relative aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl">
                        <img 
                          src={service.image} 
                          alt={service.title.en} 
                          className="w-full h-full object-cover grayscale-0"
                        />
                        <div className="absolute inset-0 bg-navy/20"></div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* 3) FINAL CTA SECTION */}
      <section className="py-40 md:py-60 text-center relative overflow-hidden bg-navy">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-6xl md:text-9xl font-black text-white mb-16 tracking-tighter leading-none">
            {lang === 'en' ? 'Start Your Project' : 'ابدأ مشروعك'}
          </h2>
          <Link 
            to="/start-your-project"
            className="group inline-flex items-center gap-4 px-12 py-6 md:px-16 md:py-8 bg-gold text-black rounded-3xl font-black text-xl md:text-2xl uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-2xl shadow-gold/20"
          >
            {lang === 'en' ? 'Start Your Project' : 'ابدأ مشروعك'}
            <ArrowRight size={24} className="group-hover:translate-x-3 transition-transform rtl:rotate-180 rtl:group-hover:-translate-x-3" />
          </Link>
          
          <div className="mt-16 flex justify-center gap-12 opacity-20 grayscale transition-all hover:opacity-50 hover:grayscale-0">
             <div className="text-[10px] font-black uppercase tracking-[0.8em] italic">Concept</div>
             <div className="text-[10px] font-black uppercase tracking-[0.8em] italic">Engineering</div>
             <div className="text-[10px] font-black uppercase tracking-[0.8em] italic">Scale</div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;