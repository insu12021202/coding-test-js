const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./18353.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 병사 배치하기 (실버 2)
// 열외 시킨 병사 수 출력

let n = Number(input[0]);
let soldiers = input[1].split(" ").map(Number).reverse();

let dp = Array.from({ length: soldiers.length }, () => 1);

for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
        if (soldiers[i] > soldiers[j]) {
            dp[i] = Math.max(dp[j] + 1, dp[i]);
        }
    }
}
console.log(n - Math.max(...dp));
