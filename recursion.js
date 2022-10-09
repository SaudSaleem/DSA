function recursion(arr){
    let sum = 0;
    if(arr.length == 1) return arr[0];
    return sum = arr[0] + recursion(arr.slice(1,arr.length))
}
console.log(recursion([1,2,3,4,5]))
