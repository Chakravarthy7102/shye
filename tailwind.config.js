/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			animation: {
				"fade-in": "fadeIn 250ms ease-in",
			},
			keyframes: {
				fadeIn: {
					"0%": {
						opacity: 0,
					},
					"100%": {
						opacity: 1,
					},
				},
			},
		},
	},
	plugins: [],
};
