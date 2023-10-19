const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./1654.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 랜선 자르기 (실버 2)
// K개의 랜선으로 최소 N개의 랜선 만들기
// K (1~10^4), N (1~10^6), 항상 K <= N
// 최대 랜선의 길이 출력

let [k, n] = input[0].split(" ").map(Number);
let cables = [];
for (let i = 1; i < k + 1; i++) {
    cables.push(Number(input[i]));
}

let start = 1;
let end = Math.max(...cables);
let result = 0;

const calSum = (len) => {
    let sum = 0;
    cables.map((cable) => {
        sum += parseInt(cable / len);
    });
    return sum;
};

while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let sum = calSum(mid);

    if (sum >= n) {
        result = mid;
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}

console.log(result);
