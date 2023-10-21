const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./2156.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 포도주 시식 (실버 1)

let n = Number(input[0]);
let drinks = [];
for (let i = 1; i < n + 1; i++) {
    drinks.push(Number(input[i]));
}

let d = Array.from({ length: n + 1 }, () => 0);
d[1] = drinks[0];
d[2] = drinks[1] + drinks[0];

for (let i = 3; i < n + 1; i++) {
    d[i] = Math.max(
        d[i - 1],
        drinks[i - 1] + d[i - 2],
        drinks[i - 1] + drinks[i - 2] + d[i - 3]
    );
}

console.log(d[n]);
