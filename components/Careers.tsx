import React from 'react';

export const Careers: React.FC = () => {
  return (
    <section id="members" className="relative min-h-screen w-full bg-gradient-to-br from-black via-[#0a0a0a] to-[#b58916]/80 flex items-center py-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-6xl">
        <div className="flex flex-col gap-12">
          
          <div className="flex flex-col gap-8">
            <h2 className="font-heading text-6xl md:text-7xl lg:text-8xl tracking-widest">MEMBERSHIP</h2>
            <div className="flex gap-6">
              <button className="px-10 py-3 rounded-full bg-gradient-to-r from-[#1a1a1a] to-[#b58916] text-white font-medium tracking-widest uppercase text-sm hover:scale-105 transition-transform shadow-xl">
                Register
              </button>
              <button className="px-10 py-3 rounded-full bg-gradient-to-r from-[#1a1a1a] to-[#b58916] text-white font-medium tracking-widest uppercase text-sm hover:scale-105 transition-transform shadow-xl">
                Login
              </button>
            </div>
          </div>

          <div className="max-w-3xl space-y-6">
            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide">Become a Member of Traders Net Café</h3>
            <p className="text-gray-200 text-lg md:text-xl font-light leading-relaxed">
              Practice. Observe. Grow with real market professionals. Join Traders Net Café and get access to a focused trading environment where aspiring and active traders come together to practice, observe strategies, and sharpen market skills under experienced guidance.
            </p>
          </div>

          <div className="flex flex-col gap-8 pt-12">
            <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl italic tracking-tight font-light">Monthly Membership Plan</h3>
            
            <div className="space-y-4">
              <div className="text-2xl md:text-3xl font-medium tracking-wide">AED 499 / Month</div>
              <p className="text-gray-300 text-lg md:text-xl italic font-light">
                A simple, affordable plan designed for serious market participants.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold">What’s Included:</h4>
              <ul className="space-y-2 text-gray-200 text-lg md:text-xl font-light list-none">
                <li>• Access to Traders Net Café trading environment</li>
                <li>• Live market observation sessions</li>
                <li>• Practice setups for U.S. market instruments</li>
                <li>• Interaction with experienced traders</li>
                <li>• Community discussions and market insights</li>
                <li>• One-month flexible membership (no long-term commitment)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
