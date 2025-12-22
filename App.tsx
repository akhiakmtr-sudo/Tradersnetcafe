import React from 'react';

const TradersGold = "#b58916";

const NavItem = ({ label, href }: { label: string; href: string }) => (
  <a
    href={href}
    className="text-[11px] font-medium tracking-[0.2em] text-white/80 hover:text-white transition-colors duration-200 uppercase"
  >
    {label}
  </a>
);

export default function App() {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#vision' },
    { label: 'Services', href: '#services' },
    { label: 'Members', href: '#members' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <div className="relative min-h-screen w-full bg-black text-white flex flex-col overflow-x-hidden font-sans scroll-smooth">
      
      {/* SECTION 1: HERO (Image 1) */}
      <section id="home" className="relative h-screen w-full flex flex-col shrink-0">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://i.postimg.cc/QttB25Ly/IMG-20251102-WA0001-1.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[0.5px]"></div>
        </div>

        <header className="relative z-20 w-full flex justify-end items-center px-12 py-8">
          <nav className="hidden md:flex gap-10">
            {navItems.map((item) => (
              <NavItem key={item.label} label={item.label} href={item.href} />
            ))}
          </nav>
        </header>

        <main className="relative z-10 flex-grow flex flex-col items-center justify-center -mt-16">
          <div className="flex flex-col items-center animate-fade-in-scale">
            <h1 className="font-allura text-[9rem] md:text-[13rem] text-white leading-none mb-[-3.5rem] md:mb-[-5rem] z-20 drop-shadow-2xl">
              Launching
            </h1>
            <div className="relative w-[280px] md:w-[500px] p-4 bg-[#1a1a1a]/90 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5">
              <img
                src="https://i.postimg.cc/dtBNPBqG/TRADERS-CAFE-png.png"
                alt="Trader's Net Cafe"
                className="w-full h-auto"
              />
            </div>
          </div>
        </main>

        <footer className="relative z-10 w-full flex justify-between items-end px-12 pb-10">
          <a
            href="https://wa.me/971504161426"
            className="flex items-center gap-3 bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-full backdrop-blur-xl border border-white/10 transition-all duration-300 group"
          >
            <div className="w-6 h-6 flex items-center justify-center bg-green-500 rounded-full">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.296-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            </div>
            <span className="text-[11px] font-semibold tracking-widest uppercase">Chat with us</span>
          </a>

          <a href="#members" className="group flex items-center gap-4">
            <span className="text-[12px] md:text-[14px] font-medium tracking-[0.3em] uppercase">Members</span>
            <div className="w-10 h-10 flex items-center justify-center border border-white/30 rounded-full group-hover:border-[#b58916] group-hover:bg-[#b58916]/10 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </a>
        </footer>
      </section>

      {/* SECTION 2: VISION & MISSION (Image 2) */}
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

      {/* SECTION 3: MENTORS (Image 3) */}
      <section className="relative w-full bg-[#121212] py-32 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 flex justify-center">
             {/* Illustration Placeholder */}
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

      {/* SECTION 4: TEAM (Image 4) */}
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

      {/* SECTION 5: SERVICES - MODULE 1 (Image 5) */}
      <section id="services" className="relative h-screen w-full overflow-hidden flex flex-col">
        <div 
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2000')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 pt-32 h-full flex flex-col">
          <h2 className="font-heading text-5xl md:text-7xl mb-auto">Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-32">
            <div className="glass-card p-10 rounded-3xl border-l-4 border-l-[#b58916]">
              <h3 className="text-[#b58916] text-2xl font-bold mb-4 uppercase">Trading Lounge</h3>
              <p className="text-gray-200 font-light text-lg">
                Step into our high-speed trading zone — equipped with pro-level setups, real-time market screens, and powerful Wi-Fi. Trade, track, and triumph — all with a cup of coffee in hand.
              </p>
            </div>
            <div className="glass-card p-10 rounded-3xl border-l-4 border-l-[#b58916]">
              <h3 className="text-[#b58916] text-2xl font-bold mb-4 uppercase">Learning Pods</h3>
              <p className="text-gray-200 font-light text-lg">
                Mini study hubs where beginners and pros exchange knowledge. Attend micro-sessions on Forex, Crypto, and Stock trading — or host your own session to teach and inspire!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: SERVICES - MODULE 2 (Image 6) */}
      <section className="relative min-h-screen w-full bg-[#0a0a0a] flex items-center py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="h-[500px] w-full bg-cover bg-center rounded-2xl opacity-60 mix-blend-lighten" 
               style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000')" }}>
          </div>
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl hover:translate-x-4 transition-transform duration-500">
              <h3 className="text-[#b58916] text-xl font-bold mb-2 uppercase">Trader Connect</h3>
              <p className="text-gray-400 font-light">Meet fellow traders, investors, and financial enthusiasts. Network over cappuccinos, share insights, or form trading circles — your next big idea might start here.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl hover:translate-x-4 transition-transform duration-500 delay-100">
              <h3 className="text-[#b58916] text-xl font-bold mb-2 uppercase">Coffee & Charts</h3>
              <p className="text-gray-400 font-light">Our signature event! A casual blend of market talk and mocha. Discuss global trends, price actions, and strategies — every sip fuels your next move.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl hover:translate-x-4 transition-transform duration-500 delay-200">
              <h3 className="text-[#b58916] text-xl font-bold mb-2 uppercase">Mentorship Zone</h3>
              <p className="text-gray-400 font-light">Book 1-on-1 or group sessions with experienced traders. Learn smart strategies, risk management, and market psychology — practical wisdom brewed fresh daily.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: SERVICES - MODULE 3 (Image 7) */}
      <section className="relative min-h-screen w-full bg-[#121212] flex items-center py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#b58916]/5 transform skew-x-12 translate-x-32"></div>
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="glass-card p-10 rounded-2xl hover:-translate-x-4 transition-transform duration-500">
              <h3 className="text-[#b58916] text-2xl font-bold mb-4 uppercase">Global Market Café Stream</h3>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                Live market screens featuring Forex, stocks, and crypto updates — projected in real-time. Stay connected to the world’s pulse as you sip and study.
              </p>
            </div>
            <div className="glass-card p-10 rounded-2xl hover:-translate-x-4 transition-transform duration-500 delay-100">
              <h3 className="text-[#b58916] text-2xl font-bold mb-4 uppercase">Simulation Corner</h3>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                Test your trading skills in a demo environment — risk-free and realistic. Compete in "Trading Battles" or challenge your friends for the top spot!
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 h-[500px] w-full bg-cover bg-center rounded-2xl shadow-2xl" 
               style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000')" }}>
          </div>
        </div>
      </section>

      {/* FOOTER / CONTACT SECTION */}
      <footer id="contact" className="bg-black py-24 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl mb-12">Connect With Us</h2>
          <div className="flex flex-col md:flex-row justify-center gap-10 items-center">
            <a href="mailto:info@tradersnetcafe.com" className="text-xl text-gray-400 hover:text-[#b58916] transition-colors tracking-widest uppercase">info@tradersnetcafe.com</a>
            <div className="h-1 w-1 bg-white/20 rounded-full hidden md:block"></div>
            <a href="tel:+971504161426" className="text-xl text-gray-400 hover:text-[#b58916] transition-colors tracking-widest uppercase">+971 50 416 1426</a>
          </div>
          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-white/30 uppercase tracking-[0.3em]">
             <p>&copy; 2025 TRADERS NET CAFE. ALL RIGHTS RESERVED.</p>
             <div className="flex gap-8 mt-6 md:mt-0">
               <a href="#" className="hover:text-white transition-colors">Privacy</a>
               <a href="#" className="hover:text-white transition-colors">Terms</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
