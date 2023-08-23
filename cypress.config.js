const { defineConfig } = require("cypress");
const configuration = require("./DB.json");
const database = require("./cypress/plugins/index.js");

module.exports = defineConfig({
  e2e: {
    "env": configuration.config.env,
    setupNodeEvents(on, config) {

      on("task", {
        queryDb(query) {
          return database(query, config);
        },
      });

      on("task", {
        SayHello(name) {
          console.log("Hola" + name)
          return null;
        },
      });
    },
  },
});

