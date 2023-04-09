const args = process.argv.slice(2);

for (let arg of args) {
  console.log(`Hii there ${arg}`);
}

// let puppy = [1, 2, 3, 4, 5, 5];
// for (let x of puppy) {
//   console.log(x);
// }
//process.argv --> returns a araay

const fs = require("fs");
// console.log(fs);
// import { mkdir } from "fs";

const arg = process.argv[2] || "Project";

// fs.mkdir("New", { recursive: true }, (err) => {
//   console.log("IN THE CALLBACK");
//   if (err) throw err;
// });
// console.log("I COME AFTER MKDIRIN THE FILE!!!");

try {
  fs.mkdirSync(arg);
  fs.writeFileSync(`${arg}/index.html`);
} catch (e) {
  console.log(e);
}
