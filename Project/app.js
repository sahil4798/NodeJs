const express = require("express");
const path = require("path");

app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/form", (req, res) => {
  res.render("form.ejs");
});

app.get("/cats", (req, res) => {
  const { name, age } = req.query;
  res.render("cats.ejs", { name, age });
});

app.post("/cats", (req, res) => {
  console.log(req.body);
  res.send("Here you come via post request");
});

app.listen("3000", () => {
  console.log("Listing on 3000");
});
