
import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Pick', href: '#pick' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#05070a]/80 backdrop-blur-xl py-4 border-b border-white/5 shadow-2xl' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <a href="#home" className="flex items-center gap-3 group">
           <div className="flex items-center space-x-3">
             <div className="relative w-12 h-8 bg-black rounded-[0.75rem] border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-gold/50 transition-colors">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 border-2 border-gold rounded-full bg-white/90"></div>
                  <div className="w-3 h-3 border-2 border-gold rounded-full bg-white/90"></div>
                </div>
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
             </div>
             <span className="text-2xl font-black tracking-tighter text-white uppercase italic">
               Lookers<span className="text-white/40 group-hover:text-gold transition-colors">Hub</span>
             </span>
           </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xs font-black text-white/50 hover:text-white transition-all tracking-[0.2em] uppercase"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-8 py-3 rounded-xl bg-white text-black text-sm font-black hover:bg-gold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/5"
          >
            START A PROJECT
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#05070a] border-b border-white/5 shadow-2xl animate-fade-in">
          <div className="flex flex-col p-8 space-y-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-2xl font-black text-white py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="mt-6 w-full text-center py-5 rounded-2xl gold-gradient text-black font-black text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Start a Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
