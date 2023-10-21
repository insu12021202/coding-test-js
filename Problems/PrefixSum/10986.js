const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./10986.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 나머지 합 (골드 3)
// 연속된 부분 구간의 합이 M으로 나누어 떨어지는 구간의 개수 구하기

let [n, m] = input[0].split(" ").map(Number);
let numbers = input[1].split(" ").map(Number);

// 누적합 구하기
let prefixSum = [0];
let sum = 0;
numbers.map((num) => {
    sum += num;
    prefixSum.push(sum);
});

// 누적합을 M으로 나눈 나머지 배열
let processed = [];
let counter = {}; // 각 나머지 값에 대한 개수를 저장하는 객체
for (let i = 0; i < n + 1; i++) {
    processed[i] = prefixSum[i] % m;
    if (processed[i] in counter) {
        counter[processed[i]] += 1;
    } else {
        counter[processed[i]] = 1;
    }
}

let result = 0;
for (let i = 0; i < m; i++) {
    if (i in counter) {
        result += parseInt(counter[i] * ((counter[i] - 1) / 2));
    }
}

console.log(result);
