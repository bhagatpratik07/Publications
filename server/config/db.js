const mysql = require("mysql");
require("dotenv").config();

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: process.env.DB_PASSWORD,
  database: "publications",
});

module.exports = db;
