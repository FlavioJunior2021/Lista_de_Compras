import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'purple-light': '#A881E6',
        'purple': '#7450AC',
        'purple-dark': '#523480',
        'gray-100': '#FBF9FE',
        'gray-200': '#AFABB6',
        'gray-300': '#252529',
        'gray-400': '#17171A',
        'gray-500': '#111112',
        'gray-600': '#0C0C0D',
        'success-light': '#4E995E',
        'success': '#2F723D',
        'pink': '#DB5BBF',
        'pink-dark': '#251622',
        'orange': '#E07B67',
        'orange-dark': '#261A17',
        'yellow': '#BB9F3A',
        'yellow-dark': '#211E12',
        'green': '#8CAD51',
        'green-dark': '#1C2015',
        'blue': '#7B94CB',
        'blue-dark': '#1A1D23',
      },
    },
  },
  plugins: [],
}
export default config
