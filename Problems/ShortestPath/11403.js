const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./11403.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 경로 찾기 (실버 1)

let n = Number(input[0]);
let graph = [];
let d = [];
for (let i = 1; i <= n; i++) {
    graph.push(input[i].split(" ").map(Number));
}
for (let i = 0; i < n; i++) {
    d.push(Array.from({ length: n }, () => 0));
}

const dfs = (node, start, visited) => {
    for (let i = 0; i < n; i++) {
        if (graph[node][i] && !visited[i]) {
            visited[i] = true;
            d[start][i] = 1;
            dfs(i, start, visited);
        }
    }
};

for (let i = 0; i < n; i++) {
    let visited = Array.from({ length: n }, () => false);
    dfs(i, i, visited);
}

d.map((item) => {
    console.log(item.join(" "));
});
