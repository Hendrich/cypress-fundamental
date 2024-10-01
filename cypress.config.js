const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-dev-server");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "react", // atau 'vue', 'angular', dll., sesuai framework yang digunakan
      bundler: "webpack",
      webpackConfig: require("./webpack.config.js"), // Sesuaikan dengan file konfigurasi Webpack
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
