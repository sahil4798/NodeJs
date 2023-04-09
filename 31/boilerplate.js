const fs = require("fs");
// console.log(fs);
// import { mkdir } from "fs";

const foldername = process.argv[2] || "Project";

// fs.mkdir("New", { recursive: true }, (err) => {
//   console.log("IN THE CALLBACK");
//   if (err) throw err;
// });

// fs.mkdirSync(foldername);
try {
  fs.mkdirSync(foldername);
  //   fs.writeFileSync(`${foldername}/index.html`); //Throwing an error
  fs.writeFileSync(`${foldername}/index.html`, "HTML");
  fs.writeFileSync(`${foldername}/styles.css`, "CSS");
  fs.writeFileSync(`${foldername}/app.js`, "JAVASCRIPT");
} catch (e) {
  console.log(e);
}
