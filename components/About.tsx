import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col justify-center py-24 md:py-32">
      {/* Background Gradient/Glow to match the reference */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-[#b58916]/20 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-4xl">
          <h2 className="font-heading text-6xl md:text-8xl mb-12 tracking-[0.15em] opacity-90">
            About Us
          </h2>
          
          <div className="space-y-8 mb-16">
            <p className="text-gray-200 text-lg md:text-xl font-light leading-relaxed max-w-3xl">
              Welcome to Trader’s Net Cafe – Ever wondered what it feels like to sit beside real traders and experience the markets as they move? Step into a focused space where you can practice alongside experienced traders and observe live market strategies as they unfold.
            </p>
            
            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-4xl">
              Built for active market participants, our café blends professional tools, live market access, and a focused trading atmosphere. Trade independently, exchange insights, and sharpen your edge alongside experienced traders across U.S. and Indian markets. At Traders Net Café, it’s not just about trading—it’s about trading with clarity, confidence, and community.
            </p>
          </div>
        </div>

        {/* Featured Image matching the vibe of the reference */}
        <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-white/5">
          <img 
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=2000" 
            alt="Traders collaborating in a cafe environment" 
            className="w-full h-auto object-cover max-h-[600px] opacity-90"
          />
        </div>
      </div>
    </section>
  );
};
