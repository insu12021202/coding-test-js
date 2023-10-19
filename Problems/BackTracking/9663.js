const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./9663.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: N-Queen (골드4)

let n = Number(input[0]);
// queen을 놓은 열 확인용
let visited = Array.from({ length: n }, () => false);
let count = 0;
let result = [];

// 대각 방향 확인
const isValid = (x, y) => {
    let answer = true;
    // 모든 현재 놓여진 퀸에 대해
    result.map((queen, idx) => {
        let xDiff = Math.abs(queen[0] - x);
        let yDiff = Math.abs(queen[1] - y);
        if (xDiff == yDiff) {
            answer = false;
            return;
        }
    });

    // console.log(answer);

    return answer;
};

const dfs = (depth) => {
    if (depth == n) {
        count++;
        return;
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i] && isValid(depth, i)) {
            visited[i] = true;
            result.push([depth, i]);
            dfs(depth + 1);
            result.pop();
            visited[i] = false;
        }
    }
};

dfs(0);

console.log(count);
