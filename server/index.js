const express = require("express");
const app = express();
// http://localhost:5000/
app.get("/", (req, res) => {
  res.send("Hello Nithin");
});
app.listen(5000, () => {
  console.log("running on port 5000");
});
