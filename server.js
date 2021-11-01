const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Here in console");
  res.status(500).send("Hello World");
});

app.listen(3000);
