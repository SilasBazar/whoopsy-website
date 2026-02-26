/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whoopsy: {
          green: '#86ce43',
          black: '#1d1c00',
          white: '#e5e6cc',
        }
      },
      fontFamily: {
        display: ['"Londrina Solid"', 'cursive'],
        mono: ['"Space Mono"', 'monospace'],
      },
      boxShadow: {
        '3d': '0px 0px 0px 0px #86ce43, 1px 1px 0px 0px #86ce43, 2px 2px 0px 0px #86ce43, 3px 3px 0px 0px #86ce43, 4px 4px 0px 0px #86ce43, 5px 5px 0px 0px #86ce43, 6px 6px 0px 0px #86ce43, 7px 7px 0px 0px #86ce43, 8px 8px 0px 0px #86ce43, 9px 9px 0px 0px #86ce43, 10px 10px 0px 0px #86ce43',
        '3d-black': '0px 0px 0px 0px #1d1c00, 1px 1px 0px 0px #1d1c00, 2px 2px 0px 0px #1d1c00, 3px 3px 0px 0px #1d1c00, 4px 4px 0px 0px #1d1c00',
        '3d-hover': '1px 1px 0px 0px #86ce43, 2px 2px 0px 0px #86ce43, 3px 3px 0px 0px #86ce43, 4px 4px 0px 0px #86ce43, 5px 5px 0px 0px #86ce43, 6px 6px 0px 0px #86ce43, 7px 7px 0px 0px #86ce43, 8px 8px 0px 0px #86ce43, 9px 9px 0px 0px #86ce43, 10px 10px 0px 0px #86ce43, 11px 11px 0px 0px #86ce43',
      },
      transitionDuration: {
        'btn-normal': '0.2s',
        'btn-fast': '0.02s',
      },
      transitionTimingFunction: {
        'ease-out': 'ease-out',
      },
      borderRadius: {
        'whoopsy': '16px',
      }
    },
  },
  plugins: [],
}