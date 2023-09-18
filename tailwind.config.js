/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
        alt: 'var(--font-bai-jamjuree)',
        One: 'Concert One',
      },
      backgroundImage: {
        'gif-technology': "url('https://i.pinimg.com/originals/63/bc/93/63bc93a35b8b63bb44923bc733394603.gif')",
        'mouse' : "url('https://static.wixstatic.com/media/bbcfb5_93fbff89deef44afaf7eb19dfe908440~mv2.gif')",
        'projectContainer' : "url('https://i.ibb.co/xz0hXDM/project-mockup-example.jpg')"
      },
      dropShadow: {
        'text-b': [
          '3px 3px 0 #000',
          '-3px 3px 0 #000',
          '-3px -3px 0 #000',
          '3px -3px 0 #000'
        ],
      },
      colors: {
        gray: {
          50: '#eaeaea',
          100: '#bebebf',
          200: '#9e9ea0',
          300: '#727275',
          400: '#56565a',
          500: '#2c2c31',
          600: '#28282d',
          700: '#1f1f23',
          800: '#18181b',
          900: '#121215',
        },
        purple: {
          50: '#f3eefc',
          100: '#d8cbf7',
          200: '#c6b2f3',
          300: '#ab8eee',
          400: '#9b79ea',
          500: '#8257e5',
          600: '#764fd0',
          700: '#5c3ea3',
          800: '#48307e',
          900: '#372560',
        },
        green: {
          50: '#e6fbef',
          100: '#b1f1ce',
          200: '#8cebb6',
          300: '#57e295',
          400: '#36dc81',
          500: '#04d361',
          600: '#04c058',
          700: '#039645',
          800: '#027435',
          900: '#025929',
        },
      },
    },
  },
  plugins: [],
}
