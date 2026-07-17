import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        yellow:  { DEFAULT: '#FFD166', dark: '#D4920A', light: '#FFF9EC' },
        green:   { DEFAULT: '#06D6A0', dark: '#04BE8C', light: '#EEF9F4' },
        red:     { DEFAULT: '#FF6B6B' },
        dark:    { DEFAULT: '#1A1A1A', deeper: '#141414', card: '#1C1C1E' },
        warm:    { DEFAULT: '#FFF9F0', border: '#F5EFE6', muted: '#C0B5A8' },
        bronze:  { DEFAULT: '#CD7F32' },
        purple:  { DEFAULT: '#C4A8FF' },
        orange:  { DEFAULT: '#FFB84D' },
      },
      fontFamily: {
        cairo: ['var(--font-cairo)', 'Cairo', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
      keyframes: {
        confettiDrop: {
          '0%':   { transform: 'translateY(0) rotate(0deg)',      opacity: '1' },
          '100%': { transform: 'translateY(860px) rotate(560deg)', opacity: '0' },
        },
        badgePop: {
          '0%':   { transform: 'scale(0) rotate(-14deg)', opacity: '0' },
          '58%':  { transform: 'scale(1.24) rotate(5deg)', opacity: '1' },
          '100%': { transform: 'scale(1) rotate(0deg)',    opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 28px rgba(255,215,0,0.36), 0 0 60px rgba(255,180,0,0.12)' },
          '50%':      { boxShadow: '0 0 52px rgba(255,215,0,0.70), 0 0 100px rgba(255,180,0,0.28)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        shimmerBronze: {
          '0%, 100%': { boxShadow: '0 4px 18px rgba(205,127,50,0.26)' },
          '50%':      { boxShadow: '0 4px 32px rgba(205,127,50,0.52)' },
        },
      },
      animation: {
        'confetti-drop':  'confettiDrop var(--dur, 2.1s) var(--delay, 0s) ease-in infinite',
        'badge-pop':      'badgePop 0.75s 0.55s cubic-bezier(0.34,1.56,0.64,1) both',
        'glow-pulse':     'glowPulse 2.2s 1.4s ease-in-out infinite',
        'fade-up':        'fadeUp 0.6s var(--delay,0s) both',
        'shimmer-bronze': 'shimmerBronze 2.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
