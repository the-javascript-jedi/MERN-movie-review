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
//use these middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// http://localhost:5000/
app.get("/api/getMovies", (req, res) => {
  const sqlSelect = "SELECT * FROM movie_reviews";
  db.query(sqlSelect, (err, result) => {
    // console.log("err", err);
    // console.log("result", result);
    res.send(result);
  });
});
// Insert the Review
app.post("/api/insert", (req, res) => {
  res.send("inside API");
  console.log(req);
  const movieName = req.body.movieName;
  const movieReview = req.body.movieReview;
  const sqlInsert =
    "INSERT INTO movie_reviews (movieName,movieReview) VALUES (?,?)";
  db.query(sqlInsert, [movieName, movieReview], (err, result) => {
    console.log("Insert result", result);
  });
});
// DELETE request
app.delete("/api/delete/:movieId", (req, res) => {
  const movieId = req.params.movieId;
  const sqlDelete = "DELETE FROM movie_reviews WHERE Id=?";
  db.query(sqlDelete, movieId, (err, result) => {
    if (err) {
      console.log("delete err", err);
    } else {
      console.log("delete result", result);
      res.send({ status: 200, msg: `Deleted ${movieId}` });
    }
  });
});
app.listen(5000, () => {
  console.log("running on port 5000");
});
