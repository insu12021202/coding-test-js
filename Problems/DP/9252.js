const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./9252.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: LCS 2 (골드 4)

let str1 = input[0];
let str2 = input[1];

let dp = [];
for (let i = 0; i < str1.length + 1; i++) {
    dp.push(Array.from({ length: str2.length + 1 }, () => 0));
}

// LCS DP 만들기
for (let i = 1; i < str1.length + 1; i++) {
    for (let j = 1; j < str2.length + 1; j++) {
        if (str1[i - 1] == str2[j - 1]) {
            dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
            dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
        }
    }
}

// 역추적하며 문자열 만들기
let result = [];
const findLCS = (i, j) => {
    if (dp[i][j] == 0) {
        return;
    }
    if (dp[i - 1][j] == dp[i][j]) {
        findLCS(i - 1, j);
    } else if (dp[i][j - 1] == dp[i][j]) {
        findLCS(i, j - 1);
    } else {
        result.push(str1[i - 1]);
        findLCS(i - 1, j - 1);
    }
};
findLCS(dp.length - 1, dp[0].length - 1);

// 결과 출력
if (result.length == 0) {
    console.log(0);
} else {
    console.log(dp[dp.length - 1][dp[0].length - 1]);
    console.log(result.reverse().join(""));
}
