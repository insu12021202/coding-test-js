const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./15686.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 0은 빈 칸, 1은 집, 2는 치킨집 (1~13)
// 치킨 집 좌표를 모아놓고, 치킨 집 개수 중 M개를 뽑는 경우 찾기 -> m^2
// 각 최소 거리를 모두 더해 치킨 거리를 구하고, 최소값 갱신

let [n, m] = input[0].split(" ").map(Number);
let homes = [];
let chickens = [];
for (let i = 1; i < n + 1; i++) {
    let line = input[i].split(" ").map(Number);
    line.map((item, idx) => {
        let x = i;
        let y = idx + 1;
        if (item == 1) {
            homes.push([x, y]);
        }
        if (item == 2) {
            chickens.push([x, y]);
        }
    });
}
let newChickens = [];
let visited = Array.from({ length: chickens.length }, () => false);
const dfs = (depth, result, start) => {
    if (depth == m) {
        newChickens.push([...result]);
        return;
    }
    for (let i = start; i < chickens.length; i++) {
        if (!visited[i]) {
            visited[i] = true;
            result.push(chickens[i]);
            dfs(depth + 1, result, i + 1);
            result.pop();
            visited[i] = false;
        }
    }
};
let result = [];
dfs(0, result, 0);

// 치킨 집 경우에 대해서
// 각 집으로부터 최소 거리 찾고 다 더하기
let answer = 1e8;
newChickens.map((chs) => {
    let chickenD = 0;
    homes.map((h) => {
        let [hx, hy] = h;
        let hcMinD = 1e8;
        chs.map((ch) => {
            let [chx, chy] = ch;
            hcMinD = Math.min(Math.abs(chx - hx) + Math.abs(chy - hy), hcMinD);
        });
        chickenD += hcMinD;
    });
    answer = Math.min(answer, chickenD);
});
console.log(answer);
