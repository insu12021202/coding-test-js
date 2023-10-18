const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./11399.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 누적 합 구하는 문제
// 앞 사람 시간이 짧을수록 전체 걸리는 시간이 제일 작다.

n = Number(input[0]);
times = input[1].split(" ").map(Number);

if (n === 1) {
    console.log(times[0]);
} else {
    answerList = [];
    answer = 0;

    times.sort((a, b) => a - b);
    answerList.push(times[0]);

    for (let i = 1; i < times.length; i++) {
        answerList[i] = answerList[i - 1] + times[i];
    }

    answerList.map((item) => {
        answer += item;
    });

    console.log(answer);
}
