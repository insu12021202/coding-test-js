const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./10974.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 모든 순열 (실버3)

let n = Number(input[0]);
let arr = [];
let visited = Array.from({ length: n }, () => false);
const findPmt = (arr) => {
    if (arr.length == n) {
        console.log(arr.join(" "));
        return;
    }
    for (let i = 1; i < n + 1; i++) {
        if (!visited[i]) {
            visited[i] = true;
            arr.push(i);
            findPmt(arr);
            arr.pop();
            visited[i] = false;
        }
    }
};

findPmt(arr);
