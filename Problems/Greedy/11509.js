const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./11509.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 풍선 맞추기 (골드 5)

const N = Number(input[0]);
const balloons = input[1].split(" ").map(Number);

// 높이마다의 화살 개수 리스트 (0 ~ N까지의 높이)
let arrows = Array.from({ length: N }, () => 0);
let count = 0;

if (N == 1) {
    console.log(1);
} else {
    balloons.map((h, idx) => {
        if (arrows[h - 1] == 0) {
            arrows[h - 2] += 1;
            count += 1;
        } else {
            arrows[h - 1] -= 1;
            arrows[h - 2] += 1;
        }
    });

    console.log(count);
}
