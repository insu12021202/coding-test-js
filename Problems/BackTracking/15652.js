const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./15652.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: N과M(4) (실버3)
// 중복 조합

let [n, m] = input[0].split(" ").map(Number);

let numbers = Array.from({ length: n }, (_, i) => i + 1);
let arr = [];
let answer = "";

const dfs = (arr, depth, start) => {
    if (depth == m) {
        answer += arr.join(" ") + "\n";
        return;
    }

    for (let i = start; i < numbers.length + 1; i++) {
        arr.push(i);
        dfs(arr, depth + 1, i);
        arr.pop(i);
    }
};

dfs(arr, 0, 1);
console.log(answer);
