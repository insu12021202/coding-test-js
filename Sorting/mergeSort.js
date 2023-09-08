// 병합 함수
const merge = (arr, left, mid, right) => {
    let i = left;
    let j = mid + 1;
    let k = left; // 결과 배열의 인덱스

    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) sorted[k++] = arr[i++];
        else sorted[k++] = arr[j++];
    }
    // 왼쪽 배열에 대한 처리가 다 끝난 경우
    if (i > mid) {
        for (; j <= right; j++) sorted[k++] = arr[j];
    }
    // 오른쪽 배열에 대한 처리가 다 끝난 경우
    else {
        for (; i <= mid; i++) sorted[k++] = arr[i];
    }
    // 정렬된 배열 결과를 원본 배열에 반영하기
    for (let x = left; x <= right; x++) {
        arr[x] = sorted[x];
    }
};

// 병합 정렬 함수
const mergeSort = (arr, left, right) => {
    // 원소가 1개인 경우, 해당 병렬은 정렬이 된 상태로 판단
    if (left < right) {
        // 원소가 2개 이상이라면,
        let mid = parseInt((left + right) / 2);
        mergeSort(arr, left, mid); // 왼쪽 부분 배열 정렬
        mergeSort(arr, mid + 1, right); // 오른쪽 부분 배열 정렬
        merge(arr, left, mid, right); // 정렬된 2개 배열 병합
    }
};

// *병합 정렬 테스트 코드
let arr = Array.from({ length: 100000 }, () =>
    Math.floor(Math.random() * 1000)
);
// 임시 정렬 배열
let sorted = Array.from({ length: arr.length }, () => 0);

let startTime = new Date().getTime();
mergeSort(arr, 0, arr.length - 1);
let endTime = new Date().getTime();
// 시간차 출력
console.log(`병합 정렬 소요 시간: ${endTime - startTime}ms.`);
console.log(`정렬된 배열의 일부: ${arr.slice(700, 800)}`);
