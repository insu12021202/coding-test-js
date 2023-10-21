const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./9461.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 파도반 수열 (실버 3)

let testCase = Number(input[0]);
let line = 1;
while (testCase--) {
    let n = Number(input[line]);
    line++;

    let d = Array.from({ length: n + 1 }, () => 0);
    d[1] = 1;
    d[2] = 1;
    d[3] = 1;

    for (let i = 4; i < n + 1; i++) {
        d[i] = d[i - 3] + d[i - 2];
    }
    console.log(d[n]);
}
