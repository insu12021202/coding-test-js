const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./2839.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 3A + 5B = n 을 만족하는 최대 B 찾기

let n = Number(input[0]);

let answer = 0;
let flag = false;

while (n >= 0) {
    if (n == 0 || n % 5 == 0) {
        answer += parseInt(n / 5);
        console.log(answer);
        flag = true;
        break;
    }
    n -= 3;
    answer += 1;
}

if (!flag) {
    console.log(-1);
}
