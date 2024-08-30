'use client';
import NavBar from './components/navbar.js';
import Hero from './components/hero.js';
import Features from './components/features.js';
import Faq from './components/faq.js';

export default function Home() {

  return (
    <main className="flex min-h-screen h-fit flex-col items-center justify-center relative">
    
      <NavBar />
      <Hero />
      <Features/>
      <Faq/>
    </main>
  );
}
