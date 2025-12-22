import React from 'react';
import { Header } from './components/Header';
import { HeroVideo } from './components/HeroVideo';
import { About } from './components/About';
import { Benefits } from './components/Benefits';
import { Services } from './components/Services';
import { HowToJoin } from './components/HowToJoin';
import { Careers } from './components/Careers';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white flex flex-col overflow-x-hidden font-sans scroll-smooth">
      <Header />
      <HeroVideo />
      <About />
      <Benefits />
      <Services />
      <HowToJoin />
      <Careers />
      <Footer />
    </div>
  );
}
