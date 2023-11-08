const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./11727.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 2xn 타일링 2 (실버 3)

let n = Number(input[0]); // n은 최대 10^3
let dp = Array.from({ length: n + 1 }, () => 0);
dp[1] = 1;
dp[2] = 3;

for (let i = 3; i < n + 1; i++) {
    let value = (dp[i - 1] + 2 * dp[i - 2]) % 10007;
    dp[i] = value;
}

console.log(dp[n]);
