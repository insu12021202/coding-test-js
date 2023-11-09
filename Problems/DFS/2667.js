const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./2667.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 단지번호붙이기 (실버1)

let n = Number(input[0]);

let graph = [];
for (let i = 1; i < n + 1; i++) {
    graph.push(input[i].split("").map(Number));
}

let dx = [0, 0, 1, -1];
let dy = [1, -1, 0, 0];
let result = 0;

const dfs = (x, y) => {
    if (graph[x][y] != 0) {
        graph[x][y] = 0;
        result += 1;

        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];

            if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;

            if (graph[nx][ny] == 1) {
                dfs(nx, ny);
            }
        }
    }
};
let answer = [];
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        dfs(i, j);

        if (result != 0) {
            answer.push(result);
        }
        result = 0;
    }
}

answer.sort((a, b) => {
    return a - b;
});
console.log(answer.length);
answer.map((item) => {
    console.log(item);
});
