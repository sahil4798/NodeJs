const express = require("express");
const app = express();

const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  //   res.send("Hi there you are no home page");
  res.render("home.ejs");
});

app.get("/random", (req, res) => {
  const num = Math.floor(Math.random() * 7);
  res.render("random.ejs", { num: num });
  //   res.render("random.ejs" , {num });//same as above
});

app.get("/r/:subredit", (req, res) => {
  console.log(req);
  const { subredit } = req.params;
  res.render("subredit", { subredit: subredit });
});

app.get("/cats", (req, res) => {
  const cats = ["mini", "pinky", "houry", "hully", "Gulie"];
  res.render("cat.ejs", { cats });
});

app.listen(8080, () => {
  console.log("Listing on port 8080");
});
