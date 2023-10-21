const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./1003.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 피보나치 함수 (실버 3)

let testCase = Number(input[0]);
let line = 1;
while (testCase--) {
    let n = Number(input[line]);
    line++;

    let d = Array.from({ length: n + 1 }, () => [0, 0]);
    d[0] = [1, 0];
    d[1] = [0, 1];

    for (let i = 2; i < n + 1; i++) {
        d[i] = [d[i - 1][0] + d[i - 2][0], d[i - 1][1] + d[i - 2][1]];
    }

    console.log(d[n].join(" "));
}
