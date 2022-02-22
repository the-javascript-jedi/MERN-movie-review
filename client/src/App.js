import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  // state
  const [movieName, setMovieName] = useState("");
  const [review, setReview] = useState("");
  const [movieReviewList, setMovieReviewList] = useState([]);
  // GET request
  const getData = () => {
    try {
      Axios.get("http://localhost:5000/api/getMovies").then((response) => {
        console.log("response", response.data);
        setMovieReviewList(response.data);
      });
    } catch (e) {
      console.error("error", e);
    }
  };
  useEffect(() => {
    // API Call to get data
    getData();
  }, []);
  // Insert Review
  const submitReview = () => {
    console.log("submitReview called");
    Axios.post("http://localhost:5000/api/insert", {
      movieName: movieName,
      movieReview: review,
    })
      .then((response) => {
        console.log(response);
        alert("successfull insert");
        // API Call to get data
        getData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // Delete Review
  const deleteReview = (movieId) => {
    try {
      Axios.delete(`http://localhost:5000/api/delete/${movieId}`).then(
        (response) => {
          console.log("response deleted", response);
          // API Call to get data
          getData();
        }
      );
    } catch (e) {
      console.error(e);
    }
  };
  // Update Review

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
            <div className="card" key={val.Id}>
              <h1>MovieName:{val.movieName}</h1>
              <p>Movie Review: {val.movieReview}</p>
              <div>
                <input type="text" />
              </div>
              <button
                className="btn-delete"
                onClick={() => deleteReview(val.Id)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
