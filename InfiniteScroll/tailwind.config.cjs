/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fade: 'transition duration-200	ease-in-out',
      },

      colors: {
        red : `#EE0E2C`,
        blue : `#486581`,
        linkedlnBlue : `#0077b5`,
        WhatappsGreen : `#25d366`,
        green : `#64ffda`,
        grey : `#323F4B`,
        purple : `#6e5494`
      },

      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}
