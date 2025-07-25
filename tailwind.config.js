/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Family Pizzeria Brand Colors
        brand: {
          red: '#DC2626',      // Main red color
          darkred: '#B91C1C',  // Darker red for hover states
          black: '#1F2937',    // Dark background
          gray: '#374151',     // Medium gray
          lightgray: '#F3F4F6' // Light gray for backgrounds
        }
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'red-gradient': 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)',
        'dark-gradient': 'linear-gradient(135deg, #1F2937 0%, #374151 100%)',
        'restaurant-dark': `
          linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.95) 0%,
            rgba(17, 24, 39, 0.9) 25%,
            rgba(31, 41, 55, 0.85) 50%,
            rgba(17, 24, 39, 0.9) 75%,
            rgba(0, 0, 0, 0.95) 100%
          ),
          url('https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1920')
        `,
        'restaurant-header': `
          linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(17, 24, 39, 0.7) 25%,
            rgba(31, 41, 55, 0.6) 50%,
            rgba(17, 24, 39, 0.7) 75%,
            rgba(0, 0, 0, 0.8) 100%
          ),
          url('https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1920')
        `
      }
    },
  },
  plugins: [],
};