const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid } = require("uuid");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set(" views ", path.join(__dirname, "views"));

app.use(methodOverride("_method"));

const comments = [
  {
    id: uuid(),
    username: "Lufy",
    comment: "wari-wari",
  },
  { id: uuid(), username: "Zoro", comment: "Naniii" },
  { id: uuid(), username: "Sanji", comment: "Nami Swan" },
  { id: uuid(), username: "Usupp", comment: "ChoCho Chooper" },
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
  comments.push({ username, comment, id: uuid() });
  // res.send("it worked");
  // res.render("comments/index", { comments });
  res.redirect("/comments");
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  // const comment = comments.find((c) => c.id === parseInt(id));
  const comment = comments.find((c) => c.id === id);
  res.render("comments/show", { comment });
});

app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const foundComment = comments.find((c) => c.id === id);
  const newCommentText = req.body.comment;
  foundComment.comment = newCommentText;
  // res.send("Updatig Something");
  res.redirect("/comments");
});

app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/edit", { comment });
});

app.get("/", (req, res) => {
  console.log(uuid());
  res.send("Hiii There on HomePage");
});
app.listen("8900", () => {
  console.log("Make request on 8900");
});
