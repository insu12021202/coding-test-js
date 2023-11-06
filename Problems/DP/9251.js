const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./9251.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: LCS (골드 5)

let str1 = input[0].split("");
let str2 = input[1].split("");

let dy = Array.from(Array(input[0].length + 1), () =>
    Array(input[1].length + 1).fill(0)
);

for (let i = 1; i < str1.length + 1; i++) {
    for (let k = 1; k < str2.length + 1; k++) {
        if (str1[i - 1] === str2[k - 1]) {
            dy[i][k] = dy[i - 1][k - 1] + 1;
        } else {
            dy[i][k] = Math.max(dy[i - 1][k], dy[i][k - 1]);
        }
    }
}
console.log(dy[dy.length - 1][dy[0].length - 1]);
