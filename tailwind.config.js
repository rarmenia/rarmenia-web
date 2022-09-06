/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
            '0%': {
                opacity: '0',
            },
            '100%': {
                opacity: '1',
            }
        },
        'fade-out': {
            '0%': {
                opacity: '1',
            },
            '100%': {
                opacity: '0',
            }
        },
        'fade-in-30': {
            '0%': {
                opacity: '0',
            },
            '100%': {
                opacity: '.3',
            }
        },
        'fade-out-30': {
            '0%': {
                opacity: '.3',
            },
            '100%': {
                opacity: '0',
            }
        },
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        },
        'fade-out-down': {
            'from': {
                opacity: '1',
                transform: 'translateY(0px)'
            },
            'to': {
                opacity: '0',
                transform: 'translateY(10px)'
            },
        },
        'fade-in-up': {
            '0%': {
                opacity: '0',
                transform: 'translateY(10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        },
        'fade-out-up': {
            'from': {
                opacity: '1',
                transform: 'translateY(0px)'
            },
            'to': {
                opacity: '0',
                transform: 'translateY(10px)'
            },
        }
    
    },
    animation: {
        'fade-in-30': 'fade-in-30 1.5s ease-out',
        'fade-out-30': 'fade-out-30 1.5s ease-out',
        'fade-in': 'fade-in 1.5s ease-out',
        'fade-out': 'fade-out 1.5s ease-out',
        'fade-in-down': 'fade-in-down 1.5s ease-out',
        'fade-out-down': 'fade-out-down 1.5s ease-out',
        'fade-in-up': 'fade-in-up 1.5s ease-out',
        'fade-out-up': 'fade-out-up 1.5s ease-out'
    },
    colors: {
        'tfe': {
            'light': '#bcb0a2 ',
            DEFAULT: '#a19383',
            'dark': '#6e6153',
        }
    }
    },
  },
  plugins: [],
}
