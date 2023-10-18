const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./17609.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 회문 (골드 5)
// 회문이면 0, 유사회문이면 1, 그 외는 2 출력
// 테스트 케이스: T(1~30), 문자열의 길이 (3~10^5)

const T = Number(input[0]);
for (let i = 1; i < T + 1; i++) {
    // 현재 확인 중인 문자열 배열
    let arr = input[i].split("");
    let left = 0;
    let right = arr.length - 1;
    let answer = 0;

    // 회문 체크 함수
    const check = (word, left, right) => {
        while (left < right) {
            if (word[left] === word[right]) {
                left++;
                right--;
            } else {
                return false;
            }
        }
        return true;
    };

    while (left <= right) {
        // 아직까진 회문일 때
        if (arr[left] == arr[right]) {
            left++;
            right--;
        }
        // 유사회문이거나 일반 문자열일 때
        else {
            // 유사회문인지 보기
            if (check(arr, left + 1, right) || check(arr, left, right - 1)) {
                answer = 1;
                break;
            }
            // 아니면 무조건 일반 문자열임
            else {
                answer = 2;
                break;
            }
        }
    }
    console.log(answer);
}
