// //Linear - sequencial search
// function Linear(arr, toFind){
//    for(let i = 0; i < arr.length; i++){
//        if(arr[i] == toFind){
//          return `${arr[i]} found at ${i} index`
//        }
//    }
//   return `No value found`
// }
// console.log(Linear([1,3,4,6,7,8,9,7],6))

//Binary search
// function Binary(arr, toFind){
//     let firstIndex = 0
//     let lastIndex = arr.length

//     for(let i = firstIndex; i < lastIndex;){
//         let mid = Math.ceil((firstIndex + lastIndex) / 2)
//         if(arr[mid] == toFind){
//             return `${arr[mid]} found at ${mid} index`
//         }
//         else if(toFind > arr[mid])
//         {
//              firstIndex = mid + 1
//         }
//         else if(toFind < arr[mid])
//         {
//             lastIndex = mid - 1
//         }
//         console.log(firstIndex, lastIndex, mid)
//     }
//    return `No value found`
//  }
//  console.log(Binary([1,3,4,6,7,8,9],9))

function RecursiveBinary(arr, toFind) {
  let firstIndex = 0;
  let lastIndex = arr.length - 1;
  let mid = Math.floor((firstIndex + lastIndex) / 2);
  console.log(mid, arr);
  if (arr[mid] == toFind) {
    return `${arr[mid]} found at ${mid} index`;
  } else if (toFind > arr[mid]) {
    firstIndex = mid + 1;
    return RecursiveBinary(arr.slice(firstIndex), toFind);
  } else if (toFind < arr[mid]) {
    lastIndex = mid - 1;
    return RecursiveBinary(arr.slice(firstIndex, lastIndex + 1), toFind);
  }

  if (arr.length <= 1) return `No value found`;
}
console.log(RecursiveBinary([1, 3, 4, 6, 7, 8, 9], 9));
// function solution(n) {
//   while (n.includes("(")) {
//     n = n.replace(/\(\w+\)/g, (word) =>
//       [...word].reverse().join("").replace(/\(|\)/g, "")
//     );
//   }
//   return n;
// }
