const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./1707.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 이분 그래프 (골드 4)
// 아직 방문하지 않은 각 노드에서 시작해 BFS 실행
// 인접 노드로 이동하면서 빨->파->빨->파 색칠하기
// 마지막 판별: 모든 노드에 대하여 인접 노드와 색상이 다른지 여부 판별

let testCase = Number(input[0]);
let line = 1;
while (testCase--) {
    let [n, e] = input[line].split(" ").map(Number);
    let graph = Array.from({ length: n + 1 }, () => []);
    // 인접 리스트 만들기
    for (let i = 1; i < e + 1; i++) {
        let [start, end] = input[line + i].split(" ").map(Number);
        graph[start].push(end);
        graph[end].push(start);
    }
    line += e + 1;

    let visited = Array.from({ length: n + 1 }, () => 0);

    const bfs = (start) => {
        visited[start] = "B";
        let q = [];
        q.push(start);

        while (q.length !== 0) {
            let cur = q.shift();
            // cur의 인접 노드들에 대해
            for (let node of graph[cur]) {
                if (visited[node] != 0) continue;

                q.push(node);
                if (visited[cur] == "B") {
                    visited[node] = "R";
                } else {
                    visited[node] = "B";
                }
            }
        }
    };

    const isBipart = (visited) => {
        for (let x = 1; x < visited.length; x++) {
            for (let y of graph[x]) {
                if (visited[x] == visited[y]) {
                    return "NO";
                }
            }
        }
        return "YES";
    };

    // 모든 노드에 대해 bfs를 실행해야 전부 탐색 가능
    for (let i = 1; i <= n; i++) {
        if (visited[i] == 0) {
            bfs(i);
        }
    }
    console.log(isBipart(visited));
}
