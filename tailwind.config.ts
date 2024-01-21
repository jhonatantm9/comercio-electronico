import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'raisin-black': '#202030ff',
        'persian-pink': '#ee79c5ff',
        'eggshell': '#e6e4ceff',
        'sea-green': '#0a8754ff',
        'medium-slate-blue': '#736cedff',
        'lavander-pink': '#ff9cddff',
        'floral-white': '#fffcf2ff',
        'dark-purple': '#2c1320ff',
        'light-sea-green': '#20a39eff',
        'reseda-green': '#676f54ff',
        'erie-black': '#1e1e1eff',
        'hot-pink': '#ff68bbff',
      }
    },
  },
  plugins: [],
}
export default config
