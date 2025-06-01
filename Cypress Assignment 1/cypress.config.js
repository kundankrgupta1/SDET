const { defineConfig } = require("cypress");

module.exports = defineConfig({
	e2e: {
		baseUrl: 'https://movie-app-blush-phi.vercel.app/',
		// setupNodeEvents(on, config) {
		// 	// implement node event listeners here
		// },
	},
});
