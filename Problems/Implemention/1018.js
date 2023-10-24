const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./1018.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 체스판 다시 칠하기 (실버 4)

let [n, m] = input[0].split(" ").map(Number);
let graph = [];
for (let i = 1; i <= n; i++) {
    graph.push(input[i].split(""));
}

let result = Infinity;

for (let i = 0; i < n - 7; i++) {
    for (let j = 0; j < m - 7; j++) {
        let c = Infinity;
        for (let start of ["B", "W"]) {
            let count = 0;
            let color = start;
            for (let l = 0; l < 8; l++) {
                for (let k = 0; k < 8; k++) {
                    if (graph[l + i][k + j] != color) {
                        count++;
                    }
                    if (color == "B") color = "W";
                    else if (color == "W") color = "B";
                }
                if (color == "B") color = "W";
                else if (color == "W") color = "B";
            }
            c = Math.min(c, count);
        }

        result = Math.min(result, c);
    }
}

console.log(result);
