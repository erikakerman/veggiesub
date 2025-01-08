/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				// Original shadcn/ui colors (keep these for component styling)
				border: "hsl(var(--border))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},

				// Custom color scheme
				shadow: '#877365',    // Primary text and headings
				taupe: '#A88A6F',     // Secondary elements and borders
				tan: '#D4B790',       // Background accents and hover states
				champagne: '#F1E8B0', // Highlights and CTAs
				apple: '#ACD09E',     // Success states and organic elements
				sheen: '#7DB095',     // Buttons and interactive elements
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				'accordion-up': {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [import("tailwindcss-animate")],
}