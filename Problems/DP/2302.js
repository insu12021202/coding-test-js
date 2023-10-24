const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./2302.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 극장 좌석 (실버 1)

let n = Number(input[0]);
let m = Number(input[1]);
let d = Array.from({ length: n + 1 }, () => 0);
let vips = [];
for (let i = 2; i < m + 2; i++) {
    vips.push(Number(input[i]));
}

// dp
d[1] = 1;
d[2] = 2;
for (let i = 3; i < n + 1; i++) {
    d[i] = d[i - 1] + d[i - 2];
}

let j = 0;
let arr = [];
let count = 0;
for (let i = 1; i < n + 1; i++) {
    if (i != vips[j]) {
        count++;
    } else {
        arr.push(count);
        count = 0;
        j++;
    }
}
arr.push(count);

result = 1;
arr.map((c) => {
    if (c != 0) {
        result *= d[c];
    }
});

// console.log(d);
console.log(result);
