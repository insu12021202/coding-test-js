const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./1240.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 노드사이의 거리 (골드5)

let [n, m] = input[0].split(" ").map(Number);
let graph = Array.from({ length: n + 1 }, () => []);

let i = 1;
// 인접 리스트 구현
while (i < n) {
    let [start, end, dist] = input[i].split(" ").map(Number);
    graph[start].push([end, dist]);
    graph[end].push([start, dist]);
    i++;
}

// dfs
const dfs = (v, end, dist, visited) => {
    visited[v] = true;
    if (v == end) {
        console.log(dist);
        return;
    }

    graph[v].map((item) => {
        let [next, cost] = item;
        if (!visited[next]) {
            visited[next] = true;
            dfs(next, end, dist + cost, visited);
        }
    });
};

// 각 케이스마다 dfs 실행
for (let j = 0; j < m; j++) {
    let [start, end] = input[i].split(" ").map(Number);
    let visited = Array.from({ length: n + 1 }, () => false);
    dfs(start, end, 0, visited);
    i++;
}
