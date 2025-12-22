import React from 'react';

export const Benefits: React.FC = () => {
  return (
    <>
      {/* VISION & MISSION */}
      <section id="vision" className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black overflow-hidden py-32">
        <div 
          className="absolute inset-0 opacity-40 bg-center bg-cover scale-110"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611974717528-58700a3d6995?auto=format&fit=crop&q=80&w=2000')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        
        <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start max-w-lg">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">Our Vision</h2>
            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
              To build a creative trading community café where practice, collaboration, and innovation meet — shaping the next generation of smart traders and financial thinkers.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start max-w-lg">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">Our Mission</h2>
            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
              To make trading, investing, and learning accessible to everyone — in an inspiring, collaborative, and coffee-fueled environment.
            </p>
          </div>
        </div>
      </section>

      {/* MENTORS */}
      <section className="relative w-full bg-[#121212] py-32 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 flex justify-center">
             <div className="w-full max-w-md aspect-square bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#b58916]/20 shadow-2xl p-4">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-80 mix-blend-screen" alt="Mentors" />
             </div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="font-heading text-4xl md:text-6xl mb-10">Our Mentors</h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light mb-6">
              Guided by experience, driven by clarity. Our mentors bring years of hands-on market exposure across Indian and U.S. markets.
            </p>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
              They don’t just share strategies—they share perspective, discipline, and real-world insights. What sets them apart is live practice with mentors—learning by doing, side by side.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="relative w-full bg-black py-32">
        <div className="container mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="w-full md:w-1/2 flex justify-center">
             <div className="w-full max-w-md aspect-square bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#b58916]/20 shadow-2xl p-4">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-80 mix-blend-screen" alt="Team" />
             </div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left space-y-12">
            <h2 className="font-heading text-4xl md:text-6xl">Team</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-[#b58916] text-xl font-medium tracking-widest uppercase mb-2">IT & Social Media</h3>
                <p className="text-gray-400 font-light leading-relaxed">Platform management, online events, live trading sessions, and digital promotions. They ensure the café stays connected, smart, and tech-driven.</p>
              </div>
              <div>
                <h3 className="text-[#b58916] text-xl font-medium tracking-widest uppercase mb-2">Finance</h3>
                <p className="text-gray-400 font-light leading-relaxed">Ensuring smooth operations for both our internal activities and investor partnerships. Focused on accuracy, clarity, and sustainability in every transaction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
