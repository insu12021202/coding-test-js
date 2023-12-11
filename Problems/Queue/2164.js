const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./2164.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 카드2 (실버4)

let n = Number(input[0]);

class Queue {
    constructor() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }

    enqueue(item) {
        this.items[this.tailIndex] = item;
        this.tailIndex++;
    }

    dequeue() {
        const item = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        return item;
    }

    peek() {
        return this.items[this.headIndex];
    }

    getLength() {
        return this.tailIndex - this.headIndex;
    }
}

// queue에 채우기 (shift의 시간 복잡도는 O(1))
// 일반 Array의 shift를 사용하면 O(n)이므로 시간 초과
let queue = new Queue();
for (let i = 1; i <= n; i++) {
    queue.enqueue(i);
}

while (queue.getLength() > 1) {
    queue.dequeue();
    queue.enqueue(queue.dequeue());
}

console.log(queue.peek());
