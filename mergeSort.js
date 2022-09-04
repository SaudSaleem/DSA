//REMEMBER ALWAYS USE MATH.FLOOR
//ALWAYS FIND MID BY DIVING ARRAY.LEN - 1 (-1 IS NECCCESSARY)
//ALOT MID TO LEFT SIDE ARRAY - NOT RIGHT SIDE ARRAY
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let leftArr,
    rightArr = [];
  let mid = Math.floor((arr.length - 1) / 2);
  leftArr = arr.slice(0, mid+1);
  rightArr = arr.slice(mid+1, arr.length);
  console.log("left", leftArr, rightArr);
  let leftSortedArr = mergeSort(leftArr);
  let rightSortedArr = mergeSort(rightArr);
  console.log("leftsorted", leftSortedArr, rightSortedArr);
  let newArr = [];
  let j = 0;
  let i = 0;
  for (i = 0; i < leftSortedArr.length; ) {
    if (leftSortedArr[i] < rightSortedArr[j]) {
      newArr.push(leftSortedArr[i]);
      i++;
    } else {
      newArr.push(rightSortedArr[j]);
      j++;
    }

    if (j == rightSortedArr.length) break;
  }

  if (i < leftSortedArr.length) {
    newArr = newArr.concat(leftSortedArr.slice(i, leftSortedArr.length));
  } else {
    newArr = newArr.concat(rightSortedArr.slice(j, rightSortedArr.length));
  }
  console.log("new", newArr);
  return newArr;
}

console.log(mergeSort([9, 1, 3, 4, 9, 99, 7, 9]));
