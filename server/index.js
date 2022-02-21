const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
// const mysql = require("mysql");
const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "mysqlroot",
  database: "cruddatabase",
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
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

app.post("/api/insert", (req, res) => {
  res.send("inside API");
  console.log(req);
  const movieName = req.body.movieName;
  const movieReview = req.body.movieReview;
  const sqlInsert =
    "INSERT INTO movie_reviews (movieName,movieReview) VALUES (?,?)";

  db.query(sqlInsert, [movieName, movieReview], (err, result) => {});
});
app.listen(5000, () => {
  console.log("running on port 5000");
});
