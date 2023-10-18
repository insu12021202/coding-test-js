const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./1541.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

let exp = input[0].split("-");
let answer = 0;

for (let i = 0; i < exp.length; i++) {
    let temp = exp[i].split("+").map(Number);
    let sum = 0;
    temp.map((item) => {
        sum += item;
    });
    exp[i] = sum;
}
answer = exp[0];

for (let i = 1; i < exp.length; i++) {
    answer -= exp[i];
}

console.log(answer);
