const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./1789.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 수들의 합

let S = Number(input[0]);
let k = 0;

while (S > k) {
    k++;
    S -= k;
}

console.log(k);
