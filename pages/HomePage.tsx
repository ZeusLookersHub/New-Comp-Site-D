
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import WhyLookers from '../components/WhyLookers';
import VisionMission from '../components/About';
import CTAPlaceholder from '../components/CTAPlaceholder';

const HomePage: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#05070a]">
      <section className="reveal">
        <Hero />
      </section>
      
      <section className="reveal">
        <WhyLookers />
      </section>

      <section className="reveal">
        <VisionMission />
      </section>
      
      <section className="reveal">
        <CTAPlaceholder />
      </section>
    </div>
  );
};

export default HomePage;
