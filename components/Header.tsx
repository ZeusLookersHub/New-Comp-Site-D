
import React from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../App';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { lang, setLang } = useLanguage();

  const navLabels = [
    { en: 'Services', ar: 'الخدمات' },
    { en: 'Pick', ar: 'بيك' },
    { en: 'About', ar: 'حولنا' },
    { en: 'Contact', ar: 'اتصل بنا' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#05070a]/95 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center gap-3 group cursor-default">
          <div className="relative w-10 h-7 bg-black rounded-lg border border-white/10 flex items-center justify-center overflow-hidden">
            <div className="flex space-x-1">
              <div className="w-2.5 h-2.5 border-2 border-gold rounded-full bg-white/90"></div>
              <div className="w-2.5 h-2.5 border-2 border-gold rounded-full bg-white/90"></div>
            </div>
          </div>
          <span className="text-xl font-black tracking-tighter text-white uppercase italic">
            Lookers<span className="text-white/40 group-hover:text-gold transition-colors">Hub</span>
          </span>
        </div>

        {/* Desktop Navigation Labels & Toggle */}
        <div className="hidden md:flex items-center space-x-12 rtl:space-x-reverse">
          <nav className="flex items-center space-x-10 rtl:space-x-reverse">
            {navLabels.map((item) => (
              <span 
                key={item.en} 
                className="text-xs font-black text-white/50 hover:text-white transition-all tracking-[0.2em] uppercase cursor-pointer"
              >
                {lang === 'en' ? item.en : item.ar}
              </span>
            ))}
          </nav>

          {/* Language Toggle */}
          <div className="relative flex items-center bg-white/5 p-1 rounded-full border border-white/10 w-24 h-9">
            <div 
              className={`absolute top-1 bottom-1 w-[calc(50%-4px)] gold-gradient rounded-full transition-all duration-500 ease-out ${
                lang === 'en' ? 'left-1' : 'left-[calc(50%+1px)]'
              }`}
            />
            <button 
              onClick={() => setLang('en')}
              className={`relative z-10 flex-1 text-[10px] font-black uppercase tracking-widest transition-colors duration-300 ${
                lang === 'en' ? 'text-black' : 'text-white/40'
              }`}
            >
              EN
            </button>
            <button 
              onClick={() => setLang('ar')}
              className={`relative z-10 flex-1 text-[10px] font-black uppercase tracking-widest transition-colors duration-300 ${
                lang === 'ar' ? 'text-black' : 'text-white/40'
              }`}
            >
              AR
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className="text-[10px] font-black text-gold px-3 py-1.5 rounded-lg bg-gold/10 border border-gold/20"
          >
            {lang === 'en' ? 'AR' : 'EN'}
          </button>
          <button 
            className="text-white p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#05070a] border-b border-white/5 shadow-2xl animate-fade-in">
          <div className="flex flex-col p-8 space-y-6">
            {navLabels.map((item) => (
              <span 
                key={item.en} 
                className="text-2xl font-black text-white py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {lang === 'en' ? item.en : item.ar}
              </span>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
