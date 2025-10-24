// src/lib/cookies.js
import Cookies from 'js-cookie';

export const cookieManager = {
  // Check if intro has been seen this session
  hasSeenIntro() {
    return Cookies.get('phoenix_intro_seen') === 'true';
  },

  // Mark intro as seen (session cookie - expires when browser closes)
  setIntroSeen() {
    Cookies.set('phoenix_intro_seen', 'true');
  },

  // Reset intro (for testing purposes)
  resetIntro() {
    Cookies.remove('phoenix_intro_seen');
  },

  // Store user preferences
  setPreference(key, value) {
    Cookies.set(`pref_${key}`, value, { expires: 365 });
  },

  getPreference(key) {
    return Cookies.get(`pref_${key}`);
  },
};