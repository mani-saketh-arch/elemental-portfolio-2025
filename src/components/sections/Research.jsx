'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';
import { 
  BookOpen, FileText, Award, ExternalLink, Sparkles, 
  Beaker, FlaskConical, AtomIcon, Scroll, GraduationCap,
  Star, Zap, Globe, Users, Calendar, BookMarked
} from 'lucide-react';

export default function ResearchPublications() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const [activePotion, setActivePotion] = useState(null);

  const publications = [
    {
      id: 1,
      type: 'conference',
      title: 'Predicting Sleep Disorders for Improved Healthcare – A Comprehensive Study',
      venue: 'ICICC 2024 – 7th International Conference on Innovative Computing and Communication',
      publisher: 'Springer LNNS Series',
      indexing: ['Scopus-Indexed', 'Springer'],
      year: '2024',
      authors: 'Gandham Mani Saketh, Dr. Udaya Sri Kompalli, Abdul Faheem',
      link: 'https://link.springer.com/chapter/10.1007/978-981-97-3588-4_23',
      color: '#a855f7',
      accentColor: '#9333ea',
      icon: BookOpen,
      highlights: [
        'Published in prestigious Springer LNNS series',
        'Presented at international conference (ICICC 2024)',
        'Comprehensive study on sleep disorder prediction',
        'Healthcare AI application focus'
      ],
      potionColor: '#a855f7',
      bottleShape: 'round'
    },
    {
      id: 2,
      type: 'journal',
      title: 'AI Resonance: Forecasting Customer Churn for Future Stability',
      venue: 'International Journal for Innovative Engineering & Management Research',
      publisher: 'IJFANS',
      indexing: ['Peer-Reviewed Journal'],
      year: '2024',
      volume: 'Vol. 13, Issue 4',
      date: 'April 12, 2024',
      authors: 'Dr. Udaya Sri Kompalli, Gandham Mani Saketh, Abdul Faheem',
      link: 'https://ijiemr.org/public/uploads/paper/164631712911071.pdf',
      color: '#f59e0b',
      accentColor: '#d97706',
      icon: AtomIcon,
      highlights: [
        'AI-driven customer churn prediction',
        'Business stability forecasting',
        'Machine learning methodology',
        'Published in international journal'
      ],
      potionColor: '#f59e0b',
      bottleShape: 'square'
    },
    {
      id: 3,
      type: 'journal',
      title: 'A Study on Supervised Learning Model – K-NN Classification',
      venue: 'IJFANS - International Journal of Food and Nutritional Sciences',
      publisher: 'IJFANS',
      indexing: ['Peer-Reviewed Journal'],
      year: '2022',
      volume: 'Vol. 11, Issue 12, 2022',
      authors: 'Gandham Mani Saketh (Co-authored)',
      link: 'https://www.ijfans.org/uploads/paper/bdd0e15b055a9b79495130c7787d2d42.pdf',
      color: '#06b6d4',
      accentColor: '#0891b2',
      icon: FileText,
      highlights: [
        'Focused on K-NN classification algorithms',
        'Predictive analytics research',
        'Supervised learning methodology',
        'Published in international journal'
      ],
      potionColor: '#06b6d4',
      bottleShape: 'flask'
    },
    {
      id: 4,
      type: 'book-chapter',
      title: 'Mitigating Class Imbalance Challenges in Machine Learning & Deep Learning - A Comparative Analysis',
      venue: 'Sustainable AI And IoT Based Sensor Data Analytics',
      publisher: 'Textbook Chapter',
      indexing: ['ISBN: 978-93-340-1496-9'],
      year: '2024',
      pages: 'Pages: 99 - 133',
      authors: 'Gandham Mani Saketh, Dr. Kompalli Udaya Sri, Abdul Faheem',
      link: '#',
      color: '#ec4899',
      accentColor: '#db2777',
      icon: BookMarked,
      highlights: [
        'Published textbook chapter',
        'Class imbalance solutions in ML/DL',
        'Comparative analysis of techniques',
        'Sustainable AI focus'
      ],
      potionColor: '#ec4899',
      bottleShape: 'round'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0a0a1a 0%, #1a0f2e 30%, #2d1b4e 60%, #1a0f2e 90%, #0a0a1a 100%)',
      }}
    >
      {/* Alchemical Background Effects */}
      <AlchemicalSymbols />
      <FloatingPotions />
      <MagicalSteam />
      <GlowingRunes />
      <AlchemyParticles />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header with Alchemical Theme */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-4 mb-6"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <FlaskConical className="text-purple-400" size={48} />
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
             Research Contributions
            </h2>
            
            <motion.div
              animate={{
                rotate: [0, -360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Beaker className="text-amber-400" size={48} />
            </motion.div>
          </motion.div>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-4">
            Transmuting raw data into golden insights through the ancient art of scholarly research
          </p>

          {/* Alchemical Divider */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <motion.div
              className="h-px w-32 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
              animate={{
                opacity: [0.3, 1, 0.3],
                scaleX: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
            <motion.div
              animate={{
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              <Sparkles className="text-amber-400" size={24} />
            </motion.div>
            <motion.div
              className="h-px w-32 bg-gradient-to-r from-transparent via-amber-500 to-transparent"
              animate={{
                opacity: [0.3, 1, 0.3],
                scaleX: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 0.5,
              }}
            />
          </div>
        </motion.div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {publications.map((publication, index) => (
            <PublicationCard 
              key={publication.id} 
              publication={publication} 
              index={index}
              onHover={setActivePotion}
            />
          ))}
        </div>

        {/* Research Metrics */}
        <ResearchMetrics />
      </div>

      {/* Bottom Transition Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, transparent, rgba(10, 10, 26, 0.8), rgba(10, 10, 26, 1))',
          }}
        />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 rounded-full"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              background: i % 3 === 0 ? '#a855f7' : i % 3 === 1 ? '#f59e0b' : '#ec4899',
              boxShadow: `0 0 ${10 + Math.random() * 10}px currentColor`,
            }}
            animate={{
              y: [0, -80],
              opacity: [1, 0],
              scale: [1, 2],
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
// PUBLICATION CARD WITH ALCHEMICAL EFFECTS
// ============================================
function PublicationCard({ publication, index, onHover }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const Icon = publication.icon;

  // 3D Scroll-based folding effect
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-20, 0, 20]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.88, 1, 1, 0.88]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  return (
    <motion.div
      ref={cardRef}
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
        duration: 0.8,
        delay: index * 0.2,
        type: "spring",
        stiffness: 80
      }}
      className="group relative"
      onMouseEnter={() => onHover(publication.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div 
        className="relative h-full rounded-2xl border overflow-hidden backdrop-blur-sm transition-all duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(45, 27, 78, 0.6), rgba(26, 15, 46, 0.8))',
          borderColor: `${publication.color}40`,
          boxShadow: `0 0 40px ${publication.color}20`,
        }}
      >
        {/* Bubbling Potion Effect */}
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${10 + Math.random() * 20}px`,
                height: `${10 + Math.random() * 20}px`,
                left: `${Math.random() * 100}%`,
                bottom: `-${Math.random() * 20}px`,
                background: `radial-gradient(circle, ${publication.color}, transparent)`,
                filter: 'blur(8px)',
              }}
              animate={{
                y: [0, -400],
                opacity: [0.8, 0],
                scale: [0.5, 1.5],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        {/* Magical Glow Border */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${publication.color}15, transparent)`,
            boxShadow: `inset 0 0 60px ${publication.color}30`,
          }}
        />

        {/* Floating Alchemical Symbols */}
        <div className="absolute inset-0 overflow-hidden opacity-10 group-hover:opacity-20 transition-opacity">
          {['⚗️', '🧪', '✨', '⭐'].map((symbol, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl"
              style={{
                left: `${20 + i * 20}%`,
                top: `${10 + i * 15}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                delay: i * 0.5,
                repeat: Infinity,
              }}
            >
              {symbol}
            </motion.div>
          ))}
        </div>

        <div className="relative p-8 z-10">
          {/* Header with Icon and Type Badge */}
          <div className="flex items-start justify-between mb-6">
            <motion.div
              className="p-4 rounded-xl relative"
              style={{
                background: `linear-gradient(135deg, ${publication.color}25, ${publication.color}10)`,
                border: `2px solid ${publication.color}40`,
              }}
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -5, 5, 0],
              }}
              animate={{
                boxShadow: [
                  `0 0 20px ${publication.color}40`,
                  `0 0 40px ${publication.color}60`,
                  `0 0 20px ${publication.color}40`,
                ],
              }}
              transition={{
                boxShadow: {
                  duration: 3,
                  repeat: Infinity,
                },
              }}
            >
              <Icon size={32} style={{ color: publication.color }} />
              
              {/* Sparkle Effect */}
              <motion.div
                className="absolute -top-1 -right-1"
                animate={{
                  scale: [0, 1.5, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                <Sparkles size={16} style={{ color: publication.color }} />
              </motion.div>
            </motion.div>

            {/* Type Badge */}
            <motion.div
              className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
              style={{
                background: `linear-gradient(135deg, ${publication.color}30, ${publication.accentColor}20)`,
                border: `1px solid ${publication.color}50`,
                color: publication.color,
              }}
              whileHover={{ scale: 1.05 }}
            >
              {publication.type === 'conference' ? '📚 Conference' : 
               publication.type === 'journal' ? '📄 Journal' : 
               '📖 Book Chapter'}
            </motion.div>
          </div>

          {/* Title */}
          <motion.h3 
            className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-purple-300 transition-colors"
            whileHover={{ x: 5 }}
          >
            {publication.title}
          </motion.h3>

          {/* Venue */}
          <div className="mb-4 space-y-2">
            <p className="text-sm font-medium flex items-center gap-2" style={{ color: publication.color }}>
              <Globe size={14} />
              {publication.venue}
            </p>
            {publication.date && (
              <p className="text-xs text-gray-400 flex items-center gap-2">
                <Calendar size={12} />
                {publication.date}
              </p>
            )}
          </div>

          {/* Indexing Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {publication.indexing.map((index, i) => (
              <motion.span
                key={i}
                className="px-3 py-1 text-xs rounded-full font-medium"
                style={{
                  background: `linear-gradient(135deg, ${publication.color}20, ${publication.accentColor}10)`,
                  border: `1px solid ${publication.color}40`,
                  color: publication.color,
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 0 15px ${publication.color}50`,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                <Star size={10} className="inline mr-1" />
                {index}
              </motion.span>
            ))}
          </div>

          {/* Authors */}
          <div className="mb-4 p-3 rounded-lg"
            style={{
              background: `linear-gradient(135deg, ${publication.color}10, transparent)`,
              border: `1px solid ${publication.color}20`,
            }}
          >
            <p className="text-xs text-gray-400 flex items-center gap-2 mb-1">
              <Users size={12} />
              Authors
            </p>
            <p className="text-sm text-gray-300">{publication.authors}</p>
          </div>

          {/* Highlights with Potion Bubbles */}
          <div className="space-y-2 mb-6">
            {publication.highlights.map((highlight, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-2 text-sm text-gray-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <motion.div
                  className="mt-1 rounded-full"
                  style={{
                    width: '6px',
                    height: '6px',
                    background: publication.color,
                    boxShadow: `0 0 10px ${publication.color}`,
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                />
                <span>{highlight}</span>
              </motion.div>
            ))}
          </div>

          {/* Action Button */}
          {publication.link && publication.link !== '#' && (
            <motion.a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-medium relative overflow-hidden group"
              style={{
                background: `linear-gradient(135deg, ${publication.color}, ${publication.accentColor})`,
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: [
                    `radial-gradient(circle at 0% 50%, ${publication.color}ff, ${publication.color}00)`,
                    `radial-gradient(circle at 100% 50%, ${publication.color}ff, ${publication.color}00)`,
                    `radial-gradient(circle at 0% 50%, ${publication.color}ff, ${publication.color}00)`,
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              <ExternalLink size={18} className="relative z-10" />
              <span className="relative z-10">View Publication</span>
            </motion.a>
          )}

          {publication.link === '#' && (
            <div className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-gray-400 font-medium border border-gray-700">
              <Scroll size={18} />
              <span>Publication Link Coming Soon</span>
            </div>
          )}
        </div>

        {/* Bottom Alchemical Line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ 
            background: `linear-gradient(to right, transparent, ${publication.color}, transparent)` 
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.2 }}
        />

        {/* Transmutation Circle Effect on Hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-30"
          transition={{ duration: 0.5 }}
        >
          <motion.svg
            viewBox="0 0 200 200"
            className="w-full h-full"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke={publication.color}
              strokeWidth="0.5"
              opacity="0.6"
            />
            <circle
              cx="100"
              cy="100"
              r="60"
              fill="none"
              stroke={publication.color}
              strokeWidth="0.3"
              opacity="0.4"
            />
            {[...Array(8)].map((_, i) => {
              const angle = (i * 45 * Math.PI) / 180;
              const x1 = 100 + 80 * Math.cos(angle);
              const y1 = 100 + 80 * Math.sin(angle);
              const x2 = 100 + 60 * Math.cos(angle);
              const y2 = 100 + 60 * Math.sin(angle);
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={publication.color}
                  strokeWidth="0.5"
                  opacity="0.4"
                />
              );
            })}
          </motion.svg>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ============================================
// RESEARCH METRICS
// ============================================
function ResearchMetrics() {
  const metrics = [
    { label: 'Publications', value: '4+', icon: BookOpen, color: '#a855f7' },
    { label: 'Citations', value: 'Growing', icon: Award, color: '#f59e0b' },
    { label: 'Impact Areas', value: 'AI/ML', icon: Zap, color: '#ec4899' },
    { label: 'Collaboration', value: 'Active', icon: Users, color: '#06b6d4' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
    >
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <motion.div
            key={index}
            className="relative group"
            whileHover={{ scale: 1.05, y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div
              className="p-6 rounded-2xl backdrop-blur-sm border text-center relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(45, 27, 78, 0.4), rgba(26, 15, 46, 0.6))',
                borderColor: `${metric.color}40`,
              }}
            >
              {/* Background Glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `radial-gradient(circle at center, ${metric.color}20, transparent)`,
                }}
              />

              {/* Icon */}
              <motion.div
                className="mx-auto mb-3 w-12 h-12 rounded-full flex items-center justify-center relative"
                style={{
                  background: `linear-gradient(135deg, ${metric.color}30, ${metric.color}10)`,
                  border: `2px solid ${metric.color}50`,
                }}
                animate={{
                  boxShadow: [
                    `0 0 10px ${metric.color}40`,
                    `0 0 25px ${metric.color}60`,
                    `0 0 10px ${metric.color}40`,
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              >
                <Icon size={24} style={{ color: metric.color }} />
              </motion.div>

              {/* Value */}
              <div className="text-3xl font-bold mb-1" style={{ color: metric.color }}>
                {metric.value}
              </div>

              {/* Label */}
              <div className="text-sm text-gray-400 uppercase tracking-wider">
                {metric.label}
              </div>

              {/* Bottom Line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{
                  background: `linear-gradient(to right, transparent, ${metric.color}, transparent)`,
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              />
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

// ============================================
// ALCHEMICAL SYMBOLS BACKGROUND
// ============================================
function AlchemicalSymbols() {
  const symbols = ['⚗️', '🧪', '✨', '⭐', '🔮', '💫', '🌟', '✴️'];
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        >
          {symbols[Math.floor(Math.random() * symbols.length)]}
        </motion.div>
      ))}
    </div>
  );
}

// ============================================
// FLOATING POTIONS
// ============================================
function FloatingPotions() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [(Math.random() - 0.5) * 30, (Math.random() - 0.5) * -30],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 0.8,
          }}
        >
          <div
            className="w-8 h-12 rounded-full opacity-20"
            style={{
              background: `linear-gradient(180deg, ${
                i % 3 === 0 ? '#a855f7' : i % 3 === 1 ? '#f59e0b' : '#ec4899'
              }, transparent)`,
              filter: 'blur(8px)',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

// ============================================
// MAGICAL STEAM
// ============================================
function MagicalSteam() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${20 + Math.random() * 40}px`,
            height: `${20 + Math.random() * 40}px`,
            left: `${Math.random() * 100}%`,
            bottom: '-50px',
            background: `radial-gradient(circle, ${
              i % 3 === 0 ? '#a855f780' : i % 3 === 1 ? '#f59e0b80' : '#ec489980'
            }, transparent)`,
            filter: 'blur(15px)',
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1.5, 2],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
}

// ============================================
// GLOWING RUNES
// ============================================
function GlowingRunes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-6xl font-bold"
          style={{
            left: `${5 + i * 12}%`,
            top: `${10 + (i % 3) * 30}%`,
            color: i % 3 === 0 ? '#a855f7' : i % 3 === 1 ? '#f59e0b' : '#ec4899',
            textShadow: `0 0 20px currentColor`,
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          ✦
        </motion.div>
      ))}
    </div>
  );
}

// ============================================
// ALCHEMY PARTICLES
// ============================================
function AlchemyParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${1 + Math.random() * 3}px`,
            height: `${1 + Math.random() * 3}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 4 === 0 ? '#a855f7' : i % 4 === 1 ? '#f59e0b' : i % 4 === 2 ? '#ec4899' : '#06b6d4',
            boxShadow: `0 0 ${8 + Math.random() * 12}px currentColor`,
          }}
          animate={{
            y: [(Math.random() - 0.5) * 40, (Math.random() - 0.5) * -40],
            x: [(Math.random() - 0.5) * 40, (Math.random() - 0.5) * -40],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
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
// STORM TO ALCHEMY TRANSITION
// ============================================
export function StormToAlchemyTransition() {
  return (
    <div 
      className="relative h-40 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0a0a1a 0%, #1a0f2e 100%)',
      }}
    >
      {/* Gradient Blend */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(10,10,26,1) 0%, rgba(26,15,46,0.5) 50%, rgba(26,15,46,1) 100%)',
        }}
      />

      {/* Lightning transforming to Alchemical Energy */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            left: `${Math.random() * 100}%`,
            bottom: '-10px',
            background: i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#a855f7' : '#f59e0b',
            boxShadow: `0 0 ${15 + Math.random() * 10}px currentColor`,
          }}
          animate={{
            y: [0, -200],
            opacity: [1, 0.8, 0],
            scale: [0.5, 2, 3],
            background: [
              i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#a855f7' : '#f59e0b',
              i % 3 === 0 ? '#a855f7' : i % 3 === 1 ? '#f59e0b' : '#ec4899',
            ],
          }}
          transition={{
            duration: 2 + Math.random() * 1.5,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeOut',
          }}
        />
      ))}

      {/* Transmutation Line */}
      <motion.div
        className="absolute inset-x-0 top-1/2 h-2"
        animate={{
          background: [
            'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent)',
            'linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.8), transparent)',
            'linear-gradient(90deg, transparent, rgba(245, 158, 11, 0.8), transparent)',
            'linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.5), transparent)',
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

      {/* Bottom Alchemical Glow */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1"
        animate={{
          background: [
            'linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.8), transparent)',
            'linear-gradient(90deg, transparent, rgba(245, 158, 11, 1), transparent)',
            'linear-gradient(90deg, transparent, rgba(236, 72, 153, 1), transparent)',
            'linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.8), transparent)',
          ],
          boxShadow: [
            '0 0 20px rgba(168, 85, 247, 0.6)',
            '0 0 40px rgba(245, 158, 11, 1)',
            '0 0 30px rgba(236, 72, 153, 0.8)',
            '0 0 20px rgba(168, 85, 247, 0.6)',
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />
    </div>
  );
}