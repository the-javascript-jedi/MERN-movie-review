import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  // state
  const [movieName, setMovieName] = useState("");
  const [review, setReview] = useState("");
  const [movieReviewList, setMovieReviewList] = useState([]);
  // useEffect
  useEffect(() => {
    try {
      Axios.get("http://localhost:5000/api/getMovies").then((response) => {
        console.log("response", response.data);
        setMovieReviewList(response.data);
      });
    } catch (e) {
      console.error("error", e);
    }
  }, []);
  const submitReview = () => {
    console.log("submitReview called");
    Axios.post("http://localhost:5000/api/insert", {
      movieName: movieName,
      movieReview: review,
    })
      .then((response) => {
        console.log(response);
        alert("successfull insert");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="App">
      <h1>CRUD Application</h1>
      <div className="form">
        <label>Movie Name</label>
        <input
          type="text"
          name="movieName"
          onChange={(e) => {
            setMovieName(e.target.value);
          }}
          value={movieName}
        ></input>
        <label>Review Name</label>
        <input
          type="text"
          name="review"
          onChange={(e) => {
            setReview(e.target.value);
          }}
          value={review}
        ></input>
        <button onClick={submitReview}>Submit</button>
      </div>
      <div className="moviesReviewList">
        {movieReviewList.map((val) => {
          return (
            <h1>
              MovieName:{val.movieName} | Movie Review: {val.movieReview}
            </h1>
          );
        })}
      </div>
    </div>
  );
}

export default App;
