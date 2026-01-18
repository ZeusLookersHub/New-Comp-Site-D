
import React, { useEffect } from 'react';
import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#05070a] pt-32 animate-fade-in min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20 reveal">
        <h1 className="text-7xl md:text-[10rem] font-black text-white leading-[0.85] tracking-tighter mb-8">
          Let's <br /> Talk.
        </h1>
        <p className="text-2xl md:text-3xl font-extrabold text-white/30 tracking-tight max-w-2xl">
          Start your transformation today. We are ready to build what's next.
        </p>
      </div>
      
      <div className="reveal">
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;
