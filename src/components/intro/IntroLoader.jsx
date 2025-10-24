'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroLoader({ onComplete }) {
  const [showIntro, setShowIntro] = useState(true);
  const [phase, setPhase] = useState('title');
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase('video'), 2000),
      setTimeout(() => setPhase('fade'), 42000),
      setTimeout(() => {
        setShowIntro(false);
        onComplete();
      }, 43000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const handleSkip = () => {
    setShowIntro(false);
    onComplete();
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  if (!showIntro) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black">
      {/* Skip Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleSkip}
        className="absolute top-8 right-8 z-50 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105"
      >
        Skip Intro →
      </motion.button>

      {/* Mute/Unmute Button */}
      {phase === 'video' && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={toggleMute}
          className="absolute top-8 left-8 z-50 px-5 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105"
        >
          {isMuted ? 'Unmute 🔇' : 'Mute 🔊'}
        </motion.button>
      )}

      <AnimatePresence>
        {phase === 'title' && (
          <motion.div
            key="title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background: 'linear-gradient(to right, #001a33 0%, #1a0a00 100%)',
            }}
          >
            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold text-white tracking-wider"
            >
              GET READY...
            </motion.h1>
          </motion.div>
        )}

        {phase === 'video' && (
          <motion.div
            key="video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted={isMuted}
              className="w-full h-full object-cover"
              src="/videos/phoenix-intro.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </motion.div>
        )}

        {phase === 'fade' && (
          <motion.div
            key="fade"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-black"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
