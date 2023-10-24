const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./18427.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 함께 블록 쌓기 (골드 4)

let [n, m, h] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i < n + 1; i++) {
    arr.push(input[i].split(" ").map(Number));
}

dp = [];
for (let i = 0; i < n; i++) {
    dp.push(Array.from({ length: h + 1 }, () => 0));
}

// 초기 값 세팅 (학생 1)
dp[0][0] = 1;
arr[0].map((item) => {
    dp[0][item] = 1;
});

// 3중 반복문을 통한 DP
for (let i = 1; i < n; i++) {
    // 학생
    for (let j = 0; j < h + 1; j++) {
        // 높이
        if (dp[i - 1][j] != 0) {
            // 가지고 있는 블럭을 안 넣을 때
            dp[i][j] += dp[i - 1][j] % 10007;
        }
        arr[i].map((block) => {
            // 가지고 있는 블록을 넣을 때
            if (j - block >= 0 && dp[i - 1][j - block] != 0) {
                dp[i][j] += dp[i - 1][j - block];
            }
        });
        dp[i][j] = dp[i][j] % 10007;
    }
}

console.log(dp[n - 1][h]);
