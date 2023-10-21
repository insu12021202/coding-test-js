const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./1012.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명:
