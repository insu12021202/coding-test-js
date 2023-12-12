const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./10773.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 제로 (실버 4)

const n = Number(input[0]);
let arr = [];
let answer = 0;
for (let i = 1; i < n + 1; i++) {
    let num = Number(input[i]);
    if (num !== 0) {
        arr.push(num);
        answer += num;
    } else {
        answer -= arr.pop();
    }
}

console.log(answer);
