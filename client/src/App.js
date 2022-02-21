import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  // state
  const [movieName, setMovieName] = useState("");
  const [review, setReview] = useState("");

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
    </div>
  );
}

export default App;
