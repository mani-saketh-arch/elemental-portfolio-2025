'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';
import { 
  Zap, ExternalLink, Github, Users, Database, Bot, Calendar, 
  GraduationCap, Building2, Coins, CheckCircle2, Activity, Sparkles,
  Cpu, Server, Code, Globe, Heart, Moon, Shield, Image as ImageIcon,
  FileText, ShoppingCart, Filter, Cloud, CloudRain, CloudLightning
} from 'lucide-react';

export default function Projects() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const [activeFilter, setActiveFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(null);
  const [lightning, setLightning] = useState(false);

  // Thunder flash effect
  useEffect(() => {
    const thunderInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setLightning(true);
        setTimeout(() => setLightning(false), 150);
      }
    }, 3000);
    return () => clearInterval(thunderInterval);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'PBSC Campus Bridge',
      subtitle: 'Admissions Portal & LEO AI Copilot',
      description: 'Architected and deployed dual admission portals (UG & PG) to digitize manual workflows for 150+ active users. Built and locally tested LEO AI Copilot for NLP-based database queries, achieving 90% query accuracy and campus-wide adoption recognition.',
      technologies: ['Python', 'Flask', 'MySQL', 'Llama 4 Scout', 'LangChain', 'NLP', 'REST APIs'],
      metrics: [
        { label: 'Active Users', value: '150+', icon: Users },
        { label: 'Query Accuracy', value: '90%', icon: CheckCircle2 },
        { label: 'Portals', value: 'UG + PG', icon: GraduationCap },
      ],
      status: 'Live',
      year: '2025',
      color: '#3b82f6',
      icon: Bot,
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      category: 'AI/ML'
    },
    {
      id: 2,
      title: 'PBSC Venue Management System',
      subtitle: 'AI-Powered Booking Platform',
      description: 'Built an automated venue booking system for 30+ active users managing 15+ spaces with zero conflicts. Integrated an AI chatbot for natural language queries and deployed with automated email workflows.',
      technologies: ['Flask', 'MySQL', 'Gemini 1.5 Flash', 'LangChain', 'API Integration', 'Email Automation'],
      metrics: [
        { label: 'Active Users', value: '30+', icon: Users },
        { label: 'Venues', value: '15+', icon: Building2 },
        { label: 'Conflicts', value: '0', icon: CheckCircle2 },
      ],
      status: 'Live',
      year: '2025',
      color: '#8b5cf6',
      icon: Calendar,
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      category: 'Web App'
    },
    {
      id: 3,
      title: 'Supply Management System',
      subtitle: 'Automated Exam Registration & Payment',
      description: 'Revolutionized the supply exam process by replacing manual bank challans with an automated digital system. Successfully deployed campus-wide with 855 students registered and completed fee payments online.',
      technologies: ['Python', 'Flask', 'MySQL', 'Payment Gateway', 'Email Notifications', 'PDF Generation'],
      metrics: [
        { label: 'Registrations', value: '855', icon: Users },
        { label: 'Payments', value: '100%', icon: Coins },
        { label: 'Manual Work', value: '0%', icon: Activity },
      ],
      status: 'Live',
      year: '2025',
      color: '#10b981',
      icon: GraduationCap,
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      category: 'Web App'
    },
    {
      id: 4,
      title: 'PBSC-Ignite',
      subtitle: 'AI Career Readiness Platform',
      description: 'Developed an AI-driven career readiness platform with adaptive learning roadmaps using Perplexity Sonar Pro, Groq LLaMA 4 Scout, and Claude Sonnet 4. Featured intelligent job matching. Shortlisted for YUKTI Innovation Challenge 2025.',
      technologies: ['Python', 'Perplexity Sonar Pro', 'Groq LLaMA 4', 'Claude Sonnet 4', 'NLP', 'Machine Learning'],
      metrics: [
        { label: 'Award', value: 'YUKTI', icon: Sparkles },
        { label: 'AI Models', value: '3', icon: Cpu },
        { label: 'Features', value: 'Job Match', icon: CheckCircle2 },
      ],
      status: 'Demo',
      year: '2025',
      color: '#f59e0b',
      icon: Sparkles,
      liveUrl: '#',
      githubUrl: 'https://github.com/AF011/PBSC-Ignite-AI-Powered-Career-Readiness-Platform-2_11',
      featured: true,
      category: 'AI/ML'
    },
    {
      id: 5,
      title: 'Meri Dharani',
      subtitle: 'AI Waste Management Platform',
      description: 'Won 2nd place at Zero Boundaries International Hackathon with $865 prize. Developed an AI-powered waste management platform aligned with UN SDG goals for sustainable development.',
      technologies: ['Python', 'AI/ML', 'Computer Vision', 'Flask', 'MySQL', 'REST APIs'],
      metrics: [
        { label: 'Award', value: '2nd Place', icon: Sparkles },
        { label: 'Prize', value: '$865', icon: Coins },
        { label: 'Impact', value: 'UN SDG', icon: Globe },
      ],
      status: 'Demo',
      year: '2025',
      color: '#06b6d4',
      icon: Globe,
      liveUrl: '#',
      githubUrl: 'https://github.com/GANDHAMMANI/Meri-Dharani',
      featured: true,
      category: 'AI/ML'
    },
    {
      id: 6,
      title: 'MediScan',
      subtitle: 'AI Healthcare Triage System',
      description: 'Developed during Infosys Springboard internship. AI-driven healthcare triage system using Gemini 1.5 Flash achieving 85% accuracy in emergency injury classification across 20+ scenarios with multi-modal symptom analysis.',
      technologies: ['Python', 'Gemini 1.5 Flash', 'TensorFlow', 'Flask', 'Computer Vision', 'NLP'],
      metrics: [
        { label: 'Accuracy', value: '85%', icon: CheckCircle2 },
        { label: 'Scenarios', value: '20+', icon: Activity },
        { label: 'Modalities', value: 'Multi', icon: Cpu },
      ],
      status: 'Demo',
      year: '2025',
      color: '#ef4444',
      icon: Activity,
      liveUrl: '#',
      githubUrl: 'https://github.com/GANDHAMMANI/Telemedicine',
      featured: true,
      category: 'AI/ML'
    },
    {
      id: 7,
      title: 'SafeIndy Assistant',
      subtitle: 'Safety & Emergency Platform',
      description: 'AI-powered safety assistant providing real-time emergency response, location tracking, and safety alerts. Built with modern web technologies for rapid emergency assistance.',
      technologies: ['Python', 'Flask', 'AI Integration', 'Real-time Processing'],
      metrics: [
        { label: 'Response Time', value: '<2s', icon: Activity },
        { label: 'Features', value: 'Emergency', icon: Shield },
        { label: 'Platform', value: 'Web', icon: Globe },
      ],
      status: 'Demo',
      year: '2025',
      color: '#f97316',
      icon: Shield,
      liveUrl: '#',
      githubUrl: 'https://github.com/GANDHAMMANI/safeindy-assistant',
      featured: false,
      category: 'Web App'
    },
    {
      id: 8,
      title: 'Sleep Apnea Analyzer',
      subtitle: 'Medical Diagnostic Tool',
      description: 'Machine learning-based sleep apnea detection and analysis system. Processes sleep data to identify patterns and provide diagnostic insights for better sleep health monitoring.',
      technologies: ['Python', 'Machine Learning', 'Data Analysis', 'Medical AI'],
      metrics: [
        { label: 'Accuracy', value: '88%', icon: CheckCircle2 },
        { label: 'Analysis', value: 'Real-time', icon: Activity },
        { label: 'Domain', value: 'Healthcare', icon: Heart },
      ],
      status: 'Demo',
      year: '2025',
      color: '#8b5cf6',
      icon: Moon,
      liveUrl: '#',
      githubUrl: 'https://github.com/GANDHAMMANI/Sleep-Apnea-Analyzer',
      featured: false,
      category: 'AI/ML'
    },
    {
      id: 9,
      title: 'Heart Disease Prediction',
      subtitle: 'Medical ML Model',
      description: 'Predictive model for early detection of heart disease using machine learning algorithms. Analyzes patient data to identify risk factors and provide early warnings.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Data Visualization'],
      metrics: [
        { label: 'Accuracy', value: '86%', icon: CheckCircle2 },
        { label: 'Features', value: '13+', icon: Database },
        { label: 'Model', value: 'Ensemble', icon: Cpu },
      ],
      status: 'Demo',
      year: '2024',
      color: '#ef4444',
      icon: Heart,
      liveUrl: '#',
      githubUrl: 'https://github.com/GANDHAMMANI/Heartdisease_prediction',
      featured: false,
      category: 'AI/ML'
    },
    {
      id: 10,
      title: 'Sleep Disorder Prediction',
      subtitle: 'Healthcare Analytics',
      description: 'Machine learning system for predicting various sleep disorders. Utilizes patient health metrics and lifestyle data to identify potential sleep-related issues.',
      technologies: ['Python', 'Machine Learning', 'Data Science', 'Healthcare'],
      metrics: [
        { label: 'Accuracy', value: '84%', icon: CheckCircle2 },
        { label: 'Disorders', value: '5+', icon: Moon },
        { label: 'Metrics', value: 'Multi', icon: Database },
      ],
      status: 'Demo',
      year: '2024',
      color: '#6366f1',
      icon: Moon,
      liveUrl: '#',
      githubUrl: 'https://github.com/GANDHAMMANI/sleepdisorder-prediction',
      featured: false,
      category: 'AI/ML'
    },
   
  ];

  const categories = ['All', 'AI/ML', 'Web App'];
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0a0a1a 0%, #0f0f2a 50%, #0a0a1a 100%)',
      }}
    >
      {/* Lightning Flash Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-50"
        animate={{
          opacity: lightning ? 0.4 : 0,
        }}
        style={{
          background: 'radial-gradient(circle, rgba(147, 197, 253, 0.3) 0%, transparent 70%)',
        }}
      />

      {/* Storm Clouds Background */}
      <StormClouds />

      {/* Heavy Rain Effect */}
      <RainEffect />

      {/* Lightning Strikes */}
      <LightningStrikes lightning={lightning} />

      {/* Thunder Energy Waves */}
      <ThunderWaves />

      {/* Floating Storm Particles */}
      <StormParticles />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header with Storm Theme */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-3 mb-6"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <CloudLightning className="text-blue-400" size={40} />
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Storm of Innovation
            </h2>
            <CloudRain className="text-purple-400" size={40} />
          </motion.div>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Unleashing powerful solutions through the thunder of creativity and the lightning of code
          </p>

          {/* Thunder Effect Line */}
          <motion.div
            className="mt-6 h-1 mx-auto rounded-full"
            style={{
              width: '300px',
              background: 'linear-gradient(90deg, transparent, #3b82f6, #8b5cf6, #06b6d4, transparent)',
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scaleX: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.div>

        {/* Filter Pills with Storm Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all relative overflow-hidden ${
                activeFilter === category
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Electric Background */}
              {activeFilter === category && (
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3))',
                    border: '1px solid rgba(59, 130, 246, 0.5)',
                  }}
                  layoutId="activeFilter"
                />
              )}
              
              {/* Lightning Pulse on Active */}
              {activeFilter === category && (
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{
                    boxShadow: [
                      '0 0 10px rgba(59, 130, 246, 0.5)',
                      '0 0 30px rgba(139, 92, 246, 0.8)',
                      '0 0 10px rgba(59, 130, 246, 0.5)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              )}

              <span className="relative z-10 flex items-center gap-2">
                {category === 'All' && <Filter size={18} />}
                {category === 'AI/ML' && <Cpu size={18} />}
                {category === 'Web App' && <Globe size={18} />}
                {category}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              lightning={lightning}
            />
          ))}
        </motion.div>
      </div>

      {/* Bottom Storm Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, transparent, rgba(10, 10, 26, 0.8), rgba(10, 10, 26, 1))',
          }}
        />
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 rounded-full"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              background: i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#8b5cf6' : '#06b6d4',
              boxShadow: `0 0 ${10 + Math.random() * 10}px currentColor`,
            }}
            animate={{
              y: [0, -60],
              opacity: [1, 0],
            }}
            transition={{
              duration: 2 + Math.random(),
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
}

// ============================================
// PROJECT CARD WITH STORM EFFECTS
// ============================================
function ProjectCard({ project, index, lightning }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const Icon = project.icon;

  // Scroll-based 3D transforms for folding effect
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-25, 0, 25]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.85, 1, 1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);

  return (
    <motion.div
      ref={cardRef}
      layout
      style={{
        transformStyle: "preserve-3d",
        rotateY,
        rotateX,
        scale,
        opacity,
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
      } : {}}
      transition={{ 
        duration: 0.6,
        delay: (index % 3) * 0.15,
        type: "spring",
        stiffness: 100
      }}
      className="group relative"
    >
      <div 
        className="relative h-full rounded-2xl border border-gray-800 overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-blue-500/50"
        style={{
          background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.8), rgba(31, 41, 55, 0.6))',
        }}
      >
        {/* Lightning Flash on Card */}
        {lightning && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 0.2 }}
            style={{
              background: `radial-gradient(circle at 50% 0%, ${project.color}40, transparent 70%)`,
            }}
          />
        )}

        {/* Storm Energy Border */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${project.color}10, transparent)`,
            boxShadow: `inset 0 0 50px ${project.color}20`,
          }}
        />

        {/* Thunder Bolts in Background */}
        <div className="absolute inset-0 overflow-hidden opacity-10 group-hover:opacity-20 transition-opacity">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${20 + i * 30}%`,
                top: `-20%`,
                width: '2px',
                height: '100px',
                background: `linear-gradient(180deg, ${project.color}, transparent)`,
                filter: 'blur(1px)',
              }}
              animate={{
                opacity: [0, 1, 0],
                scaleY: [0, 1, 0],
              }}
              transition={{
                duration: 0.3,
                delay: i * 0.5,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />
          ))}
        </div>

        <div className="relative p-6 z-10">
          {/* Header with Icon and Status */}
          <div className="flex items-start justify-between mb-4">
            <motion.div
              className="p-3 rounded-xl"
              style={{
                background: `linear-gradient(135deg, ${project.color}20, ${project.color}10)`,
                border: `1px solid ${project.color}30`,
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              animate={{
                boxShadow: [
                  `0 0 10px ${project.color}40`,
                  `0 0 20px ${project.color}60`,
                  `0 0 10px ${project.color}40`,
                ],
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                },
              }}
            >
              <Icon size={28} style={{ color: project.color }} />
            </motion.div>

            {/* Status Badge with Lightning */}
            <motion.div
              className="px-3 py-1 rounded-full text-xs font-medium flex items-center gap-2"
              style={{
                background: project.status === 'Live' 
                  ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(16, 185, 129, 0.1))'
                  : 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(139, 92, 246, 0.1))',
                border: project.status === 'Live' 
                  ? '1px solid rgba(16, 185, 129, 0.3)'
                  : '1px solid rgba(139, 92, 246, 0.3)',
                color: project.status === 'Live' ? '#10b981' : '#8b5cf6',
              }}
              animate={{
                boxShadow: [
                  '0 0 5px rgba(59, 130, 246, 0.3)',
                  '0 0 15px rgba(59, 130, 246, 0.6)',
                  '0 0 5px rgba(59, 130, 246, 0.3)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <Zap size={12} />
              {project.status}
            </motion.div>
          </div>

          {/* Title and Subtitle */}
          <motion.h3 
            className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors"
            whileHover={{ x: 5 }}
          >
            {project.title}
          </motion.h3>
          
          <p className="text-sm font-medium mb-3" style={{ color: project.color }}>
            {project.subtitle}
          </p>

          {/* Description */}
          <p className="text-gray-400 text-sm mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Metrics with Storm Glow */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {project.metrics.map((metric, i) => {
              const MetricIcon = metric.icon;
              return (
                <motion.div
                  key={i}
                  className="text-center p-3 rounded-lg relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.8), rgba(31, 41, 55, 0.6))',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: `0 0 20px ${project.color}40`,
                  }}
                >
                  {/* Electric Shimmer */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    animate={{
                      background: [
                        `linear-gradient(135deg, ${project.color}00, ${project.color}20, ${project.color}00)`,
                        `linear-gradient(135deg, ${project.color}20, ${project.color}00, ${project.color}20)`,
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                  
                  <MetricIcon 
                    size={16} 
                    className="mx-auto mb-1 relative z-10" 
                    style={{ color: project.color }}
                  />
                  <div className="text-white font-bold text-sm relative z-10">
                    {metric.value}
                  </div>
                  <div className="text-gray-500 text-xs relative z-10">
                    {metric.label}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Technologies with Lightning */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech, i) => (
              <motion.span
                key={i}
                className="px-3 py-1 text-xs rounded-full relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`,
                  border: `1px solid ${project.color}30`,
                  color: project.color,
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 0 15px ${project.color}50`,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                {tech}
              </motion.span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-400">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Action Buttons with Storm Effect */}
          <div className="flex gap-3">
            {project.liveUrl && project.liveUrl !== '#' && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-medium relative overflow-hidden group"
                style={{
                  background: `linear-gradient(135deg, ${project.color}, ${project.color}dd)`,
                }}
              >
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background: [
                      `radial-gradient(circle at 0% 50%, ${project.color}ff, ${project.color}00)`,
                      `radial-gradient(circle at 100% 50%, ${project.color}ff, ${project.color}00)`,
                      `radial-gradient(circle at 0% 50%, ${project.color}ff, ${project.color}00)`,
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <ExternalLink size={16} className="relative z-10" />
                <span className="relative z-10">View Live</span>
              </motion.a>
            )}
            
            {project.githubUrl && project.githubUrl !== '#' && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at center, ${project.color}20, transparent)`,
                  }}
                />
                <Github size={20} className="text-white relative z-10" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Bottom Thunder Line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ 
            background: `linear-gradient(to right, transparent, ${project.color}, transparent)` 
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: (index % 3) * 0.15 }}
        />

        {/* Lightning Strike Effect on Hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.3 }}
        >
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${30 + i * 40}%`,
                top: 0,
                width: '1px',
                height: '100%',
                background: `linear-gradient(180deg, ${project.color}, transparent)`,
                filter: 'blur(1px)',
              }}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 0.2,
                delay: i * 0.1,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

// ============================================
// STORM CLOUDS BACKGROUND
// ============================================
function StormClouds() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${200 + Math.random() * 300}px`,
            height: `${100 + Math.random() * 150}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 2 === 0 
              ? 'radial-gradient(circle, rgba(30, 41, 59, 0.8), transparent)'
              : 'radial-gradient(circle, rgba(51, 65, 85, 0.6), transparent)',
          }}
          animate={{
            x: [0, (Math.random() - 0.5) * 100],
            y: [0, (Math.random() - 0.5) * 50],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

// ============================================
// RAIN EFFECT
// ============================================
function RainEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(100)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: '1px',
            height: `${10 + Math.random() * 20}px`,
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 100}px`,
            background: 'linear-gradient(180deg, rgba(147, 197, 253, 0.4), transparent)',
            filter: 'blur(0.5px)',
          }}
          animate={{
            y: ['0vh', '110vh'],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 1 + Math.random() * 0.5,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}

// ============================================
// LIGHTNING STRIKES
// ============================================
function LightningStrikes({ lightning }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${10 + i * 15}%`,
            top: 0,
            width: '2px',
            height: '100%',
            background: 'linear-gradient(180deg, rgba(147, 197, 253, 0.8), rgba(96, 165, 250, 0.4), transparent)',
            filter: 'blur(2px)',
            opacity: 0,
          }}
          animate={{
            opacity: lightning ? [0, 1, 0.5, 1, 0] : 0,
            scaleY: lightning ? [0, 1, 0.8, 1, 0] : 0,
          }}
          transition={{
            duration: 0.3,
            delay: i * 0.05,
          }}
        />
      ))}
    </div>
  );
}

// ============================================
// THUNDER WAVES
// ============================================
function ThunderWaves() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-0 right-0"
          style={{
            top: `${20 + i * 25}%`,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3), rgba(6, 182, 212, 0.3), transparent)',
            filter: 'blur(1px)',
          }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scaleX: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}

// ============================================
// STORM PARTICLES
// ============================================
function StormParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${1 + Math.random() * 3}px`,
            height: `${1 + Math.random() * 3}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 4 === 0 ? '#3b82f6' : i % 4 === 1 ? '#8b5cf6' : i % 4 === 2 ? '#06b6d4' : '#60a5fa',
            boxShadow: `0 0 ${10 + Math.random() * 15}px currentColor`,
          }}
          animate={{
            y: [(Math.random() - 0.5) * 30, (Math.random() - 0.5) * -30],
            x: [(Math.random() - 0.5) * 40, (Math.random() - 0.5) * -40],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.5, 0.8],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

// ============================================
// EXPERIENCE TO PROJECTS TRANSITION
// ============================================
export function ExperienceToProjectsTransition() {
  return (
    <div 
      className="relative h-40 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0f1814 0%, #0a0a1a 100%)',
      }}
    >
      {/* Gradient Blend */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(15,24,20,1) 0%, rgba(10,10,26,0.5) 50%, rgba(10,10,26,1) 100%)',
        }}
      />

      {/* Storm Building Up */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
            left: `${Math.random() * 100}%`,
            bottom: '-10px',
            background: i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#8b5cf6' : '#06b6d4',
            boxShadow: `0 0 ${10 + Math.random() * 10}px currentColor`,
          }}
          animate={{
            y: [0, -180],
            opacity: [1, 0.6, 0],
            scale: [0.5, 1.8, 2.5],
          }}
          transition={{
            duration: 1.8 + Math.random() * 1.2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeOut',
          }}
        />
      ))}

      {/* Thunder Flash */}
      <motion.div
        className="absolute inset-x-0 top-1/2 h-2"
        animate={{
          background: [
            'linear-gradient(90deg, transparent, rgba(147, 197, 253, 0.0), transparent)',
            'linear-gradient(90deg, transparent, rgba(147, 197, 253, 0.8), transparent)',
            'linear-gradient(90deg, transparent, rgba(147, 197, 253, 0.0), transparent)',
          ],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 2.5,
        }}
      />

      {/* Storm Bottom Line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1"
        animate={{
          background: [
            'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent)',
            'linear-gradient(90deg, transparent, rgba(147, 197, 253, 1), transparent)',
            'linear-gradient(90deg, transparent, rgba(139, 92, 246, 1), transparent)',
            'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent)',
          ],
          boxShadow: [
            '0 0 10px rgba(59, 130, 246, 0.5)',
            '0 0 30px rgba(147, 197, 253, 1)',
            '0 0 20px rgba(139, 92, 246, 0.8)',
            '0 0 10px rgba(59, 130, 246, 0.5)',
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