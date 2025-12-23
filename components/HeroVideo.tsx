import React from 'react';

export const HeroVideo: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full flex flex-col shrink-0 overflow-hidden bg-black">
      {/* Background Image - Clearer, no heavy dark overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://i.postimg.cc/QttB25Ly/IMG-20251102-WA0001-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.5px]"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center pt-20">
        <div className="flex flex-col items-center animate-fade-in-scale">
          
          <h1 className="font-allura text-[7rem] md:text-[10rem] text-white leading-none mb-12 md:mb-16 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] select-none">
            Launching
          </h1>
          
          <div className="w-[220px] md:w-[420px]">
            <img
              src="https://res.cloudinary.com/dsamz0zji/image/upload/v1766435137/Untitled_design_3_iwdkwo.png"
              alt="Trader's Net Cafe"
              className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            />
          </div>
        </div>
      </main>

      {/* Hero Footer Actions */}
      <footer className="relative z-10 w-full flex justify-end items-end px-8 md:px-12 pb-10">
        <a href="#members" className="group flex items-center gap-4 bg-black/30 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
          <span className="text-[10px] md:text-[12px] font-medium tracking-[0.4em] uppercase text-white">Members</span>
          <div className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full group-hover:border-[#b58916] group-hover:bg-[#b58916]/20 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </a>
      </footer>
    </section>
  );
};