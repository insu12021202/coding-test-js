const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./2606.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 바이러스 (실버 3)
let n = Number(input[0]);
let c = Number(input[1]);

// 인접 리스트로 그래프 만들기
let graph = Array.from({ length: n + 1 }, () => []);
for (let i = 2; i < c + 2; i++) {
    let [start, end] = input[i].split(" ").map(Number);
    graph[start].push(end);
    graph[end].push(start);
}

let visited = Array.from({ length: n + 1 }, () => false);
let count = 0;

const dfs = (v) => {
    visited[v] = true;
    count++;
    for (let node of graph[v]) {
        if (!visited[node]) {
            dfs(node);
        }
    }
};

dfs(1);

console.log(count - 1);
