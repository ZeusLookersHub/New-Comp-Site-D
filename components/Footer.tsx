
import React from 'react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
             <div className="flex items-center space-x-2 mb-8">
               <div className="relative w-10 h-7 bg-gradient-to-br from-black to-gray-800 rounded-full border border-gold/50 flex items-center justify-center overflow-hidden">
                  <div className="flex space-x-1">
                    <div className="w-2.5 h-2.5 border-2 border-gold rounded-full bg-white"></div>
                    <div className="w-2.5 h-2.5 border-2 border-gold rounded-full bg-white"></div>
                  </div>
               </div>
               <span className="text-xl font-bold tracking-tighter text-white uppercase">
                 Lookers<span className="text-gold">Hub</span>
               </span>
             </div>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              We See Differently. Transforming the digital landscape through innovation, precision, and a visionary approach to tech.
            </p>
            <div className="flex items-center gap-4">
              {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-gold hover:text-gold transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Our Services</a></li>
              <li><a href="#pick" className="hover:text-gold transition-colors">Pick App</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} LookersHub. All rights reserved. 
            <span className="ml-4 italic font-serif opacity-50">Integrated Tech & Digital Services Company</span>
          </p>
          <div className="flex items-center gap-8 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
