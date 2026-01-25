import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { ArrowRight, Sparkles } from 'lucide-react';

const HomePage: React.FC = () => {
  const { lang } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-navy overflow-hidden">
      
      {/* 1) HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center relative pt-20 px-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-gold/5 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-white/5 blur-[100px] rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10 reveal">
          <h1 className="text-[12vw] md:text-[8rem] font-black text-white leading-[0.85] tracking-tighter mb-10">
            {lang === 'en' ? (
              <>We See <span className="text-gold">Differently.</span></>
            ) : (
              <>نحن نرى ما <span className="text-gold">لا يراه غيرنا</span></>
            )}
          </h1>
          <p className="text-xl md:text-3xl text-mutedGray font-medium max-w-4xl mx-auto leading-relaxed tracking-tight">
            {lang === 'en' 
              ? "We are the Lookers — the ones who observe, track details, and see patterns others miss. We turn that vision into smart digital products."
              : "نحن لوكرز… نراقب التفاصيل، نحلّل المشهد كاملًا، ونحوّل الرؤية المختلفة إلى منتجات رقمية ذكية."}
          </p>
        </div>
      </section>

      {/* 2) COMPANY STORY - WHY LOOKERSHUB */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-mutedWhite text-[10px] font-black uppercase tracking-[0.3em] mb-10">
            <Sparkles size={14} fill="currentColor" className="text-gold" />
            <span>Story</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter">
            {lang === 'en' ? <>Why <span className="text-gold">LookersHub</span></> : <>لماذا <span className="text-gold">LookersHub؟</span></>}
          </h2>
          <p className="text-2xl md:text-4xl text-mutedGray font-medium leading-tight max-w-5xl tracking-tight italic">
            {lang === 'en'
              ? "Being a Looker means observing deeply, understanding patterns, and turning insight into action. With every step forward, our vision becomes sharper."
              : "كونك «لوكر» لا يعني أنك تشاهد فقط، بل أنك تلاحظ، تفهم، وتربط النقاط. ومع كل خطوة للأمام، تصبح رؤيتنا أوضح."}
          </p>
          <Link to="/about" className="mt-12 inline-flex items-center gap-3 text-gold font-black uppercase tracking-[0.2em] text-sm group">
            {lang === 'en' ? 'Read Full Story' : 'اقرأ القصة كاملة'}
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform rtl:group-hover:-translate-x-2" />
          </Link>
        </div>
      </section>

      {/* 3) VISION & MISSION */}
      <section className="py-32 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <Link to="/about" className="p-12 md:p-16 rounded-[3rem] bg-navy border border-white/5 hover:border-gold/20 transition-all group reveal">
            <h3 className="text-white text-3xl font-black mb-8 uppercase tracking-tighter">
              {lang === 'en' ? <>Our <span className="text-gold">Vision</span></> : <>رؤيـ<span className="text-gold">ـتنا</span></>}
            </h3>
            <p className="text-xl md:text-2xl text-mutedGray font-medium leading-tight tracking-tight">
              {lang === 'en'
                ? "To lead with vision — building smarter digital experiences for the next generation."
                : "أن نقود المستقبل برؤية أوضح، ونبني تجارب رقمية أذكى للجيل القادم."}
            </p>
          </Link>
          <Link to="/about" className="p-12 md:p-16 rounded-[3rem] bg-navy border border-white/5 hover:border-gold/20 transition-all group reveal" style={{transitionDelay: '150ms'}}>
            <h3 className="text-white text-3xl font-black mb-8 uppercase tracking-tighter">
              {lang === 'en' ? <>Our <span className="text-gold">Mission</span></> : <>مهمتـ<span className="text-gold">ـنا</span></>}
            </h3>
            <p className="text-xl md:text-2xl text-mutedGray font-medium leading-tight tracking-tight">
              {lang === 'en'
                ? "We build, operate, and grow smart applications that solve real problems with precision and style."
                : "نطوّر، نشغّل، وننمّي تطبيقات ذكية تحل مشكلات حقيقية بدقة ووعي وأسلوب حديث."}
            </p>
          </Link>
        </div>
      </section>

      {/* 4) SERVICES PREVIEW */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto reveal text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
            {lang === 'en' ? <>Our <span className="text-gold">Services</span></> : <>خدما<span className="text-gold">تنا</span></>}
          </h2>
          <p className="text-xl md:text-3xl text-mutedGray mb-12 font-medium tracking-tight">
            {lang === 'en' ? "We build, operate, and grow digital products." : "نبني، نشغّل، وننمّي المنتجات الرقمية."}
          </p>
          <Link to="/services" className="px-12 py-5 border-2 border-gold text-gold rounded-2xl font-black uppercase tracking-widest hover:bg-gold hover:text-black transition-all">
            {lang === 'en' ? 'Explore Services' : 'استكشف الخدمات'}
          </Link>
        </div>
      </section>

      {/* 5) PROJECTS PREVIEW (PICK) */}
      <section className="py-32 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 reveal">
          <div className="md:w-1/2">
            <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter">
              {lang === 'en' ? <>The <span className="text-gold">Pick.</span></> : <>مشروع <span className="text-gold">Pick.</span></>}
            </h2>
            <p className="text-xl md:text-3xl text-mutedGray mb-12 font-medium leading-relaxed tracking-tight">
              {lang === 'en'
                ? "Our flagship product that reflects how we see and build differently."
                : "أول منتجاتنا، ويجسّد فلسفتنا في الرؤية والتنفيذ المختلف."}
            </p>
            <Link to="/projects" className="inline-flex items-center gap-3 text-gold font-black uppercase tracking-[0.2em] group">
              {lang === 'en' ? 'View Project' : 'مشاهدة المشروع'}
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform rtl:group-hover:-translate-x-2" />
            </Link>
          </div>
          <div className="md:w-1/2 relative group">
             <div className="absolute inset-0 bg-gold/10 blur-[80px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
             <img 
               src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop" 
               alt="Pick App" 
               className="relative rounded-[3rem] border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000"
             />
          </div>
        </div>
      </section>

      {/* 6) PRIMARY CTA SECTION */}
      <section className="py-40 px-6 text-center">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-6xl md:text-9xl font-black text-white mb-10 tracking-tighter leading-none">
            {lang === 'en' ? <>Start Your <span className="text-gold">Project</span></> : <>ابدأ <span className="text-gold">مشروعك</span></>}
          </h2>
          <p className="text-xl md:text-3xl text-mutedGray mb-16 font-medium tracking-tight">
            {lang === 'en' ? "Turn your idea into a real product." : "حوّل فكرتك إلى منتج حقيقي."}
          </p>
          <Link to="/start-your-project" className="px-16 py-8 bg-gold text-black rounded-3xl font-black text-2xl uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl shadow-gold/20">
            {lang === 'en' ? 'Get Started' : 'ابدأ الآن'}
          </Link>
          <p className="mt-10 text-dimGray text-[10px] uppercase font-black tracking-[0.5em]">
            {lang === 'en' ? 'Main call-to-action note' : 'ملاحظة حول زر العمل الرئيسي'}
          </p>
        </div>
      </section>

    </div>
  );
};

export default HomePage;