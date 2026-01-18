
import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Activity, TrendingUp, ArrowRight } from 'lucide-react';

const ServicesPreview: React.FC = () => {
  const previews = [
    { title: 'App Development', icon: <Smartphone size={24} /> },
    { title: 'Product Operations', icon: <Activity size={24} /> },
    { title: 'Marketing & Growth', icon: <TrendingUp size={24} /> },
  ];

  return (
    <section className="py-24 bg-[#05070a] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8 reveal">
          <div className="max-w-2xl">
            <h2 className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-4">Capabilities</h2>
            <h3 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter leading-none">
              Modern Solutions.
            </h3>
          </div>
          <Link 
            to="/services" 
            className="group inline-flex items-center gap-3 text-sm font-black text-white uppercase tracking-[0.2em] border-b-2 border-gold pb-1"
          >
            View Services <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {previews.map((item, idx) => (
            <div 
              key={idx}
              className="reveal p-8 rounded-3xl bg-white/5 border border-white/5 flex items-center gap-6"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-white tracking-tight">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
