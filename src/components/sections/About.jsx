'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function AboutSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  return (
    <>
      {/* Ocean to Lava Transition */}
      <OceanToLavaTransition />

      {/* About Section */}
      <section
        ref={sectionRef}
        id="about"
        className="relative min-h-screen bg-gradient-to-b from-[#1a0a00] via-[#2d1508] to-[#0f0500] overflow-hidden"
      >
        {/* Lava Bubbles Background */}
        <LavaBubbles />

        {/* Fire Gradient Overlays */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#ff6b35] opacity-10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ff4500] opacity-10 blur-[120px] rounded-full" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#ffd60a] opacity-5 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 relative inline-block">
              <span className="bg-gradient-to-r from-[#ff6b35] via-[#ffd60a] to-[#ff4500] bg-clip-text text-transparent">
                ABOUT ME
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ff6b35] to-[#ff4500]"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scaleX: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </h2>
          </motion.div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              {/* Photo Card - Slides in from Left */}
              <motion.div
                className="lg:col-span-5"
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 1,
                  type: "spring",
                  stiffness: 50,
                  damping: 20
                }}
              >
                <ProfileCard />
              </motion.div>

              {/* Bio Content - Slides in from Right */}
              <motion.div
                className="lg:col-span-7 space-y-6"
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 1,
                  type: "spring",
                  stiffness: 50,
                  damping: 20,
                  delay: 0.2
                }}
              >
                {/* Name & Title Card */}
                <motion.div
                  className="glass-card backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 border border-[#ff6b35]/40 rounded-2xl p-8 shadow-2xl shadow-[#ff6b35]/20 relative overflow-hidden"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 25px 50px -12px rgba(255, 107, 53, 0.5)"
                  }}
                >
                  {/* Animated corner accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#ff6b35]/20 to-transparent"
                    style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-[#ff6b35] via-[#ffd60a] to-[#ff4500] bg-clip-text text-transparent">
                      Gandham Mani Saketh
                    </span>
                  </h3>
                  <p className="text-[#ffe8d6] text-xl mb-2">AI/ML Engineer & Full-Stack Developer</p>
                  <p className="text-[#ffe8d6]/80 text-base mb-4">M.Sc Data Science Student | Co-founder, InnodayVoyagers-AI Hub</p>
                  
                  <div className="flex flex-wrap gap-3 mt-4">
                    <span className="px-4 py-2 bg-gradient-to-r from-[#ff6b35]/20 to-[#ff4500]/20 border border-[#ff6b35]/40 rounded-full text-[#ffd60a] text-sm font-medium">
                      AI/ML Specialist
                    </span>
                    <span className="px-4 py-2 bg-gradient-to-r from-[#ff6b35]/20 to-[#ff4500]/20 border border-[#ff6b35]/40 rounded-full text-[#ffd60a] text-sm font-medium">
                      Full-Stack Developer
                    </span>
                    <span className="px-4 py-2 bg-gradient-to-r from-[#ff6b35]/20 to-[#ff4500]/20 border border-[#ff6b35]/40 rounded-full text-[#ffd60a] text-sm font-medium">
                      Research Scholar
                    </span>
                    <span className="px-4 py-2 bg-gradient-to-r from-[#ff6b35]/20 to-[#ff4500]/20 border border-[#ff6b35]/40 rounded-full text-[#ffd60a] text-sm font-medium">
                      Community Leader
                    </span>
                  </div>
                </motion.div>

                {/* Bio Cards */}
                <BioCard
                  icon="🚀"
                  title="My Journey"
                  description="I'm an AI/ML engineer and full-stack developer passionate about building intelligent systems that solve real-world problems. As co-founder of InnodayVoyagers-AI Hub at PB Siddhartha College, I lead initiatives in peer-to-peer learning and collaborative AI/ML projects. My journey combines academic excellence in Data Science with hands-on experience in developing production-ready AI solutions."
                  delay={0.3}
                  iconAnimation={{
                    rotate: [0, 10, -10, 0],
                  }}
                />

                <BioCard
                  icon="💡"
                  title="What I Do"
                  description="I specialize in building AI-powered applications using Python, TensorFlow, and LLMs. My work spans from developing healthcare assistance systems as an AI Intern at Infosys Springboard to creating institutional management solutions like the PBSC Campus Bridge and Venue Management System. I combine machine learning, NLP, and modern web technologies (Flask, React, Next.js) to deliver impactful digital solutions."
                  delay={0.5}
                  iconAnimation={{
                    scale: [1, 1.2, 1],
                  }}
                />

                <BioCard
                  icon="🎯"
                  title="Current Focus & Achievements"
                  description="Currently pursuing M.Sc in Data Science while actively contributing to AI research—published in Springer's LNNS series at ICICC 2024. Received the Sri Kompalli Kotilingeswara Veerabhadra Rao Memorial AI Innovation Award for developing the PBSC Venue Management System. Competed in national hackathons including Dark Patterns Buster (DoCA & IIT BHU) and secured 4th place in Alteryx Sparked Datathon."
                  delay={0.7}
                  iconAnimation={{
                    y: [0, -5, 0],
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Profile Card Component - 3D Angled Frame with Scroll Animation
function ProfileCard() {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Transform values for 3D rotation as user scrolls
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-35, 0, 35]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.div
      ref={cardRef}
      className="glass-card backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 border-2 border-[#ff6b35]/50 rounded-3xl p-6 shadow-2xl shadow-[#ff6b35]/30 relative overflow-hidden"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
        rotateY,
        rotateX,
        scale,
      }}
      whileHover={{
        y: -8,
        boxShadow: "0 30px 60px -15px rgba(255, 107, 53, 0.6)"
      }}
    >
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(255, 107, 53, 0.3), transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-[#ffd60a]/60 rounded-tl-3xl" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-[#ff6b35]/60 rounded-br-3xl" />

      {/* Photo Container - Rectangle Format, No Rounding */}
      <div className="relative z-10 mb-6">
        <motion.div
          className="relative overflow-hidden shadow-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Gradient Overlay on Hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-[#ff6b35]/50 via-transparent to-transparent z-10 opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Image - Rectangle format keeping original aspect */}
          <div className="relative w-full" style={{ paddingBottom: '133%' }}>
            <Image
              src="/images/files/profile.jpg"
              alt="Gandham Mani Saketh"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Animated Border Glow - No rounded corners */}
          <motion.div
            className="absolute inset-0"
            style={{
              boxShadow: "inset 0 0 30px rgba(255, 107, 53, 0.5)",
            }}
            animate={{
              boxShadow: [
                "inset 0 0 30px rgba(255, 107, 53, 0.3)",
                "inset 0 0 50px rgba(255, 214, 10, 0.5)",
                "inset 0 0 30px rgba(255, 107, 53, 0.3)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>

      {/* Floating Embers Around Card */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-[#ffd60a] rounded-full blur-sm"
          style={{
            left: `${10 + (i * 15)}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#ff6b35]/20 to-transparent pointer-events-none z-0" />
    </motion.div>
  );
}

// Bio Card Component with Scroll & Hover Animations
function BioCard({ icon, title, description, delay, iconAnimation }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"]
  });

  // 3D Tilt effect on scroll
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [25, 0, -25]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 10]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5]);

  return (
    <motion.div
      ref={cardRef}
      className="glass-card backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 border border-[#ff6b35]/40 rounded-2xl p-8 shadow-2xl shadow-[#ff6b35]/20 relative overflow-hidden"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
        rotateY,
        rotateX,
        opacity,
      }}
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: delay,
        type: "spring",
        stiffness: 60,
        damping: 20
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(255, 107, 53, 0.6)",
        rotateY: 0,
        rotateX: 0,
        transition: { duration: 0.3 }
      }}
    >
      {/* Animated corner glow */}
      <motion.div
        className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#ff6b35]/20 to-transparent"
        style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
        animate={{
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Particle effects on hover */}
      <div className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#ffd60a] rounded-full"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -40],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      <div className="flex items-start gap-4 relative z-10">
        <motion.div 
          className="text-4xl filter drop-shadow-lg"
          animate={iconAnimation}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          whileHover={{
            scale: 1.3,
            rotate: 360,
            transition: { duration: 0.5 }
          }}
        >
          {icon}
        </motion.div>
        <div>
          <motion.h4 
            className="text-[#ffd60a] text-xl font-semibold mb-2"
            whileHover={{
              x: 5,
              transition: { duration: 0.2 }
            }}
          >
            {title}
          </motion.h4>
          <p className="text-[#ffe8d6] leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Bottom glow line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#ff6b35] to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.3 }}
      />
    </motion.div>
  );
}

// Lava Bubbles Background
function LavaBubbles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-radial from-[#ff6b35]/30 via-[#ff4500]/20 to-transparent"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: -100,
            width: `${50 + Math.random() * 100}px`,
            height: `${50 + Math.random() * 100}px`,
            filter: "blur(20px)",
          }}
          animate={{
            y: [-100, -window.innerHeight - 200],
            x: [0, (Math.random() - 0.5) * 200],
            scale: [0.8, 1.2, 0.8],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Ocean to Lava Transition - Creative boundary
function OceanToLavaTransition() {
  return (
    <div className="relative h-32 bg-gradient-to-b from-[#0a1628] to-[#1a0a00] overflow-hidden">
      {/* Animated Volcanic Cracks */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="crackGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#0a1628', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#ff6b35', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#1a0a00', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        
        {/* Jagged volcanic transition path */}
        <motion.path
          d="M0,0 L0,50 Q50,30 100,50 T200,50 T300,50 T400,50 T500,50 T600,50 T700,50 T800,50 T900,50 T1000,50 T1100,50 T1200,50 T1300,50 T1400,50 T1500,50 T1600,50 T1700,50 T1800,50 T1900,50 T2000,50 L2000,0 Z"
          fill="url(#crackGradient)"
          vectorEffect="non-scaling-stroke"
          animate={{
            d: [
              "M0,0 L0,50 Q50,30 100,50 T200,50 T300,50 T400,50 T500,50 T600,50 T700,50 T800,50 T900,50 T1000,50 T1100,50 T1200,50 T1300,50 T1400,50 T1500,50 T1600,50 T1700,50 T1800,50 T1900,50 T2000,50 L2000,0 Z",
              "M0,0 L0,50 Q50,60 100,50 T200,50 T300,50 T400,50 T500,50 T600,50 T700,50 T800,50 T900,50 T1000,50 T1100,50 T1200,50 T1300,50 T1400,50 T1500,50 T1600,50 T1700,50 T1800,50 T1900,50 T2000,50 L2000,0 Z",
              "M0,0 L0,50 Q50,30 100,50 T200,50 T300,50 T400,50 T500,50 T600,50 T700,50 T800,50 T900,50 T1000,50 T1100,50 T1200,50 T1300,50 T1400,50 T1500,50 T1600,50 T1700,50 T1800,50 T1900,50 T2000,50 L2000,0 Z",
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>

      {/* Bubbling Magma Effect at Transition */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-[#ff6b35] rounded-full"
          style={{
            left: `${(i * 12) + 5}%`,
            bottom: '20%',
            filter: "blur(2px)",
          }}
          animate={{
            y: [0, -20, 0],
            scale: [0.5, 1.5, 0.5],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2 + Math.random(),
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Steam/Smoke Rising from Transition */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`steam-${i}`}
          className="absolute w-16 h-16 bg-gradient-radial from-gray-400/20 to-transparent rounded-full"
          style={{
            left: `${(i * 20) + 10}%`,
            bottom: '0%',
            filter: "blur(10px)",
          }}
          animate={{
            y: [0, -100],
            opacity: [0.5, 0],
            scale: [0.5, 2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Glowing Lava Cracks */}
      <div className="absolute bottom-0 left-0 right-0 h-1">
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-[#ff6b35] to-transparent"
          animate={{
            opacity: [0.3, 1, 0.3],
            scaleX: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
}