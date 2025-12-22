import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="w-full bg-black text-white flex flex-col">
      {/* Upper Logo Strip with Gradient */}
      <div className="relative w-full py-16 flex flex-col items-center justify-center bg-gradient-to-r from-black via-[#b58916]/40 to-black overflow-hidden border-t border-white/5">
        <div className="relative z-10 flex flex-col items-center max-w-[280px] md:max-w-[320px]">
          <img
            src="https://res.cloudinary.com/dsamz0zji/image/upload/v1766433183/Untitled_design_1_xmmrsm.png"
            alt="Trader's Net Cafe"
            className="w-full h-auto mb-6"
          />
          <div className="text-[10px] md:text-[12px] font-medium tracking-[0.4em] text-white/60 uppercase pt-4 w-full text-center border-t border-white/10">
            Connect | Practice | Master
          </div>
        </div>
      </div>

      {/* Lower Info Strip (3 Columns) */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 text-center uppercase tracking-[0.2em] text-xs font-light">
          
          {/* Column 1: Location */}
          <div className="flex flex-col items-center gap-4">
            <h4 className="text-sm font-semibold mb-2">Location</h4>
            <p className="text-gray-300">Practice Hub</p>
            <p className="text-gray-300">Tel: +971 50 416 1426</p>
            <a href="mailto:tradersnetcafe@gmail.com" className="text-gray-300 hover:text-[#b58916] transition-colors lowercase">tradersnetcafe@gmail.com</a>
          </div>

          {/* Column 2: Business Hours */}
          <div className="flex flex-col items-center gap-4">
            <h4 className="text-sm font-semibold mb-2">Business Hours</h4>
            <p className="text-gray-300">Monday to Friday 9am - 7pm</p>
            <a href="http://www.tradersnetcafe.com" target="_blank" rel="noopener noreferrer" className="mt-4 text-base md:text-lg font-bold tracking-[0.2em] text-white hover:text-[#b58916] transition-colors">
              WWW.TRADERSNETCAFE.COM
            </a>
          </div>

          {/* Column 3: Get Social */}
          <div className="flex flex-col items-center gap-6">
            <h4 className="text-sm font-semibold mb-2">Get Social</h4>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#b58916] transition-colors p-2 border border-white/20 rounded-full hover:border-[#b58916]">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-[#b58916] transition-colors p-2 border border-white/20 rounded-full hover:border-[#b58916]">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44-1.44-.645-1.44-1.44.644-1.44 1.44-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/20 uppercase tracking-[0.3em]">
           <p>&copy; 2025 TRADERS NET CAFE. ALL RIGHTS RESERVED.</p>
           <div className="flex gap-8 mt-6 md:mt-0">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
           </div>
        </div>
      </div>
    </footer>
  );
};