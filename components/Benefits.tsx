import React from 'react';

export const Benefits: React.FC = () => {
  const bgImage1 = 'https://res.cloudinary.com/dsamz0zji/image/upload/v1766443255/Website_-_Traders_Net_Cafe_ermald.png';
  const bgImage2 = 'https://res.cloudinary.com/dsamz0zji/image/upload/v1766443777/Website_-_Traders_Net_Cafe_1_zaac8d.png';

  return (
    <>
      {/* VISION & MISSION */}
      <section id="vision" className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black overflow-hidden py-32">
        {/* Background Image - Full Opacity */}
        <div 
          className="absolute inset-0 opacity-100 bg-center bg-cover scale-100"
          style={{ backgroundImage: `url('${bgImage1}')` }}
        ></div>
        
        <div className="relative z-10 container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            
            {/* Vision Column */}
            <div className="flex flex-col items-center">
              <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl mb-12 tracking-[0.2em] text-white text-center drop-shadow-[0_4px_12px_rgba(0,0,0,1)]">
                OUR VISION
              </h2>
              <div className="bg-[#1a1310]/90 backdrop-blur-md p-10 md:p-12 rounded-xl border border-white/10 shadow-2xl h-full flex items-center justify-center">
                <p className="text-white text-lg md:text-xl font-medium leading-relaxed text-center drop-shadow-md">
                  To build a creative trading community café where practice, collaboration, and innovation meet — shaping the next generation of smart traders and financial thinkers.
                </p>
              </div>
            </div>

            {/* Mission Column */}
            <div className="flex flex-col items-center">
              <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl mb-12 tracking-[0.2em] text-white text-center drop-shadow-[0_4px_12px_rgba(0,0,0,1)]">
                OUR MISSION
              </h2>
              <div className="bg-[#1a1310]/90 backdrop-blur-md p-10 md:p-12 rounded-xl border border-white/10 shadow-2xl h-full flex items-center justify-center">
                <p className="text-white text-lg md:text-xl font-medium leading-relaxed text-center drop-shadow-md">
                  To make trading, investing, and learning accessible to everyone — in an inspiring, collaborative, and coffee-fueled environment.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MENTORS */}
      <section className="relative w-full h-[768px] flex items-center bg-black border-t border-white/5 overflow-hidden">
        {/* Background Image - Full Opacity */}
        <div 
          className="absolute inset-0 opacity-100 bg-center bg-cover"
          style={{ backgroundImage: `url('${bgImage2}')` }}
        ></div>
        
        <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 flex justify-center">
             <div className="w-full max-w-md aspect-square bg-black/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#b58916]/50 shadow-2xl p-4">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover mix-blend-normal" alt="Mentors" />
             </div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left bg-black/80 backdrop-blur-lg p-10 rounded-2xl border border-[#b58916]/30 shadow-2xl">
            <h2 className="font-heading text-4xl md:text-6xl mb-6 tracking-[0.1em] text-white">Our Mentors</h2>
            <p className="text-white text-lg md:text-xl leading-relaxed font-normal mb-4">
              Guided by experience, driven by clarity. Our mentors bring years of hands-on market exposure across Indian and U.S. markets.
            </p>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed font-light">
              They don’t just share strategies—they share perspective, discipline, and real-world insights. What sets them apart is live practice with mentors—learning by doing, side by side.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="relative w-full h-[768px] flex items-center bg-black overflow-hidden">
        {/* Background Image - Full Opacity */}
        <div 
          className="absolute inset-0 opacity-100 bg-center bg-cover"
          style={{ backgroundImage: `url('${bgImage2}')` }}
        ></div>

        <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="w-full md:w-1/2 flex justify-center">
             <div className="w-full max-w-md aspect-square bg-black/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#b58916]/50 shadow-2xl p-4">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover mix-blend-normal" alt="Team" />
             </div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left space-y-10 bg-black/80 backdrop-blur-lg p-10 rounded-2xl border border-[#b58916]/30 shadow-2xl">
            <h2 className="font-heading text-4xl md:text-6xl tracking-[0.1em] text-white">Team</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-[#b58916] text-xl font-bold tracking-widest uppercase mb-2">IT & Social Media</h3>
                <p className="text-white font-normal leading-relaxed text-lg">Platform management, online events, live trading sessions, and digital promotions. They ensure the café stays connected, smart, and tech-driven.</p>
              </div>
              <div>
                <h3 className="text-[#b58916] text-xl font-bold tracking-widest uppercase mb-2">Finance</h3>
                <p className="text-white font-normal leading-relaxed text-lg">Ensuring smooth operations for both our internal activities and investor partnerships. Focused on accuracy, clarity, and sustainability in every transaction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};