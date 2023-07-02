/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'sakura-original': '#fcc9b9',
        'sakura-inverted': '#033646',
        'sakura-saturated': 'ffc5b1',
        'sakura-darker': 'f88865',
        'sakura-peachpuff': 'ffdab9',
        'sakura-silver': 'c0c0c0',
        'sakure-grayscale': 'dbdbdb',
      }
    },
  },
  plugins: [],
}
