import React from 'react';

export const Services: React.FC = () => {
  return (
    <>
      {/* MODULE 1: CORE SPACES */}
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

      {/* MODULE 2: CONNECTION */}
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

      {/* MODULE 3: STREAMING & SIMULATION */}
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
    </>
  );
};
