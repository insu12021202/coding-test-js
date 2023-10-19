const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./6603.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 로또 (실버2)
// k개의 수 중에서 6개를 뽑아 사전 순으로 출력

let i = 0;
while (true) {
    let check = input[i];
    if (check == 0) break;

    let line = check.split(" ").map(Number);
    let k = line[0];
    let numbers = line.slice(1, line.length + 1);
    let visited = Array.from({ length: k }, () => false);
    let answer = "";
    let result = [];
    const dfs = (depth, start) => {
        if (depth == 6) {
            answer += result.join(" ") + "\n";
        }

        for (let i = start; i < numbers.length; i++) {
            if (!visited[i]) {
                visited[i] = true;
                result.push(numbers[i]);
                dfs(depth + 1, i + 1);
                result.pop();
                visited[i] = false;
            }
        }
    };

    dfs(0, 0);

    console.log(answer);

    i++;
}
