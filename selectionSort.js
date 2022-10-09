function selectionSort(arr) {
  let sortedArr = [];
  while (arr.length) {
    let minValue = Number.MAX_VALUE;
    let minIndex = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < minValue) {
        minValue = arr[j];
        minIndex = j;
      }
    }
    sortedArr.push(arr[minIndex]);
    arr.splice(minIndex, 1);
  }
  return sortedArr;
}
console.log("Unsorted Array", [2, 3, 1, 5, 4]);
console.log("SortedArray", selectionSort([2, 3, 1, 5, 4]));
