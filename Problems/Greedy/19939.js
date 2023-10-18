const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./19939.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 박 터뜨리기 (실버4)
// N개의 공을 K개의 바구니에 나눠 담기
// 바구니에는 최소 1개의 공이 있어야 하고, 제일 많은 바구니와 제일 적은 바구니 공 차이를 최소로
// 바구니의 공의 개수는 모두 달라야 함, 안되면 -1 출력
// 공의 개수: N(2~10^5), 팀의 개수: K(2~10^3)

let [N, K] = input[0].split(" ").map(Number);

// 1부터 K까지의 합
let need = (K * (K + 1)) / 2;

if (need > N) {
    console.log(-1);
} else {
    N -= need;
    if (N % K == 0) {
        console.log(K - 1);
    } else {
        console.log(K);
    }
}
