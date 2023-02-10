const tokens = require("./tokens.cjs")

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.tsx"],
	theme: {
		extend: {},
		colors: tokens.colors,

		spacing: tokens.colors,

		fontFamily: {
			sans: '"ll-unica77", "Helvetica Neue", Helvetica, Arial, sans-serif',
		},

		screens: {
			lg: { min: "1920px" },
			md: { min: "1280px", max: "1919px" },
			sm: { min: "768px", max: "1279px" },
			xs: { max: "767px" },
		},

		fontSize: {
			xxxl: ["102px", { lineHeight: "108px", letterSpacing: "-0.01em" }],
			xxl: ["60px", { lineHeight: "70px", letterSpacing: "-0.01em" }],
			xl: ["40px", { lineHeight: "48px", letterSpacing: "-0.01em" }],
			lg: ["26px", { lineHeight: "40px", letterSpacing: "-0.01em" }],
			"lg-display": ["26px", { lineHeight: "32px", letterSpacing: "-0.01em" }],
			md: ["20px", "32px"],
			sm: ["16px", "26px"],
			"sm-display": ["16px", "20px"],
			xs: ["13px", "20px"],
			bq: ["50px", { lineHeight: "60px", letterSpacing: "-0.01em" }],
		},
	},

	plugins: [],
}
