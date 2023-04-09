const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// app.use((req, res) => {
//   res.send("hii there on page");
// });

app.get("/", (req, res) => {
  //   res.send("hii there on home page");
  res.render("home.ejs");
});

app.listen("8090", () => {
  console.log("request on 8090");
});
