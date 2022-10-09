function quickSort(arr){
  //we will take pivot and slice one subarray which contain all elemnts which are less than
  //or equal to pivot and other subarray consist of elemnts which are greater than pivot
    //base case
    if(arr.length <= 1) return arr

    let lessThanPivot= [];
    let greaterThanPivot= []
    let pivot = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(arr[i] <= pivot) lessThanPivot.push(arr[i])
        else greaterThanPivot.push(arr[i])
    }
    return quickSort(lessThanPivot).concat(pivot, quickSort(greaterThanPivot)) 
    // return quickSort([...lessThanPivot,pivot,...greaterThanPivot])
   
}
console.log(quickSort([1,4,5,2,4,6,1]))
