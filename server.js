const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Here in console");
  res.render("index");
});

app.listen(3000);
