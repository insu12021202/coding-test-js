const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./10250.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

let testCase = Number(input[0]);
let line = 1;
while (testCase--) {
    let [h, w, n] = input[line].split(" ").map(Number);
    let a = n % h;
    if (a == 0) {
        a = h;
    }
    let b = parseInt(n / h);
    if (n % h == 0) {
        b = n / h;
    } else {
        b = parseInt(n / h) + 1;
    }
    if (b < 10) {
        b = "0" + String(b);
    }
    console.log(String(a) + b);
    line++;
}
