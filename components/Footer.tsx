
import React from 'react';
import { useLanguage } from '../App';

const Footer: React.FC = () => {
  const { lang } = useLanguage();
  
  return (
    <footer className="bg-[#05070a] pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-5 bg-black border border-white/10 rounded-md flex items-center justify-center">
              <div className="w-1.5 h-1.5 border border-gold rounded-full"></div>
            </div>
            <span className="text-lg font-black tracking-tighter text-white uppercase italic">
              Lookers<span className="text-gold">Hub</span>
            </span>
          </div>
          
          <p className="text-gray-500 text-[10px] uppercase tracking-widest font-black">
            {lang === 'en' 
              ? `© ${new Date().getFullYear()} LookersHub. All rights reserved.` 
              : `© ${new Date().getFullYear()} لوكرز هب. جميع الحقوق محفوظة.`}
          </p>
          
          <div className="flex items-center gap-8 text-xs font-black text-gray-500 uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
              {lang === 'en' ? 'Systems Active' : 'الأنظمة نشطة'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
