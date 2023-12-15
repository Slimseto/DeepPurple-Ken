/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary-500': '#877EFF',
      'primary-600': '#5D5FEF',
      'secondary-500': '#FFB620',
      'off-white': '#D0DFFF',
      'red': '#FF5A5A',
      'dark-1': '#000000',
      'dark-2': '#09090A',
      'dark-3': '#101012',
      'dark-4': '#1F1F22',
      'light-1': '#FFFFFF',
      'light-2': '#EFEFEF',
      'light-3': '#7878A3',
      'light-4': '#5C5C7B',
      'purple-1': '#322952',
      'purple-2': '#3A3361',
      'purple-3': "#322952",
      'positive-green': "#ABD15E",
    },
    screens: {
      'xs': '480px',
      'screen-2xl': '1440px',
      'screen': '1024px',
    },
    height: {
      '128': '32rem',
      '160': '45.5rem',
      'full': '65%',
    },
    width: {
      '300': '300px',
      '420': '420px',
      '465': '465px',
      'full': '100%',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],

    },
    keyframes: {
      'accordion-down': {
        from: { height: 0 },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: 0 },
      },
    },
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
    },
  },
  plugins: [],
}

