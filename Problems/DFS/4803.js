const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./4803.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 트리 (골드4)

let line = 0;
let testCase = 1;
let result = "";
while (true) {
    let [n, m] = input[line].split(" ").map(Number);
    line++;
    if (n == 0 && m == 0) break;

    let graph = Array.from({ length: n + 1 }, () => []);

    // 인접 리스트 구현
    for (let i = 0; i < m; i++) {
        let [start, end] = input[line].split(" ").map(Number);
        graph[start].push(end);
        graph[end].push(start);
        line++;
    }

    let visited = Array.from({ length: n + 1 }, () => false);
    let treeCount = 0;

    const dfs = (x, prev) => {
        visited[x] = true;

        for (let y of graph[x]) {
            if (!visited[y]) {
                // 방문한 적 없는 다음 노드에 대한 dfs가 사이클이 있다면 true 반환
                if (dfs(y, x)) return true;
            }
            // 방문한 적 있는데, 다음 노드가 직전 노드가 아니면 사이클임
            else if (y != prev) return true;
        }
        // 위의 조건에 걸리지 않았다면 tree
        return false;
    };

    // 모든 노드에 대해 dfs 실행
    for (let i = 1; i < n + 1; i++) {
        if (!visited[i]) {
            if (!dfs(i, 0)) treeCount++;
        }
    }
    if (treeCount == 0) {
        result += `Case ${testCase}: No trees.\n`;
    } else if (treeCount == 1) {
        result += `Case ${testCase}: There is one tree.\n`;
    } else {
        result += `Case ${testCase}: A forest of ${treeCount} trees.\n`;
    }
    testCase++;
}

console.log(result);
