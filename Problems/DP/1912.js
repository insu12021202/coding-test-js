const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./1912.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 연속합 (실버2)

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let dp = Array.from({ length: n }, () => 0);
dp[0] = arr[0];

// 현재 arr 요소 자체와 이전 결과 + 현재 arr 요소 비교
for (let i = 1; i < n; i++) {
    // 만약 현재 요소가 크거나 같으면 현재 요소를 결과로 넣기
    if (arr[i] >= dp[i - 1] + arr[i]) {
        dp[i] = arr[i];
    } else {
        // 그렇지 않으면 현재 요소와 이전 결과를 더한 값을 할당
        dp[i] = dp[i - 1] + arr[i];
    }
}
console.log(Math.max(...dp));
