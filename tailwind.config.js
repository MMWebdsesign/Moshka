/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#f8f2e8',
          warm: '#efe5d6',
          graphite: '#1f1d1a',
          charcoal: '#2a2723',
          ink: '#2f2a25',
          gold: '#c19a6b',
          copper: '#b77747',
          line: '#d9ccb8',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 60px -28px rgba(20, 14, 7, 0.35)',
        card: '0 18px 38px -24px rgba(44, 33, 17, 0.35)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
      },
    },
  },
  plugins: [],
}

