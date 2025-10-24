'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Briefcase, MapPin, Calendar, TrendingUp, Users, Code, Target, Award, Trophy, Sparkles, Crown } from 'lucide-react';

export default function Experience() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const [activeExp, setActiveExp] = useState(null);
  const [activeAward, setActiveAward] = useState(null);

  const experiences = [
    {
      id: 1,
      role: 'Co-Founder & Lead',
      company: 'InnodayVoyagers - AI Hub',
      location: 'P.B. Siddhartha College, Vijayawada, AP',
      period: 'Dec 2024 - Present',
      achievements: [
        'Led development of 3 production apps serving 1,500+ institutional users.',
        'Mentored 15+ students on AI/ML projects from ideation to deployment.',
        'Established an AI innovation hub promoting research and practical implementation.',
      ],
      metrics: [
        { label: 'Users', value: '1,500+', icon: Users },
        { label: 'Mentored', value: '15+', icon: Target },
        { label: 'Apps', value: '3', icon: Code },
      ],
      color: '#10b981',
    },
    {
      id: 2,
      role: 'AI Intern',
      company: 'Infosys Springboard',
      location: 'Remote',
      period: 'Dec 2024 - Feb 2025',
      achievements: [
        'Developed MediScan, an AI-driven healthcare triage system using Gemini 1.5 Flash.',
        'Achieved 85% accuracy in emergency injury classification across 20+ scenarios.',
        'Implemented multi-modal symptom analysis for real-time healthcare assistance.',
      ],
      metrics: [
        { label: 'Accuracy', value: '85%', icon: TrendingUp },
        { label: 'Scenarios', value: '20+', icon: Target },
        { label: 'Modalities', value: 'Multi', icon: Sparkles },
      ],
      color: '#3b82f6',
    },
  ];

  const awards = [
    {
      id: 1,
      title: 'YUKTI Innovation Challenge 2025 & AICTE Productization Fellowship',
      organization: "Ministry of Education's Innovation Cell, Government of India",
      status: 'Shortlisted',
      year: '2025',
      project: 'PBSC-Ignite',
      description: 'Developed an AI-driven career readiness platform with adaptive learning roadmaps using Perplexity Sonar Pro, Groq LLaMA 4 Scout, and Claude Sonnet 4; featured intelligent job matching.',
      icon: Crown,
      color: '#ffd54f',
    },
    {
      id: 2,
      title: 'Zero Boundaries International Hackathon',
      organization: 'Social Good Track',
      status: '2nd Place',
      prize: '$865 Cash Prize',
      year: '2025',
      project: 'Meri Dharani',
      description: 'Won 2nd place among global participants for developing an AI-powered waste management platform aligned with UN SDG goals.',
      icon: Trophy,
      color: '#00897b',
    },
    {
      id: 3,
      title: 'Sri Kompalli Kotilingeswara Veerabhadra Rao Memorial AI Innovation Award',
      organization: 'P.B. Siddhartha College of Arts and Science',
      status: 'Winner',
      year: 'April 2025',
      project: 'PBSC Venue Management System',
      description: 'Recognized at college annual day for developing the PBSC Venue Management System serving campus operations; first UG student in college history to publish a Springer Scopus-indexed research paper.',
      icon: Award,
      color: '#ef4444',
    },
  ];

  return (
    <>
      {/* Skills to Experience Transition */}
      <SkillsToExperienceTransition />

      <section
        id="experience"
        ref={sectionRef}
        className="relative min-h-screen bg-gradient-to-b from-[#0a1f1a] via-[#132821] to-[#0f1814] overflow-hidden"
      >
        {/* Earth Gradient Overlays - Similar to Lava overlays in About */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#10b981] opacity-10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3b82f6] opacity-10 blur-[120px] rounded-full" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#ffd54f] opacity-5 blur-[120px] rounded-full" />
        </div>

        {/* Floating Earth Particles - Similar to Lava Bubbles */}
        <FloatingParticles />

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
              <span className="bg-gradient-to-r from-[#10b981] via-[#ffd54f] to-[#3b82f6] bg-clip-text text-transparent">
                EXPERIENCE & RECOGNITION
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#10b981] to-[#3b82f6]"
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
            <p className="text-emerald-200/70 text-lg mt-6">
              Forged through dedication • Refined by innovation • Crystallized into impact
            </p>
          </motion.div>

          {/* Experience Cards Grid - Wider Layout */}
          <div className="max-w-[1600px] mx-auto mb-32">
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Left Card - Slides from Left */}
              <motion.div
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
                <ExperienceCard 
                  experience={experiences[0]} 
                  index={0}
                  isActive={activeExp === experiences[0].id}
                  onHover={() => setActiveExp(experiences[0].id)}
                  onLeave={() => setActiveExp(null)}
                />
              </motion.div>

              {/* Right Card - Slides from Right */}
              <motion.div
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
                <ExperienceCard 
                  experience={experiences[1]} 
                  index={1}
                  isActive={activeExp === experiences[1].id}
                  onHover={() => setActiveExp(experiences[1].id)}
                  onLeave={() => setActiveExp(null)}
                />
              </motion.div>
            </div>
          </div>

          {/* Awards Section */}
          <div className="max-w-[1600px] mx-auto">
            {/* Awards Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-[#ffd54f]/40 bg-gradient-to-r from-[#ffd54f]/10 to-[#ef4444]/10 backdrop-blur-lg mb-6"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(255, 213, 79, 0.2)',
                    '0 0 30px rgba(239, 68, 68, 0.3)',
                    '0 0 20px rgba(255, 213, 79, 0.2)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <Sparkles className="text-yellow-400" size={20} />
                <span className="text-yellow-200 font-bold tracking-wider text-sm">
                  PRECIOUS RECOGNITIONS
                </span>
                <Sparkles className="text-yellow-400" size={20} />
              </motion.div>

              <h3 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#ffd54f] via-[#00897b] to-[#ef4444] bg-clip-text text-transparent">
                  AWARDS & ACHIEVEMENTS
                </span>
              </h3>
            </motion.div>

            {/* Awards Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              {awards.map((award, index) => (
                <AwardCard 
                  key={award.id}
                  award={award}
                  index={index}
                  isActive={activeAward === award.id}
                  onHover={() => setActiveAward(award.id)}
                  onLeave={() => setActiveAward(null)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ============================================
// EXPERIENCE CARD - With About-style 3D animations
// ============================================
function ExperienceCard({ experience, index, isActive, onHover, onLeave }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // 3D Transform values like ProfileCard in About
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], index === 0 ? [-25, 0, 25] : [25, 0, -25]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.9]);

  return (
    <motion.div
      ref={cardRef}
      className="glass-card backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 border-2 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
        rotateY,
        rotateX,
        scale,
        borderColor: `${experience.color}80`,
        boxShadow: `0 20px 60px ${experience.color}30`,
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      whileHover={{
        y: -8,
        boxShadow: `0 30px 60px -15px ${experience.color}60`,
        rotateY: 0,
        rotateX: 0,
        transition: { duration: 0.3 }
      }}
    >
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${experience.color}40, transparent 70%)`,
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

      {/* Corner Accents - Like About section */}
      <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 rounded-tl-3xl" style={{ borderColor: `${experience.color}60` }} />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 rounded-br-3xl" style={{ borderColor: `${experience.color}60` }} />

      {/* Animated corner glow */}
      <motion.div
        className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br to-transparent"
        style={{ 
          clipPath: "polygon(100% 0, 0 0, 100% 100%)",
          background: `linear-gradient(to bottom right, ${experience.color}30, transparent)`
        }}
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
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              left: `${15 + i * 18}%`,
              top: `${25 + i * 12}%`,
              background: experience.color,
              boxShadow: `0 0 10px ${experience.color}`,
            }}
            animate={{
              y: [0, -50],
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

      {/* Card Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-sm font-medium backdrop-blur-sm"
              style={{
                background: `linear-gradient(135deg, ${experience.color}30, ${experience.color}15)`,
                border: `1px solid ${experience.color}50`,
                color: experience.color,
              }}
              whileHover={{ scale: 1.05 }}
            >
              <Calendar size={14} />
              {experience.period}
            </motion.div>

            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-white mb-2"
              whileHover={{
                x: 5,
                transition: { duration: 0.2 }
              }}
            >
              {experience.role}
            </motion.h3>
            <p className="text-xl mb-2" style={{ color: `${experience.color}` }}>{experience.company}</p>
            <p className="text-sm text-emerald-200/60 flex items-center gap-2">
              <MapPin size={14} />
              {experience.location}
            </p>
          </div>

          <motion.div
            className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-sm"
            style={{
              background: `linear-gradient(135deg, ${experience.color}35, ${experience.color}15)`,
              border: `2px solid ${experience.color}50`,
            }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Briefcase size={28} style={{ color: experience.color }} />
          </motion.div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {experience.metrics.map((metric, i) => (
            <motion.div
              key={i}
              className="text-center p-4 rounded-xl backdrop-blur-sm"
              style={{
                background: `linear-gradient(135deg, ${experience.color}20, transparent)`,
                border: `1px solid ${experience.color}30`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: 0.3 + i * 0.1,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{
                scale: 1.1,
                borderColor: experience.color,
                background: `linear-gradient(135deg, ${experience.color}30, transparent)`,
              }}
            >
              <metric.icon size={22} className="mx-auto mb-2" style={{ color: experience.color }} />
              <div className="text-2xl font-bold text-white">{metric.value}</div>
              <div className="text-xs text-emerald-200/60">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <div className="space-y-3">
          {experience.achievements.map((achievement, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-3 group/item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: 0.5 + i * 0.1,
                type: "spring",
                stiffness: 100
              }}
            >
              <motion.div
                className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                style={{ 
                  background: experience.color, 
                  boxShadow: `0 0 10px ${experience.color}` 
                }}
                whileHover={{ scale: 1.5 }}
              />
              <p className="text-white/80 text-sm leading-relaxed group-hover/item:text-white transition-colors">
                {achievement}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom glow line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent to-transparent"
          style={{ backgroundImage: `linear-gradient(to right, transparent, ${experience.color}, transparent)` }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        />
      </div>
    </motion.div>
  );
}

// ============================================
// AWARD CARD - With BioCard-style animations
// ============================================
function AwardCard({ award, index, isActive, onHover, onLeave }) {
  const IconComponent = award.icon;
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // 3D transforms for scroll
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-15, 0, 15]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.div
      ref={cardRef}
      className="glass-card backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 border-2 rounded-3xl p-8 shadow-2xl relative overflow-hidden h-full"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
        borderColor: `${award.color}50`,
        boxShadow: `0 20px 60px ${award.color}30`,
        rotateY,
        rotateX,
        opacity,
      }}
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        type: "spring",
        stiffness: 60,
        damping: 20
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      whileHover={{
        y: -8,
        scale: 1.02,
        boxShadow: `0 25px 50px -12px ${award.color}60`,
        rotateY: 0,
        rotateX: 0,
        transition: { duration: 0.3 }
      }}
    >
      {/* Animated corner glow */}
      <motion.div
        className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br to-transparent"
        style={{ 
          clipPath: "polygon(100% 0, 0 0, 100% 100%)",
          background: `linear-gradient(to bottom right, ${award.color}25, transparent)`
        }}
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
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + i * 10}%`,
              background: award.color,
              boxShadow: `0 0 10px ${award.color}`,
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

      {/* Content */}
      <div className="relative z-10">
        {/* Icon Badge */}
        <motion.div
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 backdrop-blur-sm"
          style={{
            background: `linear-gradient(135deg, ${award.color}35, ${award.color}15)`,
            border: `2px solid ${award.color}50`,
          }}
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <IconComponent size={32} style={{ color: award.color }} />
        </motion.div>

        {/* Status Badge */}
        <motion.div
          className="inline-block px-4 py-2 rounded-full mb-4 text-xs font-bold tracking-wider backdrop-blur-sm"
          style={{
            background: `linear-gradient(135deg, ${award.color}40, ${award.color}20)`,
            border: `2px solid ${award.color}`,
            color: award.color,
            boxShadow: `0 0 20px ${award.color}30`,
          }}
          whileHover={{ scale: 1.05 }}
        >
          {award.status}
          {award.prize && ` • ${award.prize}`}
        </motion.div>

        {/* Title */}
        <motion.h4 
          className="text-xl font-bold text-white mb-3 leading-tight"
          whileHover={{
            x: 5,
            transition: { duration: 0.2 }
          }}
        >
          {award.title}
        </motion.h4>

        {/* Organization */}
        <p className="text-sm text-emerald-300/80 mb-2 italic">
          {award.organization}
        </p>

        {/* Year */}
        <p className="text-xs text-gray-400 mb-4">
          {award.year}
        </p>

        {/* Project Tag */}
        <div
          className="inline-block px-3 py-1.5 rounded-lg mb-4 text-sm font-semibold backdrop-blur-sm"
          style={{
            background: `${award.color}20`,
            color: award.color,
            border: `1px solid ${award.color}40`,
          }}
        >
          {award.project}
        </div>

        {/* Description */}
        <p className="text-white/70 text-sm leading-relaxed">
          {award.description}
        </p>

        {/* Bottom glow line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent to-transparent"
          style={{ backgroundImage: `linear-gradient(to right, transparent, ${award.color}, transparent)` }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.2 + 0.3 }}
        />
      </div>
    </motion.div>
  );
}

// ============================================
// FLOATING PARTICLES - Like Lava Bubbles
// ============================================
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${40 + Math.random() * 80}px`,
            height: `${40 + Math.random() * 80}px`,
            left: `${Math.random() * 100}%`,
            bottom: -100,
            background: i % 3 === 0 
              ? 'radial-gradient(circle, rgba(16, 185, 129, 0.25), rgba(16, 185, 129, 0.1), transparent)' 
              : i % 3 === 1 
              ? 'radial-gradient(circle, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.08), transparent)'
              : 'radial-gradient(circle, rgba(255, 213, 79, 0.2), rgba(255, 213, 79, 0.08), transparent)',
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

// ============================================
// SKILLS TO EXPERIENCE TRANSITION
// ============================================
function SkillsToExperienceTransition() {
  return (
    <div className="relative h-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0f1419 0%, #0a1f1a 100%)',
      }}
    >
      {/* Gradient Blend */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(15,20,25,1) 0%, rgba(10,31,26,0.5) 50%, rgba(10,31,26,1) 100%)',
        }}
      />

      {/* Crystallization Effect - Stars forming crystals */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`crystal-${i}`}
          className="absolute"
          style={{
            left: `${i * 6.5}%`,
            bottom: '20%',
            width: '4px',
            height: '20px',
            background: 'linear-gradient(180deg, #10b981, rgba(16, 185, 129, 0.3))',
            clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
            filter: 'drop-shadow(0 0 6px #10b981)',
          }}
          animate={{
            height: ['10px', '28px', '10px'],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.15,
          }}
        />
      ))}

      {/* Falling particles */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${1.5 + Math.random() * 2}px`,
            height: `${1.5 + Math.random() * 2}px`,
            left: `${Math.random() * 100}%`,
            top: '-10px',
            background: i < 12 ? '#60A5FA' : '#10b981',
            boxShadow: `0 0 ${4 + Math.random() * 6}px currentColor`,
          }}
          animate={{
            y: [0, 150],
            opacity: [0.8, 0.6, 0],
            scale: [0.8, 1.2, 1.5],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeIn',
          }}
        />
      ))}

      {/* Pulsing Bottom Line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        animate={{
          background: [
            'linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.5), transparent)',
            'linear-gradient(90deg, transparent, rgba(16, 185, 129, 1), transparent)',
            'linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.5), transparent)',
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />
    </div>
  );
}