import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0a2540',
          soft: '#425466',
          muted: '#697386'
        },
        accent: {
          DEFAULT: '#635bff',
          cyan: '#00d4ff',
          pink: '#ff6ac1'
        },
        line: '#e3e8ee',
        canvas: '#ffffff',
        surface: '#f6f9fc'
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          '"Hiragino Kaku Gothic ProN"',
          '"Noto Sans JP"',
          'sans-serif'
        ]
      },
      maxWidth: {
        prose: '42rem'
      },
      letterSpacing: {
        tightish: '-0.015em'
      }
    }
  },
  plugins: []
} satisfies Config;
