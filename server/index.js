const express = require("express");
const app = express();
// const mysql = require("mysql");
//due to security issue using mysql2
const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "mysqlroot",
  database: "cruddatabase",
});

// http://localhost:5000/
app.get("/", (req, res) => {
  const sqlInsert =
    "INSERT INTO movie_reviews (movieName,movieReview) VALUES ('inception','good movie')";
  db.query(sqlInsert, (err, result) => {
    console.log("err", err);
    console.log("result", result);
    res.send("Hello Nithin");
  });
});
app.listen(5000, () => {
  console.log("running on port 5000");
});
