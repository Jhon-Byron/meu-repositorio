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
        'gif-technology': "url('https://i.pinimg.com/originals/63/bc/93/63bc93a35b8b63bb44923bc733394603.gif')"
      },
      dropShadow: {
        'text-b': [
          '3px 3px 0 #000',
          '-3px 3px 0 #000',
          '-3px -3px 0 #000',
          '3px -3px 0 #000'
        ],
      }
    },
  },
  plugins: [],
}
