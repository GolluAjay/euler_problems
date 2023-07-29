function rightTruncate(n){
    let temp = n.toString().split('');
    temp.pop();
    if(temp.length===0) return 0;
    return parseInt(temp.join(''));
  }
  
  function leftTruncate(n){
    let temp = n.toString().split('');
    temp.shift();
    if(temp.length===0) return 0;
    return parseInt(temp.join(''));
  }
  
  function isPrime(n){
      if(n===0 || n===1){
          return false;
      }
      for(let i=2;i<=Math.sqrt(n);i++){
          if(n%i===0) return false;
      }
      return true;
  }
  
  function isRightTruncatablePrime(n){
    if(n===0) return true;
    if(isPrime(n)){
      if(isRightTruncatablePrime(rightTruncate(n))) return true;
    }
    return false;
  }

  function isLeftTruncatablePrime(n){
    if(n===0) return true;
    if(isPrime(n)){
      if(isLeftTruncatablePrime(leftTruncate(n))) return true;
    }
    return false;
  }
  
  function truncatablePrimes(n) {
    let count = 1;
    let i=11;
    let sum=0;
    while(count<=n){
      if(isRightTruncatablePrime(i) && isLeftTruncatablePrime(i)){
        sum += i;
        count++;
      }
      i++;
    }
    return sum;
  }
  
console.log(truncatablePrimes(11));