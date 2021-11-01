const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Here in console");
  res.json({ message: "Error" });
});

app.listen(3000);
