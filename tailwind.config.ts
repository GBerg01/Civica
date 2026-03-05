import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        parchment: {
          50:  '#fdf8f0',
          100: '#f9edd8',
          200: '#f2d8af',
          300: '#e8be7c',
          400: '#dca04f',
          500: '#d08832',
        },
        navy: {
          800: '#1a2744',
          900: '#0f1a33',
          950: '#080e1e',
        },
      },
    },
  },
  plugins: [],
}

export default config
