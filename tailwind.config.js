/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAF6F0',
          100: '#F2E6D6', // Fondo crema base
          200: '#E7D8C5',
          300: '#DBC9B2',
          400: '#CBB499',
          900: '#261F18',
        },
        peach: {
          100: '#FDECE5',
          200: '#FADACD',
          300: '#F7C9B5',
          400: '#F4BDA2', // Melocotón suave / Acento
          500: '#EEA280',
          600: '#DC825B',
        },
        coral: {
          100: '#FCEBEF',
          200: '#F9CFD7',
          300: '#F3A7B6',
          400: '#EB8F9E',
          500: '#E07A8B', // Coral primario botones
          600: '#C65A6C',
          700: '#A43E50',
        },
        pinkAccent: {
          100: '#F8E9F0',
          200: '#EEC5D7',
          300: '#E19CBA',
          400: '#D17C9E',
          500: '#C0658B', // Rosa oscuro elegante
          600: '#A1476E',
          700: '#813154',
        },
        mirtilo: {
          100: '#F1ECF0',
          200: '#DCD1D8',
          300: '#BAA7B3',
          400: '#997F90',
          500: '#7D5D6E', // Púrpura muted
          600: '#624554',
          700: '#4A313E',
          800: '#34212A',
        },
        mint: {
          100: '#F0F5F0',
          200: '#D7E3D6',
          300: '#B6CCB4',
          400: '#8FA68D', // Verde menta
          500: '#6F8A6D',
          600: '#536E51',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(125, 93, 110, 0.08)',
        'card': '0 10px 25px -5px rgba(125, 93, 110, 0.06), 0 8px 10px -6px rgba(125, 93, 110, 0.04)',
        'float': '0 12px 35px -5px rgba(224, 122, 139, 0.35)',
      }
    },
  },
  plugins: [],
}
