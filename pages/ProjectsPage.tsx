
import React, { useEffect } from 'react';
import { Sparkles, Zap, Shield, Globe, ArrowRight, Layers, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsPage: React.FC = () => {
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
    <div className="bg-[#05070a] pt-32 animate-fade-in">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 py-20 reveal">
        <h1 className="text-7xl md:text-[10rem] font-black text-white leading-[0.85] tracking-tighter mb-8">
          The <br /> Portfolio.
        </h1>
        <p className="text-2xl md:text-3xl font-extrabold text-white/30 tracking-tight max-w-2xl">
          A showcase of products engineered to outperform.
        </p>
      </div>

      {/* Main Project: Pick */}
      <section className="py-24 bg-[#0a0c12] border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 reveal">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5 text-gold text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                <Sparkles size={14} fill="currentColor" />
                <span>Flagship Release</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-black text-white mb-10 tracking-tighter">
                Pick App.
              </h2>
              <p className="text-2xl text-gray-400 mb-12 font-medium leading-relaxed">
                Pick is a next-generation observability platform designed to unify your digital footprint. In a world of fragmented data, Pick provides the <span className="text-white">integrated intelligence</span> required to lead.
              </p>
              
              <div className="space-y-12 mb-16">
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                    <Target size={28} />
                  </div>
                  <div>
                    <h4 className="text-white font-black uppercase tracking-widest text-sm mb-2">Why it matters</h4>
                    <p className="text-gray-500 text-lg">Legacy systems are reactive. Pick is proactive, predicting bottlenecks before they manifest in your operations.</p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                    <Layers size={28} />
                  </div>
                  <div>
                    <h4 className="text-white font-black uppercase tracking-widest text-sm mb-2">The Value</h4>
                    <p className="text-gray-500 text-lg">Reduce operational overhead by up to 40% through intelligent automation and real-time synchronization.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 reveal">
              <div className="relative group p-12 bg-white/5 rounded-[4rem] border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Pick App Interface" 
                  className="rounded-[2.5rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute -bottom-10 -right-10 w-64 p-8 rounded-[2rem] bg-gold text-black shadow-2xl hidden md:block">
                  <Zap size={32} className="mb-4" />
                  <div className="font-black text-2xl tracking-tighter">99.9% UPTIME</div>
                  <div className="text-xs font-bold uppercase tracking-widest">Guaranteed stability</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="py-32 text-center reveal">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-12 tracking-tighter">Have a vision for a project?</h2>
        <Link 
          to="/contact" 
          className="group inline-flex items-center gap-4 px-12 py-6 rounded-2xl gold-gradient text-black font-black text-xl hover:shadow-gold/20 transition-all"
        >
          Work with us <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectsPage;
