'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredNode, setHoveredNode] = useState(null);

  // Define skill nodes with positions and connections - optimized for widescreen
  const skillNodes = [
    // Top Row - Programming Languages
    { id: 'python', name: 'Python', x: 30, y: 18, color: '#60A5FA', category: 'lang', size: 70 },
    { id: 'javascript', name: 'JavaScript', x: 50, y: 12, color: '#A78BFA', category: 'lang', size: 70 },
    { id: 'c', name: 'C', x: 70, y: 18, color: '#34D399', category: 'lang', size: 70 },
    
    // Left Cluster - ML/AI
    { id: 'tensorflow', name: 'TensorFlow', x: 15, y: 32, color: '#60A5FA', category: 'ml', size: 60 },
    { id: 'keras', name: 'Keras', x: 20, y: 45, color: '#818CF8', category: 'ml', size: 55 },
    { id: 'sklearn', name: 'Scikit-learn', x: 12, y: 58, color: '#38BDF8', category: 'ml', size: 55 },
    { id: 'langchain', name: 'LangChain', x: 25, y: 70, color: '#A78BFA', category: 'ml', size: 55 },
    { id: 'llamaindex', name: 'LlamaIndex', x: 18, y: 82, color: '#C084FC', category: 'ml', size: 50 },
    
    // Right Cluster - Backend
    { id: 'streamlit', name: 'Streamlit', x: 85, y: 32, color: '#F472B6', category: 'backend', size: 60 },
    { id: 'flask', name: 'Flask', x: 88, y: 45, color: '#60A5FA', category: 'backend', size: 60 },
    { id: 'fastapi', name: 'FastAPI', x: 82, y: 58, color: '#34D399', category: 'backend', size: 60 },
    
    // Top Right - Frontend
    { id: 'html', name: 'HTML', x: 75, y: 26, color: '#FB923C', category: 'frontend', size: 55 },
    { id: 'css', name: 'CSS', x: 80, y: 20, color: '#38BDF8', category: 'frontend', size: 55 },
    
    // Center - Databases (Hub)
    { id: 'mysql', name: 'MySQL', x: 45, y: 45, color: '#A78BFA', category: 'db', size: 65 },
    { id: 'mongodb', name: 'MongoDB', x: 55, y: 50, color: '#34D399', category: 'db', size: 65 },
    
    // Bottom Right - Cloud
    { id: 'aws', name: 'AWS', x: 68, y: 72, color: '#FB923C', category: 'cloud', size: 60 },
    { id: 'hostinger', name: 'Hostinger', x: 75, y: 82, color: '#60A5FA', category: 'cloud', size: 55 },
    
    // Bottom Center/Left - Tools
    { id: 'jupyter', name: 'Jupyter', x: 35, y: 82, color: '#FB923C', category: 'tools', size: 55 },
    { id: 'git', name: 'Git', x: 43, y: 76, color: '#F472B6', category: 'tools', size: 55 },
    { id: 'github', name: 'GitHub', x: 52, y: 79, color: '#A78BFA', category: 'tools', size: 55 },
    { id: 'vscode', name: 'VS Code', x: 60, y: 74, color: '#38BDF8', category: 'tools', size: 55 },
  ];

  const connections = [
    // Python hub connections
    { from: 'python', to: 'tensorflow' },
    { from: 'python', to: 'keras' },
    { from: 'python', to: 'sklearn' },
    { from: 'python', to: 'langchain' },
    { from: 'python', to: 'flask' },
    { from: 'python', to: 'fastapi' },
    { from: 'python', to: 'streamlit' },
    { from: 'python', to: 'jupyter' },
    { from: 'python', to: 'mysql' },
    { from: 'python', to: 'mongodb' },
    
    // JavaScript connections
    { from: 'javascript', to: 'html' },
    { from: 'javascript', to: 'css' },
    { from: 'javascript', to: 'streamlit' },
    
    // ML connections
    { from: 'tensorflow', to: 'keras' },
    { from: 'keras', to: 'sklearn' },
    { from: 'langchain', to: 'llamaindex' },
    { from: 'tensorflow', to: 'jupyter' },
    { from: 'sklearn', to: 'jupyter' },
    
    // Backend connections
    { from: 'flask', to: 'fastapi' },
    { from: 'streamlit', to: 'flask' },
    { from: 'flask', to: 'mysql' },
    { from: 'fastapi', to: 'mongodb' },
    { from: 'streamlit', to: 'mongodb' },
    
    // Frontend connections
    { from: 'html', to: 'css' },
    
    // Database connections
    { from: 'mysql', to: 'mongodb' },
    
    // Cloud connections
    { from: 'aws', to: 'hostinger' },
    { from: 'flask', to: 'aws' },
    { from: 'fastapi', to: 'aws' },
    { from: 'mongodb', to: 'aws' },
    
    // Tools connections
    { from: 'git', to: 'github' },
    { from: 'jupyter', to: 'git' },
    { from: 'github', to: 'vscode' },
    { from: 'vscode', to: 'python' },
    { from: 'vscode', to: 'javascript' },
    { from: 'git', to: 'python' },
  ];

  const getConnectedNodes = (nodeId) => {
    const connected = new Set([nodeId]);
    connections.forEach(conn => {
      if (conn.from === nodeId) connected.add(conn.to);
      if (conn.to === nodeId) connected.add(conn.from);
    });
    return connected;
  };

  const connectedNodes = hoveredNode ? getConnectedNodes(hoveredNode) : new Set();

  return (
    <section
      id="skills"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-32"
      style={{
        background: 'linear-gradient(180deg, #1a0a00 0%, #0a1628 30%, #0f1419 100%)',
      }}
    >
      {/* Animated Lava to Sky Transition - Enhanced */}
      <div className="absolute top-0 left-0 right-0 h-64 overflow-hidden">
        {/* Flowing Lava Waves */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`lava-${i}`}
            className="absolute w-full"
            style={{
              height: '120px',
              top: `${i * 40}px`,
              background: `radial-gradient(ellipse at center, rgba(220, 38, 38, ${0.4 - i * 0.08}), rgba(139, 0, 0, ${0.3 - i * 0.06}), transparent)`,
              filter: 'blur(30px)',
            }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{
              x: {
                duration: 15 - i * 2,
                repeat: Infinity,
                ease: 'linear',
              },
              opacity: {
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
          />
        ))}

        {/* Rising Heat Distortion */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`heat-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${60 + i * 20}px`,
              height: `${80 + i * 30}px`,
              left: `${i * 12}%`,
              bottom: 0,
              background: `radial-gradient(ellipse, rgba(234, 88, 12, ${0.3 - i * 0.03}), transparent)`,
              filter: 'blur(25px)',
            }}
            animate={{
              y: [0, -200],
              opacity: [0.5, 0],
              scale: [1, 1.5],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeOut',
            }}
          />
        ))}

        {/* Ember Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`ember-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              bottom: 0,
              background: i % 2 === 0 ? '#FB923C' : '#F87171',
              boxShadow: `0 0 ${5 + Math.random() * 10}px currentColor`,
            }}
            animate={{
              y: [0, -250 - Math.random() * 100],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [1, 0],
              scale: [1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeOut',
            }}
          />
        ))}

        {/* Sky Transition Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(26, 10, 0, 0) 0%, rgba(10, 22, 40, 0.4) 50%, rgba(10, 22, 40, 0.8) 100%)',
          }}
        />
      </div>

      {/* Animated Aurora/Northern Lights Effect */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'linear-gradient(120deg, transparent 0%, rgba(96, 165, 250, 0.3) 40%, rgba(167, 139, 250, 0.3) 60%, transparent 100%)',
          backgroundSize: '200% 100%',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Nebula Clouds */}
      <div className="absolute inset-0 opacity-40">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${400 + i * 100}px`,
              height: `${300 + i * 80}px`,
              left: `${i * 20}%`,
              top: `${20 + i * 15}%`,
              background: `radial-gradient(ellipse, ${
                i % 3 === 0 ? 'rgba(96, 165, 250, 0.15)' : 
                i % 3 === 1 ? 'rgba(167, 139, 250, 0.15)' : 
                'rgba(52, 211, 153, 0.15)'
              }, transparent)`,
              filter: 'blur(60px)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, 30, 0],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Twinkling Stars */}
      <div className="absolute inset-0 opacity-60">
        {[...Array(150)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              background: i % 4 === 0 ? '#60A5FA' : i % 4 === 1 ? '#A78BFA' : i % 4 === 2 ? '#34D399' : '#fff',
              boxShadow: `0 0 ${3 + Math.random() * 5}px currentColor`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Shooting Stars */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`shooting-${i}`}
          className="absolute h-0.5 w-20 rounded-full"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.8), transparent)',
            boxShadow: '0 0 10px rgba(96, 165, 250, 0.8)',
            top: `${20 + i * 25}%`,
            left: '-100px',
          }}
          animate={{
            x: ['0vw', '120vw'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            delay: i * 8,
            repeat: Infinity,
            repeatDelay: 20,
          }}
        />
      ))}

      {/* Content */}
      <div className="content-layer max-w-[1600px] mx-auto px-6 w-full relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent"
            style={{
              textShadow: '0 0 40px rgba(96, 165, 250, 0.3)',
            }}
          >
            Skill Constellation
          </motion.h2>
          <p className="text-blue-200/70 text-lg tracking-wide">
            Navigate the cosmos of connected technologies
          </p>
        </motion.div>

        {/* Constellation Container - Increased Height */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="relative w-full h-[900px] backdrop-blur-sm rounded-3xl border overflow-hidden"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(96, 165, 250, 0.03), rgba(10, 22, 40, 0.4))',
            borderColor: 'rgba(96, 165, 250, 0.2)',
            boxShadow: '0 0 60px rgba(96, 165, 250, 0.1), inset 0 0 60px rgba(96, 165, 250, 0.03)',
          }}
        >
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.1" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {connections.map((conn, i) => {
              const fromNode = skillNodes.find(n => n.id === conn.from);
              const toNode = skillNodes.find(n => n.id === conn.to);
              if (!fromNode || !toNode) return null;

              const isActive = hoveredNode && (connectedNodes.has(conn.from) && connectedNodes.has(conn.to));
              
              return (
                <g key={i}>
                  <motion.line
                    x1={`${fromNode.x}%`}
                    y1={`${fromNode.y}%`}
                    x2={`${toNode.x}%`}
                    y2={`${toNode.y}%`}
                    stroke={isActive ? fromNode.color : 'url(#lineGradient)'}
                    strokeWidth={isActive ? 2.5 : 1}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: isInView ? 1 : 0,
                      opacity: isActive ? 0.9 : 0.15,
                    }}
                    transition={{
                      pathLength: { duration: 1.5, delay: i * 0.015 },
                      opacity: { duration: 0.3 },
                    }}
                    filter={isActive ? "url(#glow)" : "none"}
                  />
                  
                  {/* Energy Particles flowing on active connections */}
                  {isActive && (
                    <motion.circle
                      r="2.5"
                      fill={fromNode.color}
                      filter="url(#glow)"
                      initial={{ 
                        cx: `${fromNode.x}%`, 
                        cy: `${fromNode.y}%`,
                      }}
                      animate={{ 
                        cx: [`${fromNode.x}%`, `${toNode.x}%`, `${fromNode.x}%`],
                        cy: [`${fromNode.y}%`, `${toNode.y}%`, `${fromNode.y}%`],
                        opacity: [0, 1, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  )}
                </g>
              );
            })}
          </svg>

          {/* Skill Nodes */}
          {skillNodes.map((node, index) => {
            const isActive = hoveredNode ? connectedNodes.has(node.id) : false;
            const isHovered = hoveredNode === node.id;
            
            return (
              <motion.div
                key={node.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { 
                  scale: isHovered ? 1.4 : isActive ? 1.2 : 1, 
                  opacity: hoveredNode ? (isActive ? 1 : 0.3) : 1,
                } : {}}
                transition={{ 
                  delay: 0.3 + index * 0.02,
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className="absolute cursor-pointer group"
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {/* Outer Glow Aura */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `radial-gradient(circle, ${node.color}, transparent)`,
                    filter: 'blur(20px)',
                    width: `${node.size * 1.8}px`,
                    height: `${node.size * 1.8}px`,
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                  animate={{
                    opacity: isHovered ? 0.8 : isActive ? 0.5 : 0.25,
                    scale: isHovered ? 1.6 : isActive ? 1.3 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Node Circle */}
                <motion.div
                  className="relative flex items-center justify-center rounded-full border-2 backdrop-blur-sm"
                  style={{
                    width: `${node.size}px`,
                    height: `${node.size}px`,
                    background: `radial-gradient(circle at 30% 30%, ${node.color}60, ${node.color}20, transparent)`,
                    borderColor: node.color,
                    boxShadow: `0 0 ${isActive ? 30 : 20}px ${node.color}`,
                  }}
                >
                  {/* Inner Core Pulse */}
                  <motion.div
                    className="absolute rounded-full"
                    style={{
                      width: `${node.size * 0.35}px`,
                      height: `${node.size * 0.35}px`,
                      background: node.color,
                      boxShadow: `0 0 20px ${node.color}, inset 0 0 10px rgba(255, 255, 255, 0.5)`,
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.1,
                    }}
                  />
                </motion.div>

                {/* Label */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: isHovered ? 1 : isActive ? 1 : 0.8,
                    y: node.size * 0.65,
                    scale: isHovered ? 1.15 : 1,
                  }}
                  className="absolute left-1/2 whitespace-nowrap text-center font-semibold"
                  style={{
                    transform: 'translateX(-50%)',
                    color: node.color,
                    textShadow: `0 0 15px ${node.color}, 0 2px 10px rgba(0,0,0,0.8)`,
                    fontSize: isHovered ? '15px' : '13px',
                    letterSpacing: '0.5px',
                  }}
                >
                  {node.name}
                </motion.div>

                {/* Expanding Pulse Rings on Hover */}
                {isHovered && (
                  <>
                    <motion.div
                      className="absolute rounded-full border-2"
                      style={{
                        width: `${node.size * 1.5}px`,
                        height: `${node.size * 1.5}px`,
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        borderColor: node.color,
                      }}
                      initial={{ scale: 0.8, opacity: 0.8 }}
                      animate={{ 
                        scale: 2.5, 
                        opacity: 0,
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    />
                    <motion.div
                      className="absolute rounded-full border-2"
                      style={{
                        width: `${node.size * 1.5}px`,
                        height: `${node.size * 1.5}px`,
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        borderColor: node.color,
                      }}
                      initial={{ scale: 0.8, opacity: 0.8 }}
                      animate={{ 
                        scale: 2.5, 
                        opacity: 0,
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: 0.5,
                      }}
                    />
                  </>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-12"
        >
          <motion.p
            className="text-blue-300/50 text-sm tracking-[0.3em] font-light"
            animate={{
              textShadow: [
                '0 0 10px rgba(96, 165, 250, 0.2)',
                '0 0 20px rgba(167, 139, 250, 0.3)',
                '0 0 10px rgba(96, 165, 250, 0.2)',
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            INTERCONNECTED EXPERTISE • INFINITE POSSIBILITIES
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}