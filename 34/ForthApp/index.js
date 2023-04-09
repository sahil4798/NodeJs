const express = require("express");
const app = express();
const path = require("path");

const reditData = require("./data.json");
// console.log(reditData);

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

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
  const { subredit } = req.params;
  // const data = reditData.subredit;
  const data = reditData[subredit];
  if (data) {
    // console.log(data);
    res.render("subredit", { data });
    // res.render("subredit", { ...data });
  } else {
    res.render("notfound", { subredit });
  }
});

app.get("/cats", (req, res) => {
  const cats = ["mini", "pinky", "houry", "hully", "Gulie"];
  res.render("cat", { cats });
});

app.listen(8089, () => {
  console.log("Listing on port 8089");
});
