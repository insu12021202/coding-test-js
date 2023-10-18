const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./1427.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

n = input[0].split("").map(Number);

console.log(n.sort((a, b) => b - a).join(""));
