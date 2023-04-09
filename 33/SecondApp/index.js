const express = require("express");
const app = express();

app.listen(8080, () => {
  console.log("Listining On Port 8080");
});

// app.use((req, res) => {
//   console.log("We GOt A New Request");

//   //   console.log(req);

//   //   res.send("hello there , we got your request");
//   //   res.send(<h1>This is H1</h1>);
//   res.send({ color: "red" });
// });

app.get("/", (req, res) => {
  res.send("You are on home page");
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

app.get("*", (req, res) => {
  res.send("I don't that path");
});
