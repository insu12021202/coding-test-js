const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./1493.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 박스 채우기 (골드3) -> 실패
// 박스 종류, 큐브 종류와 개수가 주어졌을 때, 박스를 채우기 위한 큐브 최소 개수
// 첫째 줄에 가로, 세로, 높이
// 둘째 줄에 큐브 종류 N개
// N개 줄에 종류, 개수가 주어짐 (ex. 0, 10) => 한 폭이 2^0인 큐브 10개

let [l, w, h] = input[0].split(" ").map(Number);
let n = Number(input[1]);
let cubes = [];
for (let i = 2; i < n + 2; i++) {
    cubes.push(input[i].split(" ").map(Number));
}

let total = l * w * h;
cubes.reverse(); // 큰 큐브부터 보려고 뒤집음

const checkSize = (cube) => {
    let cubeSize = 2 ** cube[0];
    if (cubeSize >= l && cubeSize >= w && cubeSize >= h) {
        return true;
    } else {
        return false;
    }
};

cubes.map((cube, idx) => {
    // cube를 넣을 수 있으면
    if (checkSize(cube)) {
    }
});
