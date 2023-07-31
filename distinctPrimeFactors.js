function isPrime(n){
    if(n===0 || n===1){
        return false;
    }
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0) return false;
    }
    return true;
}

function generatePrimeFactors(num) {
      const primeFactors = [];
    //   let temp = num;
      while(num%2===0){
        if(!primeFactors.includes(2))
            primeFactors.push(2);
        num /= 2;
      }

      for(let i=3;i <= Math.sqrt(num);i+=2){
        if(num%i===0){
            if(isPrime(i)) primeFactors.push(i);
            num /= i;
        }
      }

      if(num>2){
            for(let i=0;i<primeFactors.length;i++){
                if(num%primeFactors[i] !== 0){
                    primeFactors.push(num);
                    return primeFactors
                } 

            }
      }

      return primeFactors;

}
function distinctPrimeFactors(targetNumPrimes, targetConsecutive) { 
    let i = 2;
    while(true){
         let flag = false;
         for(let j=0;j<targetConsecutive;j++){
            let x = generatePrimeFactors(i+j);
            if(x.length !== targetNumPrimes){
                flag = true;
                break;
            }
         } 
         if(flag){
            i++;
            continue;
         } 
         break;
    }
    return i;
  }
  
  console.log(distinctPrimeFactors(4, 4));