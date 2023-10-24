const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./1436.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 영화감독 숌 (실버 5)

let n = Number(input[0]);

let num = 666;
let i = 0;
while (i < n - 1) {
    num++;
    if (String(num).includes("666")) {
        i++;
    }
}

console.log(num);
