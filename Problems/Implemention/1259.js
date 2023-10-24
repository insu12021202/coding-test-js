const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./1259.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

let line = 0;
while (true) {
    if (input[line] == 0) {
        break;
    }
    let n = input[line].split("").map(Number);
    let left = 0;
    let right = n.length - 1;
    let result = true;
    while (left <= right) {
        if (n[left] != n[right]) {
            result = false;
        }
        left++;
        right--;
    }

    if (result) console.log("yes");
    else console.log("no");

    line++;
}
