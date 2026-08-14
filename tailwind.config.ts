import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4f8',
          100: '#d9e4f0',
          200: '#b3c9e1',
          300: '#8daed2',
          400: '#6793c3',
          500: '#4178b4',
          600: '#2d5fa3',
          700: '#1f4682',
          800: '#122C4D',
          900: '#0a1a2e',
        },
        secondary: {
          50: '#f0fffe',
          100: '#d4f5f2',
          200: '#a8ebe5',
          300: '#7ce1d8',
          400: '#50d7cb',
          500: '#24cdbe',
          600: '#1db3a4',
          700: '#1B8C86',
          800: '#145d57',
          900: '#0d3430',
        },
        accent: {
          50: '#f8fce8',
          100: '#f0f8d8',
          200: '#e1f0b1',
          300: '#d2e88a',
          400: '#c3e063',
          500: '#a8d83c',
          600: '#8dc63f',
          700: '#72b436',
          800: '#57a22d',
          900: '#3c9024',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"SF Mono"', '"Monaco"', 'monospace'],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '16px' }],
        sm: ['14px', { lineHeight: '20px' }],
        base: ['16px', { lineHeight: '24px' }],
        lg: ['18px', { lineHeight: '28px' }],
        xl: ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['32px', { lineHeight: '40px' }],
      },
    },
  },
  plugins: [],
}
export default config
