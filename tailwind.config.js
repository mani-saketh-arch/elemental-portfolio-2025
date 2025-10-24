/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base dark theme
        'dark-base': '#0a0e27',
        
        // 🌊 Water theme
        'water-deep': '#001a33',
        'water-cyan': '#00d4ff',
        'water-teal': '#0a4d68',
        
        // 🔥 Fire theme
        'fire-dark': '#1a0a00',
        'fire-orange': '#ff6b35',
        'fire-bright': '#ff4500',
        
        // ⚡ Lightning theme
        'lightning-dark': '#0d0221',
        'lightning-purple': '#7209b7',
        'lightning-cyan': '#00fff5',
        
        // ❄️ Ice theme
        'ice-dark': '#0d1b2a',
        'ice-blue': '#a0c4ff',
        'ice-frost': '#bde0fe',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'lightning-strike': 'lightning-strike 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 20px rgba(255, 75, 0, 0.5)' },
          '50%': { opacity: 0.8, boxShadow: '0 0 40px rgba(255, 75, 0, 0.8)' },
        },
        'lightning-strike': {
          '0%': { opacity: 0, transform: 'scaleY(0)' },
          '50%': { opacity: 1, transform: 'scaleY(1)' },
          '100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}