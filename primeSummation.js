function isPrime(n) {
    if (n == 2) return true;
    for (let i = 3; i < Math.sqrt(n) + 1; i += 2) {
      if (n % i == 0) return false;
    }
    return true;
  }  

function primeSummation(n) {
    let result = 0;
    if(n>2) result = 2; 
    for(let i=3;i<n;i+=2){
        if(isPrime(i)){
            result+=i;
        }
    }
    return result;
  }
  
  primeSummation(2000000);