const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./10844.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 쉬운 계단 수 (실버 1)

let n = Number(input[0]);

dp = [];
dp.push([0, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

for (let i = 1; i < n + 1; i++) {
    dp.push(Array.from({ length: 10 }, () => 0));
}

for (let i = 1; i < n + 1; i++) {
    for (let j = 0; j < 10; j++) {
        if (j == 0) {
            dp[i][j] += dp[i - 1][j + 1];
        } else if (j == 9) {
            dp[i][j] += dp[i - 1][j - 1];
        } else {
            dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j + 1];
        }

        dp[i][j] = dp[i][j] % 1e9;
    }
}
let sum = 0;
dp[n - 1].map((item) => {
    sum += item;
    sum %= 1e9;
});

console.log(sum);
