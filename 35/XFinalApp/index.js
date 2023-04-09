const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid } = require("uuid");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(methodOverride("_method"));

// const express = require("express");
// const app = express();
// const path = require("path");
// const { v4: uuid } = require("uuid");
// const methodOverride = require("method-override");

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.set("view engine", "ejs");
// app.set(" views ", path.join(__dirname, "views"));

// app.use(methodOverride("_method"));

const comments = [
  { id: uuid(), username: "luffy", comment: "wari-wari" },
  { id: uuid(), username: "zoro", comment: "nani" },
];

app.get("/comments", (req, res) => {
  res.render("index", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("new");
});

app.post("/comments", (req, res) => {
  console.log(req.body);
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() });
  res.redirect("/comments");
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const foundComment = comments.find((c) => c.id === id);
  res.render("show", { foundComment });
});

app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const foundComment = comments.find((c) => c.id === id);
  res.render("edit", { foundComment });
});

app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const foundComment = comments.find((c) => c.id === id);
  const newCommentText = req.body.comment;
  foundComment.comment = newCommentText;
  res.redirect("/comments");
});

app.listen("8090", () => {
  console.log("listing request at 8090");
});

// AN EXAMPLE
// USING COMMENTS AS A RESOURCE

//  NAME           PATH                   VERB              PURPOSE

// Index          /comments           GET       Display all comments
// New            /comments/new       GET       Form to create new comment
// Create         /comments           POS       TCreates new comment on server
// Show           /comments/:id       GET       Details for one specific comment
// Edit           /comments/:id/edit  GET       Form to edit specific comment
// Update         /comments/id        PATCH     Updates specific comment on server
// Destroy        /comments:id        DELETE    Deletes specific item on server
