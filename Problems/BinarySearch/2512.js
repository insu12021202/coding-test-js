const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./2512.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 예산 (실버 2)
// 모든 요청이 배정되면 요청한 금액 그대로 배정
// 그렇지 않으면, 상한액 책정 -> 최적의 상한액을 찾기
// 지방의 수 N (3~10^4), 요청액 (1~10^6), 총 예산 M (N ~ 10^9)

const n = Number(input[0]);
const requests = input[1].split(" ").map(Number);
const total = Number(input[2]);

// 요청 총액 계산
let sum = 0;
requests.map((item) => {
    sum += item;
});

// 상한액 찾기 - 이분 탐색
const findLowerBound = (start, end) => {
    result = 0;
    while (start <= end) {
        let mid = parseInt((start + end) / 2);
        // 줄 수 있으면 오른쪽에서 찾고
        if (check(mid)) {
            result = mid;
            start = mid + 1;
        }
        // 못 주면 왼쪽에서 찾기
        else {
            end = mid - 1;
        }
    }
    return result;
};

// 해당 상한액으로 요청 금액을 충족할 수 있는지 체크
const check = (bound) => {
    let sum = 0;
    requests.map((req) => {
        if (req >= bound) {
            sum += bound;
        } else {
            sum += req;
        }
    });

    if (sum <= total) {
        return true;
    } else {
        return false;
    }
};

// 예산을 전부 줄 수 있으면 요청의 최댓값 출력
if (sum <= total) {
    console.log(Math.max(...requests));
}
// 그렇지 않으면 상한액 책정
else {
    let max = Math.max(...requests);
    console.log(findLowerBound(1, max));
}
