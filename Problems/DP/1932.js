const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./1932.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 정수 삼각형 (실버 1)
// 합이 최대가 되는 경로
// 왼쪽 대각선 or 오른쪽 대각선으로 내려올 수 있음
// 최대 합을 출력

let n = Number(input[0]);

let d = [];
for (let i = 1; i < n + 1; i++) {
    d.push(input[i].split(" ").map(Number));
}

for (let i = 1; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
        // 범위 안에 들어오면
        let upLeft = 0;
        if (j > 0) {
            upLeft = d[i - 1][j - 1];
        }
        let up = 0;
        if (j < i) {
            up = d[i - 1][j];
        }
        d[i][j] = Math.max(upLeft, up) + d[i][j];
    }
}
console.log(Math.max(...d[n - 1]));
