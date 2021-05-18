const { Pool } = require('pg');

// Inialisation de la connexion
const pool = new Pool({
	user:  process.env.DB_USER,
	host:  process.env.DB_HOST,
	database: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	port: process.env.DB_PORT, 
})

export async function query(sql, params, callback) {
  // 1. Connection
  pool.connect((err, client, done) => {
    if(err) {
      return console.error('error fetching client from pool', err)
    }
    // 2. Execute the query
    client.query(sql, params, (err, result) => {
      // 3. Close Connection
      done();

      if (err) {
        console.log(err);
      }
      else {
        // 4. Execute the callback(res)
        callback(result)
      }
    })
  });
}