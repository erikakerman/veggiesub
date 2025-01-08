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
				// New color scheme
				'moss': '#606C38',
				'forest': '#283618',
				'cream': '#FEFAE0',
				'earth': '#DDA15E',
				'rust': '#BC6C25',
			},
		},
	},
	plugins: [],
}