import React from 'react';

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-slate-900 text-white flex flex-col items-center justify-center overflow-hidden">
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

      {/* Header */}
      <header className="absolute top-0 w-full p-8 z-10">
        <h1 className="text-center text-2xl md:text-3xl font-bold tracking-wider text-white">
          Traders Net Cafe
        </h1>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center">
        <img
          src="https://i.postimg.cc/1t2j6Gsv/IMG-20251031-WA0021.jpg"
          alt="Traders Net Cafe Logo"
          className="w-48 h-48 md:w-64 md:h-64 mb-8"
        />
        <h2 className="text-6xl md:text-8xl font-extrabold text-white uppercase tracking-widest">
          Launching Soon
        </h2>
      </main>
    </div>
  );
}