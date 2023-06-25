//memorization for better optimization of code

const DIVISOR_SUMS = Array(1000).fill(0);
function sumAmicableNum(n) {
    let sum = 0;
    for(let i=1;i<=n;i++){
      let sumOfDivisors = d(i);
      if(i!==sumOfDivisors && d(sumOfDivisors)===i){
        sum += i;
      }
    }
    return sum;
  }
  
  function d(n){
    if(DIVISOR_SUMS[n]) return DIVISOR_SUMS[n];
    let sum=1;
    for(let i=2;i<Math.floor(Math.sqrt(n))+1;i++){
      if(n%i==0){
        sum += i + Math.floor(n/i);
        if(Math.floor(n/i)==i)
          sum -= i;
      }
    }
    return DIVISOR_SUMS[n] = sum;
  }
  
  sumAmicableNum(100000);