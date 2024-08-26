/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class', 
	theme: {
		extend: {
			colors: {
				'primary': '#101010',
				'secundary': '#CE9E3C'
			  },

		},
	},
	plugins: [
		function ({ addUtilities }) {
		  const newUtilities = {
			'.no-scrollbar': {
			  '-ms-overflow-style': 'none', /* IE and Edge */
			  'scrollbar-width': 'none', /* Firefox */
			},
			'.no-scrollbar::-webkit-scrollbar': {
			  'display': 'none', /* Chrome, Safari, Opera */
			},
		  };
	
		  addUtilities(newUtilities, ['responsive', 'hover']);
		},
	  ],
}
