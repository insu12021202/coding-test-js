const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./2961.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 도영이가 만든 맛있는 음식 (실버2)
// 신맛 S : 곱, 쓴맛 B: 합, 재료: N개
// 신맛과 쓴맛의 차이가 가장 작은 요리의 차이 출력
// 하나 이상의 재료만 쓰면 됨

let n = Number(input[0]);
let gradients = [];
for (let i = 1; i < n + 1; i++) {
    gradients.push(input[i].split(" ").map(Number));
}
let visited = Array.from({ length: n }, () => false);
let result = [];
let minValue = Infinity;

const calculate = (arr) => {
    let s = arr[0][0];
    let b = arr[0][1];
    for (let i = 1; i < arr.length; i++) {
        s *= arr[i][0];
        b += arr[i][1];
    }
    return Math.abs(s - b);
};

const dfs = (depth, start) => {
    if (depth >= 1) {
        minValue = Math.min(minValue, calculate(result));
    }

    for (let i = start; i < n; i++) {
        if (!visited[i]) {
            visited[i] = true;
            result.push(gradients[i]);
            dfs(depth + 1, i + 1);
            visited[i] = false;
            result.pop();
        }
    }
};

dfs(0, 0);

console.log(minValue);
