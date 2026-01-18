
import React from 'react';
import { ArrowRight, Globe, Shield, Zap } from 'lucide-react';

const PickApp: React.FC = () => {
  return (
    <section className="py-32 bg-[#0a0c12] relative overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="inline-block px-5 py-2 rounded-xl bg-gold/10 text-gold text-xs font-black uppercase tracking-[0.3em] mb-8">
              Startup Spotlight
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
              Pick.<br />
              <span className="text-white/20">The Smart Edge.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-lg font-medium leading-relaxed">
              Pick isn't just a tool; it's a revolutionary way to observe and manage your digital footprint. Integrated intelligence at your fingertips.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white font-bold">
                  <div className="p-2 rounded-lg bg-white/5 text-gold"><Zap size={18} fill="currentColor" /></div>
                  Instant Sync
                </div>
                <p className="text-sm text-gray-500">Real-time data synchronization across all enterprise endpoints.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white font-bold">
                  <div className="p-2 rounded-lg bg-white/5 text-gold"><Shield size={18} fill="currentColor" /></div>
                  Vault Security
                </div>
                <p className="text-sm text-gray-500">End-to-end encryption with zero-trust architectural principles.</p>
              </div>
            </div>

            <button className="group px-10 py-5 rounded-2xl border-2 border-gold text-gold font-black text-lg hover:bg-gold hover:text-black transition-all duration-500 flex items-center gap-3">
              Explore Pick
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center relative">
            {/* Visual background glow */}
            <div className="absolute w-[120%] h-[120%] bg-gold/10 blur-[120px] rounded-full"></div>
            
            {/* Main Mockup */}
            <div className="relative group perspective-1000">
              <div className="w-[320px] h-[650px] bg-black rounded-[4rem] border-[12px] border-[#15171e] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-3">
                 <div className="h-full w-full bg-[#05070a] flex flex-col p-8">
                    <div className="flex justify-between items-center mb-12">
                       <div className="w-10 h-10 rounded-full gold-gradient shadow-lg shadow-gold/20 flex items-center justify-center text-black font-black text-xs italic">P</div>
                       <div className="flex gap-2">
                          <div className="w-2 h-2 rounded-full bg-white/20"></div>
                          <div className="w-2 h-2 rounded-full bg-gold"></div>
                       </div>
                    </div>
                    
                    <div className="space-y-12 mb-auto">
                       <div className="space-y-4">
                          <div className="h-2 w-1/3 bg-white/10 rounded-full"></div>
                          <div className="h-8 w-full bg-white/5 rounded-2xl border border-white/5"></div>
                       </div>
                       <div className="h-[250px] w-full bg-gradient-to-t from-gold/30 to-transparent rounded-[2.5rem] relative overflow-hidden flex items-end p-6 border border-gold/20">
                          <div className="w-full h-1/2 bg-white/5 backdrop-blur-md rounded-2xl"></div>
                       </div>
                    </div>

                    <div className="pt-10">
                       <div className="text-3xl font-black text-white italic tracking-tighter mb-1">PICK APP</div>
                       <div className="text-[9px] text-gold font-black uppercase tracking-[0.3em]">Next-Gen Ops</div>
                    </div>
                 </div>
              </div>
              
              {/* Secondary Floating Card */}
              <div className="absolute -left-16 bottom-20 w-56 p-6 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-3xl animate-float hidden md:block">
                 <Globe className="text-gold mb-4" size={28} />
                 <h4 className="text-white font-bold mb-1 text-sm">Global Reach</h4>
                 <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
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
