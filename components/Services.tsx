
import React, { useState, useEffect } from 'react';
import { Smartphone, Activity, TrendingUp, ChevronRight, X, Code, Terminal, BarChart3, Target, Layers, ArrowRight } from 'lucide-react';

interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  description: string;
  steps: { icon: React.ReactNode; text: string; label: string }[];
  visual: string;
}

const servicesData: ServiceDetail[] = [
  {
    id: 'app',
    title: 'App Development',
    subtitle: 'Code visuals + Mobile UX',
    icon: <Smartphone size={32} />,
    description: "We don't just build apps; we engineer high-performance digital ecosystems for the future.",
    steps: [
      { label: 'Architect', icon: <Terminal size={18} />, text: 'Designing robust, scalable backends.' },
      { label: 'Design', icon: <Code size={18} />, text: 'Crafting pixel-perfect, intuitive interfaces.' },
      { label: 'Ship', icon: <Layers size={18} />, text: 'Deploying with CI/CD excellence.' },
    ],
    visual: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'ops',
    title: 'Product Operations',
    subtitle: 'Dashboard + Support',
    icon: <Activity size={32} />,
    description: "Streamlining your product's lifecycle from the engine room to the top floor.",
    steps: [
      { label: 'Audit', icon: <Activity size={18} />, text: 'Identifying bottlenecks in your workflow.' },
      { label: 'Refine', icon: <Layers size={18} />, text: 'Automating repetitive manual processes.' },
      { label: 'Scale', icon: <Target size={18} />, text: 'Enabling growth without the growing pains.' },
    ],
    visual: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'growth',
    title: 'Marketing & Growth',
    subtitle: 'Megaphone + Chart',
    icon: <TrendingUp size={32} />,
    description: "Data-driven aggression. We capture market share and convert users into fanatics.",
    steps: [
      { label: 'Strategy', icon: <Target size={18} />, text: 'Developing an unbeatable market angle.' },
      { label: 'Execute', icon: <BarChart3 size={18} />, text: 'Launching multi-channel growth sprints.' },
      { label: 'Optimize', icon: <TrendingUp size={18} />, text: 'Real-time analysis to double down.' },
    ],
    visual: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
  }
];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

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
    <section className="py-32 bg-[#05070a] relative overflow-hidden" id="services">
      {/* Floating Shapes */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold/5 rounded-full blur-[100px] animate-float"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-24 reveal">
          <h2 className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-6">Execution</h2>
          <h3 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tighter">
            We build what others <span className="text-white/20 italic">dream</span> of.
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <div 
              key={service.id}
              className={`reveal group relative p-10 rounded-[3rem] bg-[#0a0c12] border border-white/5 hover:border-gold/50 transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] overflow-hidden`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="absolute inset-0 moving-gradient opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-gold mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-black text-white mb-2 tracking-tight group-hover:text-gold transition-colors">{service.title}</h4>
                <p className="text-gray-500 text-sm font-medium mb-6 uppercase tracking-widest">{service.subtitle}</p>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <button 
                  onClick={() => setSelectedService(service)}
                  className="flex items-center gap-3 text-sm font-black text-white uppercase tracking-[0.2em] group/btn"
                >
                  Explore <ChevronRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA Section */}
        <div className="mt-32 reveal">
          <div className="bg-gradient-to-r from-navy to-[#0a0c12] border border-gold/20 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <h4 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">Ready to Scale?</h4>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
              Join the ranks of ambitious companies seeing the digital world through the hub.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-4 px-12 py-6 rounded-2xl gold-gradient text-black font-black text-xl hover:shadow-[0_20px_40px_rgba(212,175,55,0.3)] transition-all transform hover:-translate-y-1"
            >
              Book a Call <ArrowRight size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Detail Modal Overlay */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-xl animate-fade-in"
            onClick={() => setSelectedService(null)}
          ></div>
          
          <div className="relative w-full max-w-6xl bg-[#0a0c12] rounded-[3.5rem] border border-white/10 shadow-3xl overflow-hidden flex flex-col md:flex-row animate-[reveal_0.6s_ease-out]">
            {/* Visual Side */}
            <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
               <img src={selectedService.visual} alt={selectedService.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110" />
               <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c12] via-transparent to-transparent hidden md:block"></div>
               <div className="absolute inset-0 bg-navy/40"></div>
            </div>
            
            {/* Content Side */}
            <div className="md:w-1/2 p-10 md:p-20 relative flex flex-col justify-center">
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-8 right-8 text-gray-500 hover:text-white transition-colors"
              >
                <X size={32} />
              </button>
              
              <div className="inline-flex items-center gap-3 text-gold text-xs font-black uppercase tracking-[0.4em] mb-8">
                {selectedService.icon}
                Service Deep Dive
              </div>
              
              <h5 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter">
                {selectedService.title}
              </h5>
              
              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                {selectedService.description}
              </p>
              
              <div className="space-y-8 mb-16">
                {selectedService.steps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-6 group/step">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gold group-hover/step:bg-gold group-hover/step:text-black transition-all">
                      {step.icon}
                    </div>
                    <div>
                      <span className="block text-white font-black text-sm uppercase tracking-widest mb-1">{step.label}</span>
                      <p className="text-gray-500 text-sm">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <a 
                href="#contact" 
                onClick={() => setSelectedService(null)}
                className="w-full py-5 rounded-2xl bg-white text-black font-black text-center text-lg hover:bg-gold transition-all shadow-xl"
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
