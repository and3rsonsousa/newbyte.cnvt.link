let colors = require("tailwindcss/colors");

module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				gray: colors.slate,
				brand: {
					1: "#0ff",
					2: "#1a46ff",
					3: "#003388",
					4: "#00194d",
				},
			},
		},
	},
	plugins: [],
};
