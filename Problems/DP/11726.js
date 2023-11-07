const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./11726.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 2xn 타일링 (실버 3)

let n = Number(input[0]); // n은 최대 10^3

// 1, 2, 3, 5, 8 -> 피보나치 수열
let dp = Array.from({ length: n + 1 }, () => 0);
dp[1] = 1;
dp[2] = 2;

for (let i = 3; i < n + 1; i++) {
    let value = (dp[i - 1] + dp[i - 2]) % 10007;
    dp[i] = value;
}

console.log(dp[n]);
