
import React, { useState, useEffect, createContext, useContext } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

type Language = 'en' | 'ar';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div className={`min-h-screen flex flex-col selection:bg-[#d4af37] selection:text-white bg-[#05070a] ${lang === 'ar' ? 'font-arabic' : ''}`}>
        <Header scrolled={scrolled} />
        <main className="flex-grow">
          <HomePage />
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
