const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            config.baseUrl = 'https://localhost:3000/';
            config.viewportWidth = 1536;
            config.viewportHeight = 960;

            return config;
        },
    },
    userAgent: 'OurAppTesting/1.0',
});
