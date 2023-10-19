const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./1300.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: K번째 수 (골드1)
// k번쨰 수가 되는 mid 찾기

let n = Number(input[0]);
let k = Number(input[1]);

let start = 1;
let end = n ** 2;

let result = 0;
while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += Math.min(parseInt(mid / i), n);
    }
    if (total >= k) {
        result = mid;
        end = mid - 1;
    } else {
        start = mid + 1;
    }
}

console.log(result);
