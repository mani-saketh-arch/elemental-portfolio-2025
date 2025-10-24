'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';
import { 
  Mail, Linkedin, Github, Send, Sparkles, 
  User, MessageSquare, CheckCircle2, Snowflake,
  GraduationCap, MapPin, ExternalLink, Zap, Heart
} from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formStatus, setFormStatus] = useState('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    try {
      const response = await fetch('https://formspree.io/f/mqkrojyd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen py-20 overflow-hidden flex items-center"
      style={{
        background: 'linear-gradient(180deg, #0a0a1a 0%, #0f1628 30%, #1a2332 50%, #0f1628 70%, #0a0a1a 100%)',
      }}
    >
      {/* Interactive Background Effects */}
      <FloatingOrbs mousePosition={mousePosition} />
      <AuroraWaves />
      <ConstellationLines />
      <MagneticField mousePosition={mousePosition} />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-4 mb-6"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Animated Icons */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Sparkles className="text-cyan-400" size={32} />
            </motion.div>

            <h2 className="text-6xl md:text-7xl font-bold relative">
              <motion.span
                className="inline-block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent"
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
                }}
              >
                Get In Touch
              </motion.span>
              
              {/* Floating particles around text */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: '4px',
                    height: '4px',
                    background: i % 2 === 0 ? '#22d3ee' : '#a78bfa',
                    left: `${10 + i * 12}%`,
                    top: `${-20 + (i % 3) * 15}%`,
                    boxShadow: `0 0 10px currentColor`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                />
              ))}
            </h2>

            <motion.div
              animate={{
                rotate: [0, -360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Zap className="text-purple-400" size={32} />
            </motion.div>
          </motion.div>
          
          <motion.p 
            className="text-gray-300 text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Let's create something amazing together
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Contact Form with Floating Island Effect */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Floating Island Container */}
            <motion.div
              className="relative"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Glow underneath */}
              <motion.div
                className="absolute -inset-8 rounded-3xl blur-3xl opacity-30"
                style={{
                  background: 'radial-gradient(circle, rgba(34, 211, 238, 0.4), transparent)',
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />

              <div
                className="relative rounded-3xl p-8 backdrop-blur-xl border"
                style={{
                  background: 'linear-gradient(135deg, rgba(15, 28, 46, 0.6), rgba(26, 41, 66, 0.4))',
                  borderColor: 'rgba(34, 211, 238, 0.3)',
                  boxShadow: '0 0 60px rgba(34, 211, 238, 0.2), inset 0 0 60px rgba(34, 211, 238, 0.05)',
                }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field with Icon */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative group"
                  >
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400 z-10 group-hover:scale-110 transition-transform" size={20} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-6 py-4 rounded-xl bg-white/5 border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all backdrop-blur-sm"
                      placeholder="Your Name"
                      style={{
                        boxShadow: '0 0 20px rgba(34, 211, 238, 0.1)',
                      }}
                    />
                  </motion.div>

                  {/* Email Field with Icon */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative group"
                  >
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400 z-10 group-hover:scale-110 transition-transform" size={20} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-6 py-4 rounded-xl bg-white/5 border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all backdrop-blur-sm"
                      placeholder="your.email@example.com"
                      style={{
                        boxShadow: '0 0 20px rgba(34, 211, 238, 0.1)',
                      }}
                    />
                  </motion.div>

                  {/* Message Field with Icon */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative group"
                  >
                    <MessageSquare className="absolute left-4 top-6 text-cyan-400 z-10 group-hover:scale-110 transition-transform" size={20} />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full pl-12 pr-6 py-4 rounded-xl bg-white/5 border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all resize-none backdrop-blur-sm"
                      placeholder="Tell me about your project..."
                      style={{
                        boxShadow: '0 0 20px rgba(34, 211, 238, 0.1)',
                      }}
                    />
                  </motion.div>

                  {/* Animated Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="w-full py-4 rounded-xl font-bold text-white relative overflow-hidden group"
                    style={{
                      background: 'linear-gradient(135deg, #0ea5e9, #06b6d4, #8b5cf6)',
                      backgroundSize: '200% 200%',
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      backgroundPosition: '100% 50%',
                    }}
                    whileTap={{ scale: 0.98 }}
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      backgroundPosition: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }
                    }}
                  >
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0"
                      animate={{
                        x: ['-100%', '200%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 1,
                      }}
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                      }}
                    />

                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {formStatus === 'idle' && (
                        <>
                          <Send size={20} />
                          <span className="text-lg">Send Message</span>
                          <Sparkles size={20} />
                        </>
                      )}
                      {formStatus === 'sending' && (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <Snowflake size={20} />
                          </motion.div>
                          <span className="text-lg">Sending...</span>
                        </>
                      )}
                      {formStatus === 'success' && (
                        <>
                          <CheckCircle2 size={20} />
                          <span className="text-lg">Message Sent!</span>
                          <Heart size={20} />
                        </>
                      )}
                      {formStatus === 'error' && (
                        <>
                          <Zap size={20} />
                          <span className="text-lg">Try Again</span>
                        </>
                      )}
                    </span>
                  </motion.button>

                  {/* Status Messages */}
                  {formStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className="p-4 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 text-cyan-200 text-center font-medium"
                    >
                      ✨ Awesome! I'll get back to you soon!
                    </motion.div>
                  )}

                  {formStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className="p-4 rounded-xl bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/40 text-red-200 text-center font-medium"
                    >
                      ⚡ Oops! Please try again.
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Orbital Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] flex items-center justify-center"
          >
            <OrbitalSocialLinks mousePosition={mousePosition} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// ORBITAL SOCIAL LINKS
// ============================================
function OrbitalSocialLinks({ mousePosition }) {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/gandhammanisaketh2421/',
      color: '#0ea5e9',
      angle: 0,
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/GANDHAMMANI',
      color: '#8b5cf6',
      angle: 90,
    },
    {
      name: 'Google Scholar',
      icon: GraduationCap,
      url: 'https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=wSYSyEEAAAAJ',
      color: '#06b6d4',
      angle: 180,
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:gandhammani2421@gmail.com',
      color: '#22d3ee',
      angle: 270,
    }
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Central Hub */}
      <motion.div
        className="absolute z-20"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 360],
        }}
        transition={{
          scale: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          },
          rotate: {
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      >
        <div
          className="w-32 h-32 rounded-full flex items-center justify-center relative"
          style={{
            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.3), rgba(139, 92, 246, 0.3))',
            boxShadow: '0 0 60px rgba(34, 211, 238, 0.6), inset 0 0 40px rgba(139, 92, 246, 0.4)',
          }}
        >
          <Sparkles className="text-cyan-300" size={48} />
        </div>
      </motion.div>

      {/* Orbital Rings */}
      {[150, 200, 250].map((radius, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border"
          style={{
            width: `${radius * 2}px`,
            height: `${radius * 2}px`,
            borderColor: `rgba(34, 211, 238, ${0.1 - i * 0.03})`,
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30 + i * 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      {/* Orbiting Social Icons */}
      {socialLinks.map((link, index) => {
        const Icon = link.icon;
        const radius = 200;
        
        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
            }}
            animate={{
              rotate: [link.angle, link.angle + 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.5,
            }}
          >
            <motion.a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative group"
              style={{
                transform: `translate(-50%, -50%) translateY(-${radius}px)`,
              }}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              aria-label={link.name}
            >
              {/* Magnetic pull effect */}
              <motion.div
                animate={{
                  rotate: [-(link.angle), -(link.angle + 360)],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.5,
                }}
              >
                {/* Outer glow ring */}
                <motion.div
                  className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: link.color,
                    width: '120px',
                    height: '120px',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />

                {/* Icon container */}
                <div
                  className="relative w-20 h-20 rounded-full flex items-center justify-center backdrop-blur-lg border-2 transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${link.color}30, ${link.color}10)`,
                    borderColor: `${link.color}60`,
                    boxShadow: `0 0 30px ${link.color}40, inset 0 0 20px ${link.color}20`,
                  }}
                >
                  <Icon size={32} style={{ color: link.color }} />
                </div>

                {/* Label */}
                <motion.div
                  className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg font-bold text-sm whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(135deg, ${link.color}, ${link.color}cc)`,
                    color: '#0a0a1a',
                    boxShadow: `0 0 20px ${link.color}`,
                  }}
                >
                  {link.name}
                </motion.div>

                {/* Connection line to center */}
                <motion.div
                  className="absolute left-1/2 top-1/2 w-0.5 origin-bottom opacity-0 group-hover:opacity-50 transition-opacity"
                  style={{
                    height: `${radius}px`,
                    background: `linear-gradient(180deg, ${link.color}, transparent)`,
                    transform: 'translate(-50%, -100%)',
                  }}
                />
              </motion.div>
            </motion.a>
          </motion.div>
        );
      })}

      {/* Location Info in Center Bottom */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="flex items-center justify-center gap-2 text-cyan-400 mb-2">
          <MapPin size={20} />
          <span className="text-sm font-medium">Based in</span>
        </div>
        <p className="text-white text-lg font-semibold">Vijayawada, India</p>
        
        <motion.div
          className="mt-4 space-y-1 text-gray-400 text-sm"
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          <p>✨ Open to opportunities</p>
          <p>⚡ Quick responder</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

// ============================================
// FLOATING ORBS
// ============================================
function FloatingOrbs({ mousePosition }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${100 + Math.random() * 200}px`,
            height: `${100 + Math.random() * 200}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 3 === 0 
              ? 'radial-gradient(circle, rgba(34, 211, 238, 0.15), transparent)'
              : i % 3 === 1
              ? 'radial-gradient(circle, rgba(139, 92, 246, 0.15), transparent)'
              : 'radial-gradient(circle, rgba(6, 182, 212, 0.15), transparent)',
          }}
          animate={{
            x: [0, (Math.random() - 0.5) * 100],
            y: [0, (Math.random() - 0.5) * 100],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
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
// AURORA WAVES
// ============================================
function AuroraWaves() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: 0,
            right: 0,
            top: `${20 + i * 25}%`,
            height: '200px',
            background: `linear-gradient(90deg, 
              transparent,
              ${i % 2 === 0 ? 'rgba(34, 211, 238, 0.2)' : 'rgba(139, 92, 246, 0.2)'},
              transparent
            )`,
            filter: 'blur(60px)',
          }}
          animate={{
            x: ['-50%', '50%', '-50%'],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

// ============================================
// CONSTELLATION LINES
// ============================================
function ConstellationLines() {
  const points = Array.from({ length: 20 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    id: i,
  }));

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
      {points.map((point, i) => (
        <React.Fragment key={point.id}>
          <motion.circle
            cx={`${point.x}%`}
            cy={`${point.y}%`}
            r="2"
            fill="#22d3ee"
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          />
          {i < points.length - 1 && (
            <motion.line
              x1={`${point.x}%`}
              y1={`${point.y}%`}
              x2={`${points[i + 1].x}%`}
              y2={`${points[i + 1].y}%`}
              stroke="#22d3ee"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 4,
                delay: i * 0.3,
                repeat: Infinity,
              }}
            />
          )}
        </React.Fragment>
      ))}
    </svg>
  );
}

// ============================================
// MAGNETIC FIELD
// ============================================
function MagneticField({ mousePosition }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 3 === 0 ? '#22d3ee' : i % 3 === 1 ? '#8b5cf6' : '#06b6d4',
            boxShadow: `0 0 ${8 + Math.random() * 12}px currentColor`,
          }}
          animate={{
            y: [(Math.random() - 0.5) * 40, (Math.random() - 0.5) * -40],
            x: [(Math.random() - 0.5) * 40, (Math.random() - 0.5) * -40],
            opacity: [0.2, 0.8, 0.2],
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
// ALCHEMY TO ICE TRANSITION
// ============================================
export function AlchemyToIceTransition() {
  return (
    <div 
      className="relative h-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #1a0f2e 0%, #0f1628 100%)',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(26,15,46,1) 0%, rgba(15,22,40,0.5) 50%, rgba(15,22,40,1) 100%)',
        }}
      />

      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            left: `${Math.random() * 100}%`,
            bottom: '-10px',
            background: i % 3 === 0 ? '#a855f7' : i % 3 === 1 ? '#22d3ee' : '#8b5cf6',
            boxShadow: `0 0 ${15 + Math.random() * 10}px currentColor`,
          }}
          animate={{
            y: [0, -180],
            opacity: [1, 0.5, 0],
            scale: [0.5, 2.5, 3],
            background: [
              i % 3 === 0 ? '#a855f7' : i % 3 === 1 ? '#22d3ee' : '#8b5cf6',
              i % 3 === 0 ? '#22d3ee' : i % 3 === 1 ? '#8b5cf6' : '#06b6d4',
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

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        animate={{
          background: [
            'linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.8), transparent)',
            'linear-gradient(90deg, transparent, rgba(139, 92, 246, 1), transparent)',
            'linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.8), transparent)',
          ],
          boxShadow: [
            '0 0 20px rgba(34, 211, 238, 0.6)',
            '0 0 40px rgba(139, 92, 246, 1)',
            '0 0 20px rgba(34, 211, 238, 0.6)',
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