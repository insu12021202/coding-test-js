const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./7490.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 0 만들기 (골드5)

let t = Number(input[0]);

// 테스트 케이스만큼 실시
for (let i = 1; i < t + 1; i++) {
    let n = Number(input[i]);
    // 1 ~ n의 리스트
    let list = Array.from({ length: n }, (_, i) => i + 1);
    let visited = Array.from({ length: n }, () => false);
    visited[1] = true;
    let exp = "1";
    let answer = [];

    // dfs
    const dfs = (result, exp, depth) => {
        if (depth == n && result == 0) {
            answer.push(exp);
            return;
        }
        list.map((num) => {
            if (!visited[num] && exp[exp.length - 1] < String(num)) {
                visited[num] = true;
                // 합해서 넘기기
                dfs(result + num, exp + `+${num}`, depth + 1);
                // 빼서 넘기기
                dfs(result - num, exp + `-${num}`, depth + 1);
                // 공백으로 붙여서 넘기기
                dfs(result * 10 + num, exp + ` ${num}`, depth - 1);
                visited[num] = false;
            }
        });
    };

    dfs(1, exp, 1);
    console.log(answer);
}
