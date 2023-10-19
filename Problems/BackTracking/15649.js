const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./15649.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: N과M(1) (실버3)

let [n, m] = input[0].split(" ").map(Number);
let visited = Array.from({ length: n + 1 }, () => false);
let answer = [];
const findNm = (answer) => {
    if (answer.length == m) {
        console.log(answer.join(" "));
    }
    for (let i = 1; i < n + 1; i++) {
        if (!visited[i]) {
            answer.push(i);
            visited[i] = true;
            findNm(answer);
            visited[i] = false;
            answer.pop();
        }
    }
};
findNm(answer);
