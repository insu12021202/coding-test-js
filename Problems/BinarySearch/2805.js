const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./2805.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 나무 자르기 (실버 2)
// 절단기 높이의 최댓값 구하기
// 구해야 하는 나무 길이 : M (10^6 ~ 10^9), 나무의 수: N (1 ~ 10^6)

let [n, m] = input[0].split(" ").map(Number);
let trees = input[1].split(" ").map(Number);
let start = 1;
let end = Math.max(...trees);
let result = 0;

const check = (h) => {
    let sum = 0;
    trees.map((tree) => {
        if (tree >= h) {
            sum += tree - h;
        }
    });

    return sum;
};

while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let sum = check(mid);

    // 만약 자른 나무 총합이 M보다 크면 오른쪽에서 찾기
    if (sum >= m) {
        start = mid + 1;
        result = mid;
    } else {
        // M보다 작으면 오른쪽에서 찾기
        end = mid - 1;
    }
}

console.log(result);
