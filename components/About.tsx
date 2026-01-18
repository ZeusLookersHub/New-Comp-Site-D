
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-sm font-bold text-gold uppercase tracking-[0.3em] mb-6">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 font-serif">Visionary Minds, <br />Reliable Partners.</h3>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                LookersHub was born from the idea that the tech industry needs more than just builders—it needs observers. We look closer at challenges to find the elegant solutions others miss.
              </p>
              <p>
                As an integrated tech and digital services company, we bridge the gap between creative vision and technical execution. Our team of experts is dedicated to your success, acting not just as a vendor, but as a strategic extension of your business.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-12">
              <div>
                <div className="text-3xl font-bold text-white mb-1">100+</div>
                <div className="text-sm text-gold font-semibold uppercase tracking-wider">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">15+</div>
                <div className="text-sm text-gold font-semibold uppercase tracking-wider">Awards</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-sm text-gold font-semibold uppercase tracking-wider">Retention</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                alt="Our Team" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-navy/40 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 gold-gradient p-1 rounded-3xl rotate-6 shadow-2xl">
              <div className="bg-navy w-full h-full rounded-[1.4rem] flex flex-col items-center justify-center p-4 text-center">
                <span className="text-4xl mb-2 italic font-serif text-white font-bold">"</span>
                <p className="text-xs text-gray-300 font-medium">Innovation is not just a buzzword; it's our vision.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
