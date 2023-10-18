const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./10814.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 오름차순으로 정렬
// 나이가 같다면 먼저 온 사람 부터
// 1 <= N <= 10^5

const N = Number(input[0]);
const members = [];
let answer = "";

// members 입력 받기
for (let i = 1; i < N + 1; i++) {
    let member = input[i].split(" ");
    members.push([Number(member[0]), member[1], i]);
}

members.sort((a, b) => {
    // 둘의 나이가 같으면 index 순으로 정렬
    if (a[0] != b[0]) {
        return a[0] - b[0];
    } else {
        return a[2] - b[2];
    }
});

members.map((item) => {
    answer += `${item[0]} ${item[1]}\n`;
});
console.log(answer);
