const figlet = require("figlet");

const colors = require("colors");

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data.green);
});

//  npm init -->TO create a new  json file
// npm init -y
// npm install -->will install all the packages present in json file
