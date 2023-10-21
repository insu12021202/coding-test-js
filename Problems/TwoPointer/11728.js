const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./11728.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 배열 합치기 (실버 5)

let [n, m] = input[0].split(" ").map(Number);
let arrA = input[1].split(" ").map(Number);
let arrB = input[2].split(" ").map(Number);
let result = [];
let count = 0;
let a = 0;
let b = 0;
while (count < n + m) {
    if (a >= n) {
        result.push(arrB[b]);
        b++;
        count++;
        continue;
    }
    if (b >= m) {
        result.push(arrA[a]);
        a++;
        count++;
        continue;
    }
    if (arrA[a] < arrB[b]) {
        result.push(arrA[a]);
        a++;
        count++;
    } else {
        result.push(arrB[b]);
        b++;
        count++;
    }
}

console.log(result.join(" "));
