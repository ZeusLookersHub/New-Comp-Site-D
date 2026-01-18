
import React, { useEffect } from 'react';
import { Eye, Target, Compass, Zap, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
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
      {/* Intro */}
      <div className="max-w-7xl mx-auto px-6 py-20 reveal">
        <h1 className="text-7xl md:text-[10rem] font-black text-white leading-[0.85] tracking-tighter mb-8">
          About <br /> The Hub.
        </h1>
        <p className="text-2xl md:text-4xl font-extrabold text-white/30 tracking-tight max-w-4xl leading-tight">
          We are an integrated tech company that refuses to look at the digital world through a conventional lens.
        </p>
      </div>

      {/* Philosophy Section */}
      <section className="py-32 bg-[#0a0c12] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20">
            <div className="reveal">
              <div className="w-20 h-20 rounded-3xl bg-gold/10 flex items-center justify-center text-gold mb-10">
                <Eye size={40} />
              </div>
              <h3 className="text-5xl font-black text-white mb-8 tracking-tighter uppercase">The Vision</h3>
              <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed">
                To redefine the digital landscape by seeing the <span className="text-white underline decoration-gold/50">unseen opportunities</span> that others overlook. We believe the future belongs to those who integrate intelligence with intuition.
              </p>
            </div>
            <div className="reveal" style={{ transitionDelay: '200ms' }}>
              <div className="w-20 h-20 rounded-3xl bg-gold/10 flex items-center justify-center text-gold mb-10">
                <Target size={40} />
              </div>
              <h3 className="text-5xl font-black text-white mb-8 tracking-tighter uppercase">The Mission</h3>
              <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed">
                We engineer high-performance systems and growth strategies that empower ambitious companies to lead. Our mission is to transform technology from a cost center into a <span className="text-white">strategic asset</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-32 bg-[#05070a]">
        <div className="max-w-7xl mx-auto px-6 text-center reveal">
          <h2 className="text-sm font-black text-gold uppercase tracking-[0.4em] mb-12">Our Core DNA</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-12 rounded-[3rem] bg-white/5 border border-white/5 hover:border-gold/30 transition-all group">
              <Compass size={48} className="text-gold mx-auto mb-8 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-black text-white mb-4">Precision</h4>
              <p className="text-gray-500">Every pixel, every line of code, every strategy—executed with surgical accuracy.</p>
            </div>
            <div className="p-12 rounded-[3rem] bg-white/5 border border-white/5 hover:border-gold/30 transition-all group">
              <ShieldCheck size={48} className="text-gold mx-auto mb-8 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-black text-white mb-4">Integrity</h4>
              <p className="text-gray-500">Stability is our promise. We build products that stand the test of time and scale.</p>
            </div>
            <div className="p-12 rounded-[3rem] bg-white/5 border border-white/5 hover:border-gold/30 transition-all group">
              <Zap size={48} className="text-gold mx-auto mb-8 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-black text-white mb-4">Velocity</h4>
              <p className="text-gray-500">In the digital edge, speed is everything. We move fast without breaking the vision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <div className="py-32 text-center bg-[#0a0c12] reveal">
        <Link 
          to="/contact" 
          className="group inline-flex items-center gap-4 px-12 py-6 rounded-2xl gold-gradient text-black font-black text-xl hover:shadow-gold/20 transition-all"
        >
          Let's Start a Vision <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
