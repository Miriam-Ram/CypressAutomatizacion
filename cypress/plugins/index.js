const mysql = require("mysql2");

function queryTestDb(query, config) {

  const connection = mysql.createConnection(config.env.db)

  connection.connect()

  return new Promise((resolve, reject) => {
    connection.query(query, (error, [rows]) => {
      if (error) reject(error)
      else {
        connection.end()
        console.log(rows)
        resolve(rows.Nip)
      }
    });
  });

/*   connection.promise().query(query)
  .then( ([rows,fields]) => {
    console.log(rows[0].Nip,fields);
    const Niptel= rows[0].Nip;
    return Niptel.split("")
  })
  .catch(console.log)
  .then( () => connection.end()); */
}

module.exports = queryTestDb;