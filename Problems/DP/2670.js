const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./2670.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 연속부분최대곱 (실버 4)

let n = Number(input[0]);
let d = [];
for (let i = 1; i <= n; i++) {
    d.push(Number(input[i]));
}
for (let i = 1; i < d.length; i++) {
    d[i] = Math.max(d[i] * d[i - 1], d[i]);
}

console.log(Math.max(...d).toFixed(3));
