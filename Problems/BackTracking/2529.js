const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./2529.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 부등호 (실버1)
