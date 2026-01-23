import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { lang, setLang } = useLanguage();
  const location = useLocation();

  const navItems = [
    { en: 'Services', ar: 'الخدمات', path: '/services' },
    { en: 'Projects', ar: 'المشاريع', path: '/projects' },
    { en: 'About', ar: 'حولنا', path: '/about' },
    { en: 'Contact', ar: 'اتصل بنا', path: '/contact' },
  ];

  const primaryBtn = { en: 'Start Your Project', ar: 'ابدأ مشروعك' };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-navy/95 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-7 bg-black rounded-lg border border-white/10 flex items-center justify-center overflow-hidden">
            <div className="flex space-x-1">
              <div className="w-2.5 h-2.5 border-2 border-gold rounded-full bg-white/90"></div>
              <div className="w-2.5 h-2.5 border-2 border-gold rounded-full bg-white/90"></div>
            </div>
          </div>
          <span className="text-xl font-black tracking-tighter text-white uppercase italic">
            Lookers<span className="text-white/40 group-hover:text-gold transition-colors">Hub</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-10 rtl:space-x-reverse">
          <nav className="flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <Link 
                key={item.en} 
                to={item.path}
                className={`text-xs font-black transition-all tracking-[0.15em] uppercase hover:text-white ${
                  location.pathname === item.path ? 'text-gold' : 'text-dimGray'
                }`}
              >
                {lang === 'en' ? item.en : item.ar}
              </Link>
            ))}
          </nav>

          {/* Language Switch */}
          <div className="relative flex items-center switch-bg p-1 rounded-full w-24 h-9 overflow-hidden">
            <div 
              className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-gold rounded-full transition-all duration-300 ${
                lang === 'en' ? 'left-1' : 'left-[calc(50%+1px)]'
              }`}
            />
            <button 
              onClick={() => setLang('en')}
              className={`relative z-10 flex-1 text-[10px] font-black uppercase transition-colors duration-300 ${
                lang === 'en' ? 'text-black' : 'text-dimGray'
              }`}
            >
              EN
            </button>
            <button 
              onClick={() => setLang('ar')}
              className={`relative z-10 flex-1 text-[10px] font-black uppercase transition-colors duration-300 ${
                lang === 'ar' ? 'text-black' : 'text-dimGray'
              }`}
            >
              AR
            </button>
          </div>

          {/* Primary CTA Button */}
          <Link 
            to="/start-your-project"
            className="px-6 py-3 bg-gold text-black text-[10px] font-black uppercase tracking-[0.1em] rounded-xl hover:scale-105 transition-transform"
          >
            {lang === 'en' ? primaryBtn.en : primaryBtn.ar}
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-navy border-b border-white/5 shadow-2xl animate-fade-in">
          <div className="flex flex-col p-8 space-y-6">
            {navItems.map((item) => (
              <Link 
                key={item.en} 
                to={item.path}
                className={`text-2xl font-black ${location.pathname === item.path ? 'text-gold' : 'text-white'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {lang === 'en' ? item.en : item.ar}
              </Link>
            ))}
            <Link 
              to="/start-your-project"
              className="py-4 bg-gold text-black text-center font-black uppercase rounded-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              {lang === 'en' ? primaryBtn.en : primaryBtn.ar}
            </Link>
            <div className="flex justify-center pt-4">
               <button 
                onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
                className="text-gold font-bold uppercase tracking-widest"
               >
                 {lang === 'en' ? 'ARABIC' : 'ENGLISH'}
               </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;