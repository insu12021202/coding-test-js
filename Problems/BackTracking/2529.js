const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./2529.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 부등호 (실버1)

let k = Number(input[0]);
let signs = input[1].split(" ");
let visited = Array.from({ length: 10 }, () => false);
let current = "";
let first = "";
let result = [];

function dfs(depth) {
    if (depth == k + 1) {
        // 각 순열(permutation)에 대한 처리
        let check = true; // 부등식을 만족하는지 확인
        for (let i = 0; i < k; i++) {
            if (signs[i] == "<") {
                if (result[i] > result[i + 1]) check = false;
            } else if (signs[i] == ">") {
                if (result[i] < result[i + 1]) check = false;
            }
        }
        if (check) {
            // 부등식을 만족하는 경우에
            current = result.join("");
            if (first == "") first = current; // 첫째 문자열은 [가장 작은 수]
        }
        return;
    }
    for (let i = 0; i < 10; i++) {
        // 0부터 9까지의 숫자를 하나씩 고르는 순열(백트래킹)
        if (!visited[i]) {
            visited[i] = true; // 현재 선택한 숫자 방문 처리
            result.push(i);
            dfs(depth + 1); // 재귀 함수 호출
            visited[i] = false; // 현재 선택한 숫자 방문 처리 취소
            result.pop();
        }
    }
}

dfs(0);

console.log(current, first);
