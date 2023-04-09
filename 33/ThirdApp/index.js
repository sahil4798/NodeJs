const express = require("express");
const app = express();

app.listen(8080, () => {
  console.log("Listining On Port 8080");
});

app.get("/", (req, res) => {
  res.send("Hello There are on home page");
});

app.get("/r/:subredit", (req, res) => {
  const { subredit } = req.params;
  res.send(`<h1>here is your ${subredit} Subredit<h1>`);
});

app.get("/r/:subredit/:id", (req, res) => {
  const { subredit, id } = req.params;
  res.send(`<h1>this is response to ${subredit} Subredit with id=${id}   <h1>`);
});

app.post("/cat", (req, res) => {
  res.send(
    "This response is different cause it is in response of post request"
  );
});

app.get("/cat", (req, res) => {
  // console.log("Hi there a request");
  res.send("Meau");
});

app.get("/dog", (req, res) => {
  res.send("whof");
});

// //***************search*********************
// app.get("/search", (req, res) => {
//   // const { first } = req.query;
//   console.log(req.query);
//   res.send("Search");
// });

app.get("/search", (req, res) => {
  // console.log(req.query);
  // console.log(req.query.q);
  const { q } = req.query;
  if (!q) {
    res.send("Nothing found if nothing search");
  }
  res.send(`<h1>Search result for : ${q}</h1> `);
});

app.get("*", (req, res) => {
  res.send("I don't that path");
});
