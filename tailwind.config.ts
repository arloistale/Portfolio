import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'navbar': "#ffffff",
        'hamburger': "#2E4A7D",
        'hero-blue': "#AEDFF7",
        'hero-orange': "#FF7C33"
      },
      textColor: {
        'normal': "#2E4A7D",
        'hero': "#1A3B5D"
      },
      screens: {
        'xs-2': '200px',
        'xs': '300px'
      }
    },
  },
  plugins: [],
}
export default config
