const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./15651.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: N과M(3) (실버3)
// 중복 순열

let [n, m] = input[0].split(" ").map(Number);

let numbers = Array.from({ length: n }, (_, i) => i + 1);
let arr = [];
let answer = "";

const dfs = (arr, depth) => {
    if (depth == m) {
        answer += arr.join(" ") + "\n";
        return;
    }

    for (let num of numbers) {
        arr.push(num);
        dfs(arr, depth + 1);
        arr.pop(num);
    }
};

dfs(arr, 0);
console.log(answer);
