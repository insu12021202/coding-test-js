const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./1987.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 알파벳 (골드4)
// 같은 알파벳은 두 번 건널 수 없다

let [r, c] = input[0].split(" ").map(Number);
let map = [];
for (let i = 1; i < r + 1; i++) {
    map.push(input[i].split(""));
}

let visited = new Set();
let maxDepth = 0;
let dx = [-1, 1, 0, 0];
let dy = [0, 0, 1, -1];

const dfs = (depth, x, y) => {
    maxDepth = Math.max(maxDepth, depth);

    for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        // 맵 밖으로 벗어나면 종료
        if (nx < 0 || nx > r - 1 || ny < 0 || ny > c - 1) {
            continue;
        }
        // 이미 방문한 적 있으면 종료
        if (visited.has(map[nx][ny])) {
            continue;
        }
        visited.add(map[nx][ny]);
        dfs(depth + 1, nx, ny);
        visited.delete(map[nx][ny]);
    }
};

visited.add(map[0][0]);
dfs(1, 0, 0);
console.log(maxDepth);
