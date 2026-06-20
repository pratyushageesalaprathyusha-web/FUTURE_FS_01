/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          deep: '#0A0E17',
          panel: '#101626',
          panel2: '#161D31',
          light: '#F6F7FB',
          lightpanel: '#FFFFFF'
        },
        accent: {
          violet: '#8B5CF6',
          cyan: '#22D3EE',
          gold: '#F4B740'
        },
        text: {
          primary: '#E7EAF2',
          muted: '#8A93A8',
          darkprimary: '#10131C',
          darkmuted: '#5B637A'
        },
        line: {
          dark: 'rgba(139,92,246,0.18)',
          light: 'rgba(16,19,28,0.10)'
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      backgroundImage: {
        'grid-dark': "linear-gradient(rgba(139,92,246,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.07) 1px, transparent 1px)",
        'grid-light': "linear-gradient(rgba(16,19,28,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(16,19,28,0.05) 1px, transparent 1px)"
      },
      boxShadow: {
        glow: '0 0 40px rgba(139,92,246,0.25)',
        glowCyan: '0 0 40px rgba(34,211,238,0.2)'
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        scan: 'scan 3s linear infinite'
      },
      keyframes: {
        blink: { '50%': { opacity: 0 } },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' }
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        }
      }
    }
  },
  plugins: []
}
