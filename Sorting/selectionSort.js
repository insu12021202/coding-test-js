const testSorting = require("./testSorting");

// 선택 정렬 함수
const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i; // 가장 작은 원소의 인덱스
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }

        //swap
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }

    return arr;
};

testSorting(selectionSort, "선택 정렬");
