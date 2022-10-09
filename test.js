function solution(inputString) {
  
    let arr = inputString.split('.')
    if (arr.length < 4) return false
    
    let i = 0;
    // console.log('arr',arr[i])
    let regex = /(00)+/gi
    while(true){
        console.log(regex.test(arr[i].toString()))
         if(arr[i].toString().length < 1) return false
        else if(isNaN(arr[i])) return false
        else if(arr[i] < 0 || arr[i] > 255) return false
        // else if (arr[i].toString().match(/(00)+/gi).length > 0)
        i++
        if(i >= arr.length) break
    }
    return true
  }
  solution("172.16.254.0")
