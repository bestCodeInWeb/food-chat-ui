/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grey-1': '#3A3A42',
        'grey-2': '#9798AF',
        'grey-3': '#DCDDE4',
        'grey-4': '#F5F7FA',
        'grey-5': '#7A7B8D',
        'grey-6': '#4D5664',
        'grey-7': '#6B7280',
        'grey-8': '#E5E7EB',
        'white-2': '#FBFBFB',
        'red': '#EB2A41',
        'red-1': '#D73B2A',
        'red-10': '#FBEBEA',
        'red-action': '#F6BBB4',
        'blue': '#0B81DF',
        'blue-2': '#E9F4FE',
        'green': '#5E9B19',
        'green-10': '#EFF5E8',
        'dark': '#120C0F',
        'dark-2': '#111827',
        'primary': '#2196F3',
        'primary-2': '#73B9F1',
        'secondary': '#FBFBFB',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 4px rgba(72, 79, 93, 0.06)',
      },
      keyframes: {
        'popup-open': {
          '0%': { position: 'relative', bottom: '-100%', transform: 'scale(1)' },
          '20%': { position: 'relative', bottom: '-40%', transform: 'scale(1.1)' },
          '40%': { position: 'relative', bottom: '-30%', transform: 'scale(1.15)' },
          '60%': { position: 'relative', bottom: '-20%', transform: 'scale(1.15)' },
          '80%': { position: 'relative', bottom: '-10%', transform: 'scale(1.1)' },
          '100%': { position: 'relative', bottom: '0', transform: 'scale(1)' },
        },
        'appear': {
          '0%': { display: 'none', opacity: '0' },
          '20%': { opacity: '.2' },
          '40%': { opacity: '.4' },
          '60%': { opacity: '.6' },
          '80%': { opacity: '.8' },
          '100%': {},
        },
      },
      animation: {
        'popup-open': 'popup-open .25s ease-in-out forwards',
        'popup-close': 'popup-open .25s ease-in-out forwards reverse',
        
        'appear': 'appear .25s ease-in-out forwards',
        'disappear': 'appear .25s ease-in-out forwards reverse',
      }
    },
  },
  plugins: [],
}
