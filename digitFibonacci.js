function digitFibonacci(n) {
    let arr=[1,1];
    let count=1;
    let res;
    while(count<n){
      const len = arr.length;
      arr[len] = arr[len-1] + arr[len-2];
      count = arr[len].toString().length;
      res = len+1;
    }
    return res;
  }
  
console.log(digitFibonacci(20));