const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./18110.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: solved.ac (실버4)

let n = Number(input[0]);

if (n == 0) {
    console.log(0);
} else {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(Number(input[i]));
    }

    arr.sort((a, b) => a - b);

    let ignore = Math.round(n * 0.15);

    let newArr = arr.slice(ignore, n - ignore);

    let sum = 0;
    newArr.map((item) => {
        sum += item;
    });

    console.log(Math.round(sum / (n - ignore * 2)));
}
