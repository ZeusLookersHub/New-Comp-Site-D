import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#05070a] flex flex-col items-center justify-center transition-opacity duration-700">
      <style>
        {`
          @keyframes observe {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-8px); }
            75% { transform: translateX(8px); }
          }
          @keyframes pulse-glow {
            0%, 100% { opacity: 0.5; filter: blur(8px); }
            50% { opacity: 1; filter: blur(12px); }
          }
          .animate-observe {
            animation: observe 4s ease-in-out infinite;
          }
          .animate-pulse-glow {
            animation: pulse-glow 2s ease-in-out infinite;
          }
        `}
      </style>
      
      <div className="relative flex flex-col items-center">
        {/* The Observing Eyes */}
        <div className="flex gap-4 animate-observe">
          <div className="relative">
            <div className="w-5 h-5 rounded-full bg-gold shadow-[0_0_20px_rgba(230,193,94,0.6)] relative z-10"></div>
            <div className="absolute inset-0 w-5 h-5 rounded-full bg-gold/40 animate-pulse-glow"></div>
          </div>
          <div className="relative">
            <div className="w-5 h-5 rounded-full bg-gold shadow-[0_0_20px_rgba(230,193,94,0.6)] relative z-10"></div>
            <div className="absolute inset-0 w-5 h-5 rounded-full bg-gold/40 animate-pulse-glow"></div>
          </div>
        </div>

        {/* Brand Name */}
        <div className="mt-12 text-center">
          <span className="text-sm font-black tracking-[0.6em] text-white uppercase italic opacity-40">
            Lookers<span className="text-gold">Hub</span>
          </span>
        </div>
        
        {/* Loading Progress Bar - Subtle */}
        <div className="mt-8 w-32 h-[1px] bg-white/5 overflow-hidden">
          <div className="h-full bg-gold/40 w-full -translate-x-full animate-[progress_2s_infinite]"></div>
        </div>
        <style>
          {`
            @keyframes progress {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(100%); }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Loader;