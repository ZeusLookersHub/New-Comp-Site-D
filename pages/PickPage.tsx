
import React, { useEffect } from 'react';
import { Sparkles, Zap, Shield, Globe, ArrowRight, Layers, Target, Activity, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';

const PickPage: React.FC = () => {
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
    <div className="bg-[#05070a] pt-32 animate-fade-in min-h-screen">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 py-20 reveal">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5 text-gold text-[10px] font-black uppercase tracking-[0.3em] mb-8">
          <Sparkles size={14} fill="currentColor" />
          <span>{lang === 'en' ? 'Flagship Release' : 'إصدار رائد'}</span>
        </div>
        <h1 className="text-7xl md:text-[10rem] font-black text-white leading-[0.85] tracking-tighter mb-8">
          {lang === 'en' ? <>Meet <br /> Pick.</> : <>تعرف على <br /> بيك.</>}
        </h1>
        <p className="text-2xl md:text-3xl font-extrabold text-white/30 tracking-tight max-w-2xl">
          {lang === 'en' 
            ? 'The most powerful observability platform ever engineered for modern digital operations.'
            : 'أقوى منصة مراقبة تم هندستها للعمليات الرقمية الحديثة على الإطلاق.'}
        </p>
      </div>

      {/* Deep Dive Section */}
      <section className="py-24 bg-[#0a0c12] border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 reveal">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-10 tracking-tighter">
                {lang === 'en' ? <>Unified <br /><span className="text-gold italic">Intelligence.</span></> : <>ذكاء <br /><span className="text-gold italic">موحد.</span></>}
              </h2>
              <p className="text-2xl text-gray-400 mb-12 font-medium leading-relaxed">
                {lang === 'en' 
                  ? 'Pick is a next-generation observability platform designed to unify your digital footprint. In a world of fragmented data, Pick provides the integrated intelligence required to lead.'
                  : 'بيك هي منصة مراقبة من الجيل القادم مصممة لتوحيد بصمتك الرقمية. في عالم من البيانات المجزأة، توفر بيك الذكاء المتكامل المطلوب للقيادة.'}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="space-y-4">
                  <Cpu className="text-gold" size={32} />
                  <h4 className="text-white font-black uppercase tracking-widest text-xs">{lang === 'en' ? 'Real-time Core' : 'النواة الحية'}</h4>
                  <p className="text-gray-500 text-sm">
                    {lang === 'en' ? 'Processing millions of events per second with sub-millisecond latency.' : 'معالجة ملايين الأحداث في الثانية مع تأخير أقل من جزء من الثانية.'}
                  </p>
                </div>
                <div className="space-y-4">
                  <Shield className="text-gold" size={32} />
                  <h4 className="text-white font-black uppercase tracking-widest text-xs">{lang === 'en' ? 'Immutable Security' : 'أمن ثابت'}</h4>
                  <p className="text-gray-500 text-sm">
                    {lang === 'en' ? 'Every data point is encrypted and verified through our proprietary vault protocol.' : 'يتم تشفير كل نقطة بيانات والتحقق منها عبر بروتوكول القبو الخاص بنا.'}
                  </p>
                </div>
                <div className="space-y-4">
                  <Activity className="text-gold" size={32} />
                  <h4 className="text-white font-black uppercase tracking-widest text-xs">{lang === 'en' ? 'Predictive Edge' : 'الحافة التنبؤية'}</h4>
                  <p className="text-gray-500 text-sm">
                    {lang === 'en' ? 'Predicting bottlenecks before they manifest in your operations.' : 'التنبؤ بالاختناقات قبل أن تظهر في عملياتك.'}
                  </p>
                </div>
                <div className="space-y-4">
                  <Globe className="text-gold" size={32} />
                  <h4 className="text-white font-black uppercase tracking-widest text-xs">{lang === 'en' ? 'Global Sync' : 'مزامنة عالمية'}</h4>
                  <p className="text-gray-500 text-sm">
                    {lang === 'en' ? 'Data orchestration across the globe without boundaries.' : 'تنسيق البيانات عبر العالم بدون حدود.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 reveal">
              <div className="relative group p-4 md:p-12 bg-white/5 rounded-[4.5rem] border border-white/10 startup-shadow">
                <div className="aspect-[9/16] md:aspect-auto rounded-[3.5rem] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop" 
                    alt="Pick App Interface" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 p-8 rounded-[2rem] bg-gold text-black shadow-2xl hidden md:block animate-float">
                  <Zap size={32} className="mb-4" />
                  <div className="font-black text-2xl tracking-tighter">99.9% UPTIME</div>
                  <div className="text-xs font-bold uppercase tracking-widest">{lang === 'en' ? 'Guaranteed stability' : 'استقرار مضمون'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="py-32 text-center reveal">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-12 tracking-tighter">
          {lang === 'en' ? 'Ready to experience Pick?' : 'هل أنت مستعد لتجربة بيك؟'}
        </h2>
        <Link 
          to="/contact" 
          className="group inline-flex items-center gap-4 px-12 py-6 rounded-2xl gold-gradient text-black font-black text-xl hover:shadow-gold/20 transition-all transform hover:-translate-y-1"
        >
          {lang === 'en' ? 'Get Early Access' : 'احصل على وصول مبكر'} 
          <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default PickPage;
