'use client';

import { useState } from 'react';
import IntroLoader from '../components/intro/IntroLoader';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Research from '../components/sections/Research';
import Contact from '../components/sections/Contact';

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      <IntroLoader onComplete={() => setIntroComplete(true)} />

      {introComplete && (
        <main className="min-h-screen bg-dark-base">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Research />
          <Contact />
        </main>
      )}
    </>
  );
}