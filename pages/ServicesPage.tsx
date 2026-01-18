
import React, { useEffect } from 'react';
import { Smartphone, Activity, TrendingUp, Zap, ArrowRight, CheckCircle2, Code, ShieldCheck, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceSection: React.FC<{
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  icon: React.ReactNode;
  image: string;
  reverse?: boolean;
}> = ({ title, subtitle, description, items, icon, image, reverse }) => (
  <section className={`py-24 md:py-40 border-b border-white/5 overflow-hidden ${reverse ? 'bg-[#0a0c12]' : 'bg-[#05070a]'}`}>
    <div className="max-w-7xl mx-auto px-6">
      <div className={`flex flex-col lg:flex-row items-center gap-16 md:gap-24 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        
        {/* Content Side */}
        <div className="lg:w-1/2 reveal">
          <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-8">
            {icon}
          </div>
          <h2 className="text-sm font-black text-gold uppercase tracking-[0.4em] mb-4">{subtitle}</h2>
          <h3 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
            {title}
          </h3>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-tight max-w-xl font-medium">
            {description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-white/70 font-bold uppercase tracking-widest text-xs py-3 px-5 bg-white/5 rounded-xl border border-white/5">
                <CheckCircle2 size={16} className="text-gold" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Visual Side */}
        <div className="lg:w-1/2 reveal">
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gold/10 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/10 startup-shadow">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070a]/80 via-transparent to-transparent"></div>
              
              {/* Floating element in image */}
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center text-black">
                    {icon}
                  </div>
                  <div className="text-white text-xs font-black uppercase tracking-widest">
                    LookersHub Stack
                  </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

const ServicesPage: React.FC = () => {
  useEffect(() => {
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

  return (
    <div className="bg-[#05070a] pt-32 animate-fade-in">
      {/* Intro Header */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 text-center md:text-left reveal">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5 text-gold text-[10px] font-black uppercase tracking-[0.3em] mb-8">
          <Zap size={14} fill="currentColor" />
          <span>Our Capabilities</span>
        </div>
        <h1 className="text-7xl md:text-[10rem] font-black text-white leading-[0.85] tracking-tighter mb-8">
          What <br /> We Do.
        </h1>
        <p className="text-2xl md:text-3xl font-extrabold text-white/30 tracking-tight max-w-3xl">
          High-impact engineering, operational stability, and aggressive market scaling for the next generation of digital leaders.
        </p>
      </div>

      {/* Stacked Vertical Sections */}
      <ServiceSection 
        title="App Development"
        subtitle="Idea to Launch"
        description="We transform raw concepts into high-performance digital ecosystems using a rigorous engineering pipeline."
        icon={<Smartphone size={32} />}
        image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
        items={['Idea Validation', 'UX/UI Architecture', 'Full-Stack Build', 'Global Deployment']}
      />

      <ServiceSection 
        title="Product Operations"
        subtitle="The Engine Room"
        description="Ensuring your technology stack remains unshakeable. We manage the complexity while you lead the vision."
        icon={<Activity size={32} />}
        image="https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop"
        reverse
        items={['24/7 Monitoring', 'Stability Audits', 'Continuous Updates', 'System Support']}
      />

      <ServiceSection 
        title="Marketing & Growth"
        subtitle="Aggressive Scale"
        description="Data-driven positioning and high-velocity campaign execution to capture and dominate your market share."
        icon={<TrendingUp size={32} />}
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
        items={['Brand Strategy', 'Growth Funnels', 'Performance Ads', 'Conversion Scaling']}
      />

      {/* Final CTA */}
      <div className="py-32 bg-[#05070a] text-center border-t border-white/5 reveal">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-12 tracking-tighter">Ready to See <span className="italic gold-gradient bg-clip-text text-transparent">Differently?</span></h2>
          <Link 
            to="/#contact" 
            className="group inline-flex items-center gap-6 px-16 py-8 rounded-[2.5rem] gold-gradient text-black font-black text-2xl hover:shadow-[0_40px_80px_-20px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-2"
          >
            Start a Project <ArrowRight size={32} className="group-hover:translate-x-3 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
