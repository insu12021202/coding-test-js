const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./18870.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

const N = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let newArr = [...arr];
let answer = "";
// 중복 제거
let set = new Set(arr);
// 다시 배열로 바꾸기
newArr = [...set];
// 오름차순으로 정렬
newArr.sort((a, b) => {
    return a - b;
});
// 객체에 매핑
let obj = {};
newArr.map((item, idx) => {
    obj[item] = idx;
});
// 순서대로 크기 순위 출력
arr.map((item) => {
    answer += obj[String(item)];
    answer += " ";
});

console.log(answer);
