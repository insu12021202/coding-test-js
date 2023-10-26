const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./1463.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 1로 만들기 (실버 3)

let n = Number(input[0]);
let dp = Array.from({ length: n + 1 }, () => 0);

for (let i = 2; i < n + 1; i++) {
    // 1을 뺀 결과
    dp[i] = dp[i - 1] + 1;
    if (i % 2 == 0 && i % 3 != 0) {
        dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    } else if (i % 3 == 0 && i % 2 != 0) {
        dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    } else if (i % 2 == 0 && i % 3 == 0) {
        dp[i] = Math.min(dp[i], dp[i / 2] + 1, dp[i / 3] + 1);
    }
}
// console.log(dp);
console.log(dp[n]);
