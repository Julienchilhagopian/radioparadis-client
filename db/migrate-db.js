const path = require('path')
const envPath = path.resolve(process.cwd(), '.env.local')

console.log({ envPath })

require('dotenv').config({ path: envPath })

const { Client } = require('pg');
const fs = require('fs');

const dbFilePath = `${__dirname}/populate.sql`;
const initQuery = fs.readFileSync(dbFilePath).toString();

const client = new Client({
	user:  process.env.DB_USER,
	host:  process.env.DB_HOST,
	database: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	port: process.env.DB_PORT, 
})
client.connect()


client.query(initQuery, (err, res) => {
	if (err) {
    console.log(err)
	}
	else {
		console.log("Import terminé avec succès");
	}
	client.end();
});