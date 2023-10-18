const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./16953.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: A->B
// 2로 나누거나, 10으로 나눈 몫으로 바꾸기 (거꾸로)
// 연산의 최소 횟수 찾기

let [a, b] = input[0].split(" ").map(Number);
let cnt = 1;
let flag = false;

while (b >= a) {
    if (b == a) {
        flag = true;
        break;
    }
    // 만약 아무 연산도 할 수 없다면 -1
    if (b % 2 !== 0 && b % 10 != 1) {
        break;
    }
    // 연산이 가능 하다면
    else {
        // 1을 떼는 연산
        if (b % 10 == 1) {
            b = parseInt(b / 10);
        }
        // 2로 나누는 연산
        else if (b % 2 == 0) {
            b = parseInt(b / 2);
        }
    }

    cnt++;
}

if (!flag) {
    console.log(-1);
} else {
    console.log(cnt);
}
