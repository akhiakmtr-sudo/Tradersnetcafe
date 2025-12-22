import React from 'react';

export const HowToJoin: React.FC = () => {
  return (
    <>
      {/* WORKSHOPS */}
      <section className="relative h-[80vh] w-full overflow-hidden flex flex-col justify-start">
        <div 
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 pt-20 h-full flex justify-end items-start">
          <div className="glass-card p-8 md:p-12 rounded-[2.5rem] max-w-lg shadow-[0_30px_60px_rgba(0,0,0,0.4)] border-none bg-gradient-to-br from-[#b58916]/90 to-[#8c6a11]/90 backdrop-blur-md">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-6 text-center">Trading Workshops</h3>
            <p className="text-white/95 text-lg md:text-xl font-medium leading-relaxed text-center">
              Learn at your pace. From beginner to pro-level – tailored programs on Forex, Crypto, Stocks, and Technical Analysis – with certifications.
            </p>
          </div>
        </div>
      </section>

      {/* COMMUNITY & CHILL */}
      <section className="relative min-h-screen w-full bg-gradient-to-b from-[#b58916]/30 to-black py-32 overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="w-full flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover" 
                alt="Community sessions" 
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-8">
            <div className="glass-card p-10 rounded-[3rem] shadow-2xl border-none bg-gradient-to-br from-[#1a1a1a]/95 to-black/95">
              <h3 className="text-[#b58916] text-2xl md:text-3xl font-bold mb-6 text-center">Investment Talk Nights</h3>
              <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed text-center">
                Weekly community sessions where experts, guests, or even members share insights about trading, investing, and financial independence – in a cozy café vibe.
              </p>
            </div>
            <div className="glass-card p-10 rounded-[3rem] shadow-2xl border-none bg-gradient-to-br from-[#1a1a1a]/95 to-black/95">
              <h3 className="text-[#b58916] text-2xl md:text-3xl font-bold mb-6 text-center">Chill & Create Zone</h3>
              <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed text-center">
                A relaxed spot to brainstorm business ideas, journal your trades, or simply enjoy creative conversations. Because great minds think better over good coffee.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
