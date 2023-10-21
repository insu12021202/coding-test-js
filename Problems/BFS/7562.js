const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./7562.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 나이트의 이동 (실버 1)

let testCase = Number(input[0]);

// visited 초기화 함수
const initVisited = (n) => {
    let graph = [];
    for (let i = 0; i < n; i++) {
        graph.push(Array.from({ length: n }, () => 0));
    }

    return graph;
};

let line = 1;
while (testCase--) {
    let n = Number(input[line]);
    let start = input[line + 1].split(" ").map(Number);
    let end = input[line + 2].split(" ").map(Number);

    let visited = initVisited(n);
    let dx = [1, 2, 2, 1, -1, -2, -2, -1];
    let dy = [-2, -1, 1, 2, 2, 1, -1, -2];

    // bfs
    const bfs = (x, y) => {
        visited[x][y] = 1;
        let q = [];
        q.push([x, y]);

        while (q.length !== 0) {
            let [curX, curY] = q.shift();

            // 종료 조건
            if (curX == end[0] && curY == end[1]) {
                return visited[curX][curY];
            }

            for (let i = 0; i < 8; i++) {
                let nx = dx[i] + curX;
                let ny = dy[i] + curY;
                // 맵 밖으로 나가면 무시
                if (nx < 0 || nx >= n || ny < 0 || ny >= n) {
                    continue;
                }
                // 이미 방문한 곳이면 무시
                if (visited[nx][ny] != 0) continue;
                q.push([nx, ny]);
                visited[nx][ny] = visited[curX][curY] + 1;
            }
        }
    };

    console.log(bfs(start[0], start[1]) - 1);

    line += 3;
}
