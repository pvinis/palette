const { theme } = require("./tokens.cjs")

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.tsx"],
	theme,
	plugins: [],
}
