/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out',
        'wave': 'wave 1.5s infinite',
        'pulse': 'pulse 2s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        subtleFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      animation: {
        subtleFloat: 'subtleFloat 6s ease-in-out infinite',
      },
      fontFamily: {
        // Define your custom fonts here
        sans: ['Roboto', 'Arial', 'sans-serif'],
        heading: ['Montserrat', 'Helvetica', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      colors: {
        // Black and related shades
        black: '#000000',
        offBlack: '#0A0A0A',
        charcoal: '#333333',
        darkGray: '#4F4F4F',
        gray: '#808080',
        lightGray: '#B3B3B3',
        silver: '#D9D9D9',
        whiteSmoke: '#F5F5F5',
        
        // Accent colors
        midnight: '#1B1B2F',  // Deep blue-black
        onyx: '#353839',       // Dark, matte black
        slate: '#708090',      // Gray with blue undertones
        steel: '#2C3E50',      // Steel blue-gray
        gunmetal: '#2A3439',   // Dark bluish-gray
        ghostWhite: '#F8F8FF', // Very light gray, almost white

        // Optional accent colors for highlights
        crimson: '#DC143C',    // Deep red for contrast
        royalBlue: '#4169E1',  // Bold blue for accents
        emerald: '#50C878',    // Deep green for accents
      },
    },
  },
  plugins: [],
}