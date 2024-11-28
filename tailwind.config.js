/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', 'class'],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  	extend: {
  		screens: {
  			larger: '960px' // screens 960px and larger
  		},
  		colors: {
  			'gradient-start': 'hsl(249, 99%, 64%)',
  			'gradient-end': 'hsl(278, 94%, 30%)',
  			'error-red': 'hsl(0, 100%, 66%)',
  			'light-grayish-violet': 'hsl(270, 3%, 87%)',
  			'dark-grayish-violet': 'hsl(279, 6%, 55%)',
  			'very-dark-violet': 'hsl(278, 68%, 11%)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontSize: {
  			base: '18px'
  		},
  		fontFamily: {
  			'space-grotesk': ['Space Grotesk', 'Roboto', 'sans-serif']
  		},
  		fontWeight: {
  			medium: '500'
  		},
  		backgroundImage: {
  			'input-border': 'linear-gradient(to right, hsl(249, 99%, 64%), hsl(278, 94%, 30%))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
