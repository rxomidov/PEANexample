import { Client } from "pg";

// create the connection to database

const db = new Client({
    host: "localhost",
    user: "postgres",
    password: "1",
    port: 5432,
    database: "db_restaurant",
});

db.connect(err => {
  if (err) {
    console.error('Connection error', err.stack);
  } else {
    console.log('Connected to PostgreSQL!');
  }
});

export default db;