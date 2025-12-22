import React from 'react';

export const HeroVideo: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full flex flex-col shrink-0 overflow-hidden">
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://i.postimg.cc/QttB25Ly/IMG-20251102-WA0001-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      <main className="relative z-10 flex-grow flex flex-col items-center justify-center pt-20">
        <div className="flex flex-col items-center animate-fade-in-scale relative">
          {/* "Launching" Text - Styled to overlap naturally */}
          <h1 className="font-allura text-[8rem] md:text-[14rem] text-white leading-none z-20 drop-shadow-2xl select-none pointer-events-none mb-[-4rem] md:mb-[-7rem]">
            Launching
          </h1>
          
          {/* Clean Logo - No redundant background box */}
          <div className="relative w-[260px] md:w-[480px] z-10">
            <img
              src="https://res.cloudinary.com/dsamz0zji/image/upload/v1766433183/Untitled_design_1_xmmrsm.png"
              alt="Trader's Net Cafe"
              className="w-full h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
      </main>

      {/* Hero Footer Actions */}
      <footer className="relative z-10 w-full flex justify-between items-end px-8 md:px-12 pb-10">
        <a
          href="https://wa.me/971504161426"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-full backdrop-blur-xl border border-white/10 transition-all duration-300 group"
        >
          <div className="w-6 h-6 flex items-center justify-center bg-green-500 rounded-full">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.296-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
          </div>
          <span className="text-[10px] md:text-[11px] font-semibold tracking-widest uppercase">Chat with us</span>
        </a>

        <a href="#members" className="group flex items-center gap-4">
          <span className="text-[11px] md:text-[13px] font-medium tracking-[0.3em] uppercase">Members</span>
          <div className="w-10 h-10 flex items-center justify-center border border-white/30 rounded-full group-hover:border-[#b58916] group-hover:bg-[#b58916]/10 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </a>
      </footer>
    </section>
  );
};