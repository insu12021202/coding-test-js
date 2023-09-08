const testSorting = (sortFunction, sortName) => {
    // 0부터 999까지의 정수 30000개를 담은 배열 생성
    let arr = Array.from({ length: 30000 }, () =>
        Math.floor(Math.random() * 1000)
    );
    // getTime(): 1970-01-01부터의 시간차를 ms 단위로 계산
    let startTime = new Date().getTime();
    let sortedArr = sortFunction(arr);
    let endTime = new Date().getTime();
    // 시간차 출력
    console.log(`\n정렬된 배열의 일부: ${sortedArr.slice(10000, 10100)}`);
    console.log(`${sortName} 소요 시간:`, endTime - startTime, "ms.");

    /* 2) 이미 정렬된 배열에 대한 선택 정렬의 수행 시간 측정 */

    // getTime(): 1970-01-01부터의 시간차를 ms 단위로 계산
    startTime = new Date().getTime();
    sortFunction(sortedArr);
    endTime = new Date().getTime();
    // 시간차 출력
    console.log(
        `정렬된 배열에 대한 ${sortName} 소요 시간:`,
        endTime - startTime,
        "ms."
    );
};

module.exports = testSorting;
