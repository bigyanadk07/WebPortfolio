/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
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