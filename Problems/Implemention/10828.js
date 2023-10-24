const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./10828.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 스택 (실버 4)

let n = Number(input[0]);
let stack = [];
answer = "";
for (let i = 1; i <= n; i++) {
    let line = input[i].split(" ");
    if (line[0] == "push") {
        stack.push(Number(line[1]));
    }
    if (line[0] == "top") {
        if (stack.length > 0) {
            answer += String(stack[stack.length - 1]) + "\n";
        } else {
            answer += "-1\n";
        }
    }
    if (line[0] == "size") {
        answer += String(stack.length) + "\n";
    }
    if (line[0] == "pop") {
        if (stack.length > 0) {
            answer += String(stack.pop()) + "\n";
        } else {
            answer += "-1\n";
        }
    }
    if (line[0] == "empty") {
        if (stack.length == 0) {
            answer += "1\n";
        } else {
            answer += "0\n";
        }
    }
}
console.log(answer);
