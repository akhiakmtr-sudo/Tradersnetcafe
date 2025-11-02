import React from 'react';

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-slate-900 text-white flex flex-col overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/QttB25Ly/IMG-20251102-WA0001-1.jpg')",
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Main Content Area */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center p-4 text-center">
        <h1 className="font-allura text-7xl sm:text-8xl md:text-9xl text-white mb-8" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.6)' }}>
          Launching
        </h1>
        <img 
          src="https://i.postimg.cc/1t2j6Gsv/IMG-20251031-WA0021.jpg" 
          alt="Trader's Net Cafe Logo" 
          className="max-w-[14rem] sm:max-w-[16rem] md:max-w-[18rem] w-full animate-fade-in-scale"
        />
      </main>
    </div>
  );
}