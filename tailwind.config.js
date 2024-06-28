/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
         'typing': 'typing 2s steps(20) infinite alternate, blink .7s infinite',
      },
      colors: {
        primary: '#0e7490' ,
        dark: '#06b6d4' ,
      },
      screens: {
        '2xl' : '1320px',
      },
      transitionDuration: {
        'lama' : '3000ms',
        'sedang' : '1500ms',
      },
    },
  },
  plugins: [ require("tailwindcss-animate"),
  ],
};

