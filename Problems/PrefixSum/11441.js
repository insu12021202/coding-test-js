const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./11441.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 합 구하기 (실버 3)

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let m = Number(input[2]);
let prefixSum = [0];
let sum = 0;

// prefixSum 구해놓기
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    prefixSum.push(sum);
}

let result = "";
for (let i = 3; i < m + 3; i++) {
    let [start, end] = input[i].split(" ").map(Number);
    result += prefixSum[end] - prefixSum[start - 1] + "\n";
}

console.log(result);
