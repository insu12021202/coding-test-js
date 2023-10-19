const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./15650.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: N과M(2) (실버3)
// 조합

let [n, m] = input[0].split(" ").map(Number);

let numbers = Array.from({ length: n }, (_, i) => i + 1);
let visited = Array.from({ length: n + 1 }, () => false);
let arr = [];

const dfs = (arr, depth, start) => {
    if (depth == m) {
        console.log(arr.join(" "));
        return;
    }

    for (let i = start; i < numbers.length + 1; i++) {
        if (!visited[i]) {
            visited[i] = true;
            arr.push(i);
            dfs(arr, depth + 1, i + 1);
            arr.pop();
            visited[i] = false;
        }
    }
};

dfs(arr, 0, 1);
