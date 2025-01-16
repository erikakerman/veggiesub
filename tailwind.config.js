/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		'./pages/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
		'./app/**/*.{js,jsx}',
		'./src/**/*.{js,jsx}',
	],
	theme: {
		extend: {
			colors: {
				forest: '#2D3A3A',
				moss: '#4A6670',
				sage: '#94A193',
				cream: '#F4F1EA',
				accent: '#D96666',
			},
		},
	},
	plugins: [],
}