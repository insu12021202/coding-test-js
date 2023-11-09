const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./11053.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 가장 긴 증가하는 부분 수열 (실버2)

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let dp = Array.from({ length: n }, () => 1);

for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
        if (arr[i] > arr[j]) {
            dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
}

console.log(Math.max(...dp));
