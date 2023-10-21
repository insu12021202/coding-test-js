const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./1904.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 01타일 (실버 3)

let n = Number(input[0]);

let d = Array.from({ length: n + 1 }, () => 0);
d[1] = 1;
d[2] = 2;

for (let i = 3; i < n + 1; i++) {
    d[i] = (d[i - 1] + d[i - 2]) % 15746;
}

console.log(d[n]);
