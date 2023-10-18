const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./11047.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

let [n, k] = input[0].split(" ").map(Number);
let coins = [];
let answer = 0;

for (let i = 1; i < n + 1; i++) {
    coins.push(Number(input[i]));
}

coins.sort((a, b) => b - a);

coins.map((coin) => {
    while (k >= coin) {
        k -= coin;
        answer++;
    }
});

console.log(answer);
