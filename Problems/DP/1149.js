const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./1149.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: RGB거리 (실버 1)

let n = Number(input[0]);
let colors = [];
let dp = [];
for (let i = 1; i < n + 1; i++) {
    colors.push(input[i].split(" ").map(Number));
    dp.push([Infinity, Infinity, Infinity]);
}

dp[0][0] = colors[0][0];
dp[0][1] = colors[0][1];
dp[0][2] = colors[0][2];

for (let i = 1; i < n; i++) {
    for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
            if (k != j) {
                dp[i][j] = Math.min(dp[i][j], colors[i][j] + dp[i - 1][k]);
            }
        }
    }
}

console.log(Math.min(...dp[n - 1]));
