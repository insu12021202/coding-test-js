const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./1021.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = [...input].map((x) => x.replace("\r", ""));

// 문제명: 회전하는 큐 (실버3)

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

    rotate(target) {
        // 타겟 넘버에 해당하는 타겟 인덱스 찾기
        let targetIndex = 0;
        for (let key of Object.keys(this.items)) {
            if (this.items[key] === target) targetIndex = key;
        }

        // 왼쪽으로 회전
        if (targetIndex - this.headIndex <= this.tailIndex - targetIndex) {
            const firstItem = this.items[this.headIndex];
            delete this.items[this.headIndex];
            this.headIndex++;

            this.items[this.tailIndex] = firstItem;
            this.tailIndex++;
        } else {
            // 오른쪽으로 회전
            const lastIndex = this.tailIndex - 1;
            const lastItem = this.items[lastIndex];
            delete this.items[lastIndex];
            this.tailIndex--;
            for (let i = this.tailIndex; i > this.headIndex; i--) {
                this.items[i] = this.items[i - 1];
            }

            this.items[this.headIndex] = lastItem;
            this.tailIndex++;
        }
    }

    peek() {
        return this.items[this.headIndex];
    }

    getLength() {
        return this.tailIndex - this.headIndex;
    }
}

const [n, m] = input[0].split(" ").map(Number);
let count = 0;

let queue = new Queue();
for (let i = 1; i <= n; i++) {
    queue.enqueue(i);
}

let seq = input[1].split(" ").map(Number);

seq.map((targetIndex) => {
    while (queue.peek() !== targetIndex) {
        queue.rotate(targetIndex);
        count++;
    }

    queue.dequeue();
});
console.log(count);
