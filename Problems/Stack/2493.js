const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./2493.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 탑 (골드 5)

const N = Number(input[0]);
let towers = input[1].split(" ");
const stack = [];
const answer = [];

for (let i = 0; i < N; i++) {
    const currentTower = {
        index: i + 1,
        height: Number(towers[i]),
    };

    // 스택이 비었을 때 (맨 처음)
    if (!stack.length) {
        // 스택에 현재 정보 넣기
        stack.push(currentTower);
        answer.push(0);
        continue;
    }

    // 만약 현재 타워가 직전 타워보다 크면 (레이저 안 맞음)
    if (currentTower.height > stack[stack.length - 1].height) {
        // 현태 타워에서 쏜 레이저가 어디에 맞는지 찾기
        while (stack.length) {
            // 스택에 있는 타워를 순회하며 조건에 맞을 때까지 pop
            if (currentTower.height < stack[stack.length - 1].height) {
                break;
            } else {
                stack.pop();
            }
        }

        // 감지 완료
        if (stack.length) answer.push(stack[stack.length - 1].index);
        // 감지된 타워가 없음
        else answer.push(0);
    }
    // 현재 타워가 직전 타워보다 작으면 무조건 직전 타워가 레이저 감지
    else {
        answer.push(stack[stack.length - 1].index);
    }
    stack.push(currentTower);
}

console.log(answer.join(" "));
