const express = require("express");
const app = express();

// console.log(app);
// console.dir(app);

app.use((req, res) => {
  console.log("We GOt A New Request");

  //   console.log(req);

  //   res.send("hello there , we got your request");
  //   res.send(<h1>This is H1</h1>);
  res.send({ color: "red" });
});

app.listen(8088, () => {
  console.log("Listining On Port 8080");
});
