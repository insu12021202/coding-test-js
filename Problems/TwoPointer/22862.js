const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./22862.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 가장 긴 짝수 연속한 부분 수열 (골드 5)
// end를 하나씩 이동하면서

let [s, k] = input[0].split(" ").map(Number);
let numbers = input[1].split(" ").map(Number);

let result = 0;
let eraseCount = 0;
for (let start = 0, end = 0; start < s; start++) {
    while (end < s) {
        if (numbers[end] % 2 == 0) {
            // 짝수인 경우 end 증가
            end++;
        } else {
            // 홀수인 경우
            if (eraseCount == k) break; // 더 지울 수 없다면 종료
            // 지울 수 있으면 지우기
            eraseCount++;
            end++;
        }
    }
    // 범위의 길이는 항상 최대값으로 갱신
    result = Math.max(result, end - start - eraseCount);
    // 만약 start를 한 칸 옮길 때, 가능하다면 지울 수 있는 개수 증가
    if (numbers[start] % 2 == 1) eraseCount--;
}

console.log(result);
