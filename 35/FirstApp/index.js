const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/tacos", (req, res) => {
  res.send("Get /tacos response");
});

app.post("/tacos", (req, res) => {
  console.log(req.body);
  const { meat, qty } = req.body;
  res.send(`Hii there It is a post request for ${qty} tacos of ${meat}`);
});

app.listen("8080", () => {
  console.log("Request from 8080");
});
