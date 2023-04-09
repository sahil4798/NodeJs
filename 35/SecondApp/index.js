const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set(" views ", path.join(__dirname, "views"));

const comments = [
  {
    username: "Lufy",
    comment: "wari-wari",
  },
  { username: "Zoro", comment: "Naniii" },
  { username: "Sanji", comment: "Nami Swan" },
  { username: "Usupp", comment: "ChoCho Chooper" },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
  // res.send("HII");
  res.render("comments/new");
});

app.post("/comments", (req, res) => {
  console.log(req.body);
  const { username, comment } = req.body;
  comments.push({ username, comment });
  // res.send("it worked");
  // res.render("comments/index", { comments });
  res.redirect("/comments");
});

app.get("/", (req, res) => {
  res.send("Hiii There on HomePage");
});
app.listen("8900", () => {
  console.log("Make request on 8090");
});
