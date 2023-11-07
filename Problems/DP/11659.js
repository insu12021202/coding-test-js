const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./11659.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 구간 합 구하기 4 (실버 3)

let [n, m] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);
let dp = [];
let sum = 0;

// 구간 합 만들기 -> O(n)
for (let i = 0; i < n; i++) {
    sum += arr[i];
    dp.push(sum);
}

let result = "";

// O(m)
for (let k = 2; k < m + 2; k++) {
    let [i, j] = input[k].split(" ").map(Number);
    if (i == 1) {
        result += dp[j - 1] + "\n";
    } else {
        result += dp[j - 1] - dp[i - 2] + "\n";
    }
}

console.log(result);
