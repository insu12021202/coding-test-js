const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./1946.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 신입사원
// 1차 서류, 2차 면접
// 둘 중 적어도 하나가 다른 이보다 작지 않은 사람만 선발
// 뽑을 수 있는 신입사원 최대 수

// T (1~20) 테스트 케이스
// N (1~10^6) 지원자 수
// [a, b] 서류 성적, 면접 성적 순위 (동석차는 없음)

const T = Number(input[0]);
// Test case만큼 반복
let idx = 1;
for (let i = 0; i < T; i++) {
    // input 받기
    const N = Number(input[idx]);
    let scores = [];
    idx += 1;
    for (j = 0; j < N; j++) {
        scores.push(input[idx + j].split(" ").map(Number));
    }
    idx += N;

    let minValue = 0;
    let answer = 0;

    // 서류 꼴찌부터 내림차순 정렬
    scores.sort((a, b) => a[0] - b[0]);

    // 서류 1등부터 면접 점수 min Value를 갱신해가며 count
    scores.map((person) => {
        if (person[0] == 1) {
            answer++;
            minValue = person[1];
        } else if (person[1] < minValue) {
            minValue = person[1];
            answer++;
        }
    });

    console.log(answer);
}
