const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./21921.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 블로그 (실버 3)

let [n, x] = input[0].split(" ").map(Number);
let visitors = input[1].split(" ").map(Number);
let sum = 0;
let result = [];

let end = 0;
for (let start = 0; start <= n - x; start++) {
    while (end < start + x) {
        sum += visitors[end];
        end++;
    }
    result.push(sum);
    sum -= visitors[start];
}

let maxVisit = Math.max(...result);
if (maxVisit == 0) {
    console.log("SAD");
} else {
    console.log(maxVisit);
    let count = 0;
    result.map((item) => {
        if (item == maxVisit) {
            count++;
        }
    });
    console.log(count);
}
