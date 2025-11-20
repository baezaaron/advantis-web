/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors derived from the Advantis logo
        'primary': '#003366', // Dark blue
        'secondary': '#0C59A6', // Medium blue
        'accent': '#1A85FF', // Light blue
        'neutral-100': '#F7F9FA',
        'neutral-200': '#E9EEF2',
        'neutral-300': '#D1D9E0',
        'neutral-400': '#A9B5C1',
        'neutral-500': '#5A6B7E',
        'neutral-600': '#344057',
        'neutral-700': '#22293B',
        'neutral-800': '#131722',
        'neutral-900': '#0A0D14',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Lora', 'serif'],
        heading: ['Lora', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
} 