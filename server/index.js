const express = require("express");
const app = express();
const mysql = require("mysql");

var cors = require("cors");

app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "publications",
});

app.get("/getData", (req, res) => {
  db.query("SELECT * FROM studentpublications", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, (req, res) => {
  console.log("Server started");
});
