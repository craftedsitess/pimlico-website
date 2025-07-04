
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'playfair': ['Playfair Display', 'serif'],
				'inter': ['Inter', 'sans-serif'],
				'sans': ['Inter', 'sans-serif'],
				'serif': ['Playfair Display', 'serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				pink: {
					50: 'rgb(var(--pink-50))',
					100: 'rgb(var(--pink-100))',
					200: 'rgb(var(--pink-200))',
					300: 'rgb(var(--pink-300))',
					400: 'rgb(var(--pink-400))',
					500: 'rgb(var(--pink-500))',
					600: 'rgb(var(--pink-600))',
					700: 'rgb(var(--pink-700))',
					800: 'rgb(var(--pink-800))',
					900: 'rgb(var(--pink-900))',
					950: 'rgb(var(--pink-950))',
				},
				'rose-gold': 'rgb(var(--rose-gold))',
				'pearl-pink': 'rgb(var(--pearl-pink))',
				'blush': 'rgb(var(--blush))',
				'deep-rose': 'rgb(var(--deep-rose))',
				'champagne-pink': 'rgb(var(--champagne-pink))',
				'dark-pink': 'rgb(var(--dark-pink))',
				'light-text': 'rgb(var(--light-text))',
				'dark-text': 'rgb(var(--dark-text))',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'glow-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(219, 39, 119, 0.3)'
					},
					'50%': {
						boxShadow: '0 0 40px rgba(219, 39, 119, 0.6), 0 0 60px rgba(244, 114, 182, 0.4)'
					}
				},
				'text-glow': {
					'0%, 100%': {
						textShadow: '0 0 10px rgba(219, 39, 119, 0.5)'
					},
					'50%': {
						textShadow: '0 0 20px rgba(219, 39, 119, 0.8), 0 0 30px rgba(244, 114, 182, 0.6)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'text-glow': 'text-glow 2s ease-in-out infinite',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'gradient-pink': 'linear-gradient(135deg, rgb(var(--pink-100)), rgb(var(--pink-300)), rgb(var(--pink-500)))',
				'gradient-pink-complex': 'linear-gradient(45deg, rgb(var(--pink-200)), rgb(var(--pink-400)), rgb(var(--pink-600)), rgb(var(--rose-gold)))',
			},
			perspective: {
				'1000': '1000px',
				'2000': '2000px',
			},
			backdropBlur: {
				'xs': '2px',
				'2xl': '40px',
				'3xl': '64px',
			},
			textShadow: {
				'pink': '0 2px 4px rgba(219, 39, 119, 0.3)',
				'pink-lg': '0 4px 8px rgba(219, 39, 119, 0.4)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
