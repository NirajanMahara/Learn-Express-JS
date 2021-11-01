const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", logger, logger, logger, (req, res) => {
  console.log("Here in console");
  res.render("index", { name: "Nirajan" });
});

const userRouter = require("./routes/users");
const postRouter = require("./routes/posts");

app.use("/users", userRouter);
app.use("/posts", postRouter);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(3000);
