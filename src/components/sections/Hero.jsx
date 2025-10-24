'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [ripples, setRipples] = useState([]);

  const createRipple = (e) => {
    const newRipple = {
      x: e.clientX,
      y: e.clientY,
      id: Date.now(),
    };
    setRipples([...ripples, newRipple]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 2000);
  };

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects, [id="projects"]');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // Fallback: scroll by viewport height
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden cursor-pointer"
      onClick={createRipple}
      style={{
        background: 'linear-gradient(180deg, #001a33 0%, #003d5c 30%, #0a4d68 70%, #001a33 100%)'
      }}
    >
      {/* Animated Wave Layers */}
      <div className="absolute inset-0 opacity-30">
        <svg className="absolute bottom-0 w-full h-96" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <motion.path
            fill="#00d4ff"
            fillOpacity="0.2"
            d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,122.7C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            animate={{
              d: [
                "M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,122.7C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,133.3C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,122.7C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
        <svg className="absolute bottom-0 w-full h-96" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <motion.path
            fill="#00d4ff"
            fillOpacity="0.15"
            d="M0,160L48,170.7C96,181,192,203,288,208C384,213,480,203,576,186.7C672,171,768,149,864,154.7C960,160,1056,192,1152,202.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            animate={{
              d: [
                "M0,160L48,170.7C96,181,192,203,288,208C384,213,480,203,576,186.7C672,171,768,149,864,154.7C960,160,1056,192,1152,202.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,202.7C672,213,768,203,864,192C960,181,1056,171,1152,165.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,160L48,170.7C96,181,192,203,288,208C384,213,480,203,576,186.7C672,171,768,149,864,154.7C960,160,1056,192,1152,202.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </svg>
      </div>

      {/* Click Ripple Effects */}
      {ripples.map(ripple => (
        <motion.div
          key={ripple.id}
          className="absolute rounded-full border-2 border-water-cyan pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 0,
            height: 0,
          }}
          initial={{ width: 0, height: 0, opacity: 1 }}
          animate={{
            width: 600,
            height: 600,
            opacity: 0,
            x: -300,
            y: -300,
          }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      ))}

      {/* Flowing Water Bubbles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-water-cyan"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${-10 - Math.random() * 20}%`,
              width: `${4 + Math.random() * 12}px`,
              height: `${4 + Math.random() * 12}px`,
              opacity: 0.4 + Math.random() * 0.4,
              filter: 'blur(1px)',
            }}
            animate={{
              y: [-100, -window.innerHeight - 200],
              x: [0, (Math.random() - 0.5) * 100],
              scale: [1, 1.5, 0.8],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Glowing Light Rays from Bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-96 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at bottom, rgba(0, 212, 255, 0.4) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Main Content */}
      <div className="content-layer max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="text-water-cyan text-2xl md:text-3xl lg:text-4xl font-medium tracking-wider">
            Hello, Guys I'm
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, type: 'spring' }}
          className="text-5xl md:text-7xl lg:text-9xl font-bold mb-6 relative"
        >
          <motion.span
            className="inline-block bg-gradient-to-r from-water-cyan via-white to-water-cyan bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              backgroundSize: '200% 200%',
              textShadow: '0 0 80px rgba(0, 212, 255, 0.6), 0 0 120px rgba(0, 212, 255, 0.4)',
            }}
          >
            GANDHAM MANI SAKETH
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl md:text-3xl text-white/90 mb-4 font-semibold"
        >
          AI/ML Engineer • Full-Stack Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lg md:text-xl text-water-cyan/80 mb-12"
        >
          Building intelligent systems that make an impact
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-wrap gap-6 justify-center mb-16"
        >
          <motion.button
            onClick={scrollToProjects}
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 212, 255, 0.8)' }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-water-cyan text-dark-base font-semibold rounded-lg transition-all duration-300 glow-water"
          >
            View Projects
            <ArrowDown className="inline-block ml-2 group-hover:translate-y-1 transition-transform" size={20} />
          </motion.button>

          <motion.a
            href="/files/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
          >
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex gap-6 justify-center"
        >
          <motion.a
            href="https://github.com/GANDHAMMANI"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-white/5 hover:bg-water-cyan/20 border border-white/10 hover:border-water-cyan transition-all duration-300 glow-water"
            aria-label="GitHub Profile"
          >
            <Github size={24} className="text-white" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/gandhammanisaketh2421/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-white/5 hover:bg-water-cyan/20 border border-white/10 hover:border-water-cyan transition-all duration-300 glow-water"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} className="text-white" />
          </motion.a>

          <motion.a
            href="mailto:gandhammani2421@gmail.com"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-white/5 hover:bg-water-cyan/20 border border-white/10 hover:border-water-cyan transition-all duration-300 glow-water"
            aria-label="Email"
          >
            <Mail size={24} className="text-white" />
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-water-cyan cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            scrollToProjects();
          }}
        >
          <ArrowDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}