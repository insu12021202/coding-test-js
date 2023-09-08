// Dictionary 자료형을 이용하여 queue 구현
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

// test code
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

while (queue.getLength() !== 0) {
    console.log(queue.dequeue());
}
