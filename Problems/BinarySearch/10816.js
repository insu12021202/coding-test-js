const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./10816.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 숫자 카드2 (실버 4)
// 카드 개수 : N(1 ~ 5*10^5), 카드 넘버: N(-10^7 ~ 10^7), 타겟 M (1 ~ 5 * 10^5)
// 정수 M이 적힌 카드를 몇 개 갖고 있는지 찾기

let n = Number(input[0]);
let cards = input[1].split(" ").map(Number);
let m = Number(input[2]);
let targets = input[3].split(" ").map(Number);
cards.sort((a, b) => a - b);
let answer = [];

// 정렬된 순서를 유지하면서 배열에 삽입할 가장 왼쪽 인덱스 반환
const lowerBound = (arr, target, start, end) => {
    while (start < end) {
        let mid = parseInt((start + end) / 2);
        if (arr[mid] >= target) end = mid; // 최대한 왼쪽으로 이동하기
        else start = mid + 1;
    }
    return end;
};

// 정렬된 순서를 유지하면서 배열에 삽입할 가장 오른쪽 인덱스 반환
const upperBound = (arr, target, start, end) => {
    while (start < end) {
        let mid = parseInt((start + end) / 2);
        if (arr[mid] > target) end = mid;
        else start = mid + 1; // 최대한 오른쪽으로 이동하기
    }
    return end;
};

// 값이 [leftValue, rightValue]인 데이터의 개수를 반환하는 함수
const countByRange = (arr, leftValue, rightValue) => {
    // 유의: lowerBound와 upperBound는 end 변수의 값을 배열의 길이로 설정
    let rightIndex = upperBound(arr, rightValue, 0, arr.length);
    let leftIndex = lowerBound(arr, leftValue, 0, arr.length);
    return rightIndex - leftIndex;
};

targets.map((target) => {
    // 해당 타겟의 가장 왼쪽 인덱스
    let result = countByRange(cards, target, target);
    answer.push(result);
});

console.log(answer.join(" "));
