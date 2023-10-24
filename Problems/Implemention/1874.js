const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./1874.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 스택 수열 (실버 2)

let n = Number(input[0]);
let arr = Array.from({ length: n }, (_, i) => i + 1);
let stack = [];
let target = [];
for (let i = 1; i <= n; i++) {
    target.push(Number(input[i]));
}

// n번의 push 진행
let i = 0;
let j = 0;
let result = true;
let answer = "";
while (i < n) {
    if (stack.length > 0) {
        // console.log(stack[stack.length - 1], target[j]);
        while (stack[stack.length - 1] == target[j]) {
            stack.pop();
            answer += "-\n";
            j++;
        }
    }
    stack.push(arr[i]);
    answer += "+\n";
    i++;
}

// push가 끝난 후, 성공 여부 검사
while (stack.length > 0) {
    if (target[j] == stack[stack.length - 1]) {
        stack.pop();
        answer += "-\n";
        j++;
    } else {
        result = false;
        break;
    }
}

if (!result) console.log("NO");
else console.log(answer);
