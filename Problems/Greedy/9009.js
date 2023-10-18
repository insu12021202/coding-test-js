const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./9009.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 피보나치 (실버1)
// 서로 다른 피보나치 수의 합으로 정수 S를 만들기
// 최소 개수의 각각 피보나치 수 출력
// 정수 N은 1~10^9

const T = Number(input[0]);

// 테스트 케이스만큼 반복
for (let i = 1; i < T + 1; i++) {
    let S = Number(input[i]);

    // S 직전까지의 피보나치 테이블 생성
    let d = [0, 1];
    let idx = 2;
    while (true) {
        let f = d[idx - 1] + d[idx - 2];
        if (f <= S) {
            d.push(f);
            idx++;
        } else {
            break;
        }
    }

    // 피보나치 테이블 뒤집기
    d.sort((a, b) => b - a);

    let answer = [];
    // 제일 큰 피보나치 수부터 순회
    let index = 0;
    while (S !== 0) {
        if (S >= d[index]) {
            S -= d[index];
            answer.push(d[index]);
        }
        index++;
    }
    answer.reverse();
    console.log(answer.join(" "));
}
