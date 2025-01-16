import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1200px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
      },
    },
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
      },
      colors: {
        'blue-emerald': '#0f1927',
      },
      animation: {
        'move-left': 'move-left 80s linear infinite',
        'move-right': 'move-right 80s linear infinite',
      },
      keyframes: {
        'move-left': {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-88%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'move-right': {
          '0%': { transform: 'translateX(-88%)' },
          '50%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-88%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
