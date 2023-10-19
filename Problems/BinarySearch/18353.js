const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./18353.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 병사 배치하기 (실버 2)
// 열외 시킨 병사 수 출력
// LIS를 만들기 위해 이분 탐색

let n = Number(input[0]);
let soldiers = input[1].split(" ").map(Number);

// 뒤집어야 증가하는 부분 수열 만들 수 있음
soldiers.reverse();

// 정렬된 순서를 유지하면서 배열에 삽입할 가장 왼쪽 인덱스 반환
const lowerBound = (arr, target, start, end) => {
    while (start < end) {
        let mid = parseInt((start + end) / 2);
        if (arr[mid] >= target) end = mid; // 최대한 왼쪽으로 이동하기
        else start = mid + 1;
    }
    return end;
};

// 가장 긴 증가하는 수열
let lis = [0];
soldiers.map((soldier) => {
    // 가장 센 병사면 집어넣기
    if (soldier > lis[lis.length - 1]) {
        lis.push(soldier);
    }
    // 센 놈이 아니면 넣을 수 있는 위치 중 가장 왼쪽 병사랑 교체
    else {
        let idx = lowerBound(lis, soldier, 0, lis.length);
        lis[idx] = soldier;
    }
});

console.log(soldiers.length - (lis.length - 1));
