
import React from 'react';
import { ArrowRight, Globe, Shield, Zap, Sparkles } from 'lucide-react';

const PickApp: React.FC = () => {
  return (
    <section className="py-32 bg-[#0a0c12] relative overflow-hidden border-y border-white/5" id="pick">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          
          <div className="lg:w-1/2 order-2 lg:order-1 reveal">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-gold/10 text-gold text-xs font-black uppercase tracking-[0.3em] mb-8">
              <Sparkles size={14} fill="currentColor" />
              Flagship Project
            </div>
            <h2 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.85]">
              Pick.<br />
              <span className="text-white/20">The Smart Edge.</span>
            </h2>
            <p className="text-2xl text-gray-400 mb-12 max-w-lg font-medium leading-tight tracking-tight">
              A revolutionary way to manage and observe your digital footprint. Integrated intelligence for the next generation of operations.
            </p>
            
            <div className="space-y-6 mb-16">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                  <Zap size={24} fill="currentColor" />
                </div>
                <div>
                  <h4 className="text-white font-black uppercase text-sm tracking-widest">Real-time Sync</h4>
                  <p className="text-gray-500 font-medium">Latency-free data orchestration across the globe.</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="text-white font-black uppercase text-sm tracking-widest">Vault Shield</h4>
                  <p className="text-gray-500 font-medium">Enterprise-grade security in every byte.</p>
                </div>
              </div>
            </div>

            <button className="group px-12 py-6 rounded-3xl border-2 border-gold text-gold font-black text-xl hover:bg-gold hover:text-black transition-all duration-700 flex items-center gap-3 shadow-2xl hover:shadow-gold/20">
              View Project
              <ArrowRight size={24} className="group-hover:translate-x-3 transition-transform" />
            </button>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center relative reveal">
            {/* Visual background glow */}
            <div className="absolute w-[130%] h-[130%] bg-gold/10 blur-[150px] rounded-full pointer-events-none opacity-50"></div>
            
            {/* Main Mockup */}
            <div className="relative group perspective-1000">
              <div className="w-[340px] h-[700px] bg-black rounded-[4.5rem] border-[12px] border-[#15171e] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.9)] overflow-hidden transition-transform duration-1000 group-hover:scale-105 group-hover:-rotate-3 group-hover:shadow-gold/10">
                 <div className="h-full w-full bg-[#05070a] flex flex-col p-10">
                    <div className="flex justify-between items-center mb-16">
                       <div className="w-12 h-12 rounded-2xl gold-gradient shadow-xl shadow-gold/30 flex items-center justify-center text-black font-black text-sm italic">P</div>
                       <div className="flex gap-2.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-gold"></div>
                       </div>
                    </div>
                    
                    <div className="space-y-16 mb-auto">
                       <div className="space-y-5">
                          <div className="h-3 w-1/2 bg-white/10 rounded-full"></div>
                          <div className="h-10 w-full bg-white/5 rounded-2xl border border-white/5"></div>
                       </div>
                       <div className="h-[280px] w-full bg-gradient-to-t from-gold/40 to-transparent rounded-[3rem] relative overflow-hidden flex items-end p-8 border border-gold/10">
                          <div className="w-full h-2/3 bg-black/40 backdrop-blur-2xl rounded-2xl border border-white/5"></div>
                       </div>
                    </div>

                    <div className="pt-12">
                       <div className="text-4xl font-black text-white italic tracking-tighter mb-2">PICK APP</div>
                       <div className="text-xs text-gold font-black uppercase tracking-[0.4em]">Integrated Intelligence</div>
                    </div>
                 </div>
              </div>
              
              {/* Secondary Floating Card */}
              <div className="absolute -left-20 bottom-32 w-64 p-8 rounded-[2.5rem] bg-[#0a0c12]/80 backdrop-blur-3xl border border-white/10 shadow-3xl animate-float hidden md:block">
                 <Globe className="text-gold mb-5" size={32} />
                 <h4 className="text-white font-bold mb-3 text-lg">Global Node</h4>
                 <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] gold-gradient rounded-full"></div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PickApp;
