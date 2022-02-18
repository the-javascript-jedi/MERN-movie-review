import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>CRUD Application</h1>
      <div className="form">
        <label>Movie Name</label>
        <input type="text" name="movieName"></input>
        <label>Review Name</label>
        <input type="text" name="review"></input>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
