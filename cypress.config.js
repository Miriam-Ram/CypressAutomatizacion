const { defineConfig } = require("cypress");
const configuration = require("./DB.json");
// const database = require("./cypress/plugins/index.js");
const mysql = require("mysql2");

module.exports = defineConfig({
  e2e: {
    "env": configuration.config.env,
    setupNodeEvents(on, config) {

      on("task", {
        getNipRegistro: (query) => {
          const connection = mysql.createConnection(config.env.db)

          connection.connect()

          return new Promise((resolve, reject) => {
            connection.query(query, (error, [rows]) => {
              if (error) reject(error)
              else {
                connection.end()
                const nip = rows.Nip.split("")
                resolve(nip);
              }
            });
          });
        },
      });

      on("task", {
        SayHello(name) {
          console.log("Hola" + name)
          return null;
        },
      });
    },
    baseUrl: 'https://plcomer.toksopc.grupotoks.com.mx'
  },
});

