module.exports = {
	colors: {
		black100: "#000000",
		black60: "#707070",
		black30: "#C2C2C2",
		black15: "#D8D8D8",
		black10: "#E7E7E7",
		black5: "#F7F7F7",

		white100: "#FFFFFF",

		blue150: "#0A1C7B",
		blue100: "#1023D7",
		blue10: "#E6E7F5",

		green150: "#003728",
		green100: "#00674A",
		green10: "#E8EFE2",

		yellow150: "#A47A0F",
		yellow100: "#E2B929",
		yellow10: "#FFFAE9",

		orange150: "#A8501C",
		orange100: "#DA6722",
		orange10: "#FCF7F3",

		red150: "#510B0B",
		red100: "#C82400",
		red10: "#F4E4E3",

		brand() {
			this.blue100
		},
	},

	spacing: {
		0.5: "5px",
		1: "10px",
		2: "20px",
		4: "40px",
		6: "60px",
		12: "120px",
	},

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
}
