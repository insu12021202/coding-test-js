const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./10971.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 외판원 순회2 (실버2)
// 모든 도시를 순회하는 최솟값 찾기

let n = Number(input[0]);
let graph = Array.from({ length: n }, () => []);
let visited = Array.from({ length: n }, () => false);
let answer = Infinity;

for (let i = 0; i < n; i++) {
    graph[i] = input[i + 1].split(" ").map(Number);
}

const dfs = (v, total, depth) => {
    // 모든 도시를 다 돌면
    if (depth == n) {
        if (graph[v][0] == 0) {
            return;
        } else {
            total += graph[v][0];
            // 최솟값 갱신
            answer = Math.min(answer, total);
            return;
        }
    }

    for (let i = 0; i < n; i++) {
        // 방문한 적 없고, 본인이 아닐 때, 지금까지의 거리가 정답보다는 작을 때
        if (
            !visited[i] &&
            v != i &&
            total + graph[v][i] < answer &&
            graph[v][i] !== 0
        ) {
            visited[v] = true;
            total += graph[v][i];
            dfs(i, total, depth + 1);
            total -= graph[v][i];
            visited[v] = false;
        }
    }
};

dfs(0, 0, 1);

console.log(answer);
