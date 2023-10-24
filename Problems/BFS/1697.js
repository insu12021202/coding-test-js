const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./1697.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 숨바꼭질 (실버 1)

let [n, k] = input[0].split(" ").map(Number);

let visited = Array.from({ length: 100001 }, () => 0);

const bfs = (start) => {
    const q = [];
    q.push(start);

    while (q.length !== 0) {
        let v = q.shift();

        if (v == k) {
            return visited[v];
        }

        for (let next of [v - 1, v + 1, v * 2]) {
            if (next < 0 || next > 100000) continue;
            if (visited[next] == 0) {
                q.push(next);
                visited[next] = visited[v] + 1;
            }
        }
    }
};

let answer = bfs(n);
console.log(answer);
