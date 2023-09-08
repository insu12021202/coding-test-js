// array를 이용하여 stack 구현

let stack = [];
// 삽입(5) - 삽입(2) - 삽입(3) - 삽입(7) - 삭제() - 삽입(1) - 삽입(4) - 삭제()
stack.push(5);
stack.push(2);
stack.push(3);
stack.push(7);
stack.pop();
stack.push(1);
stack.push(4);
stack.pop();
let reversed = stack.slice().reverse();
console.log(reversed); // 최상단 원소부터 출력
console.log(stack);
