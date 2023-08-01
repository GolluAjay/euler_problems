function isPrime(n){
    if(n===0 || n===1){
        return false;
    }
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0) return false;
    }
    return true;
}

function getPrimes(limit){
    const arr = [];
    for(let i=0;i<=limit;i++){
        if(isPrime(i)) arr.push(i);
    }
    return arr;
}

function consecutivePrimeSum(limit) {
    const PRIMES = getPrimes(limit);
    const numPrimes = PRIMES.length;
    // console.log(PRIMES);
    let ans = 0;
    let maxPrimes = 0;

    for (let start = 0; start < numPrimes; start++) {
        let sum = 0;
        for (let end = start; end < numPrimes; end++) {
            sum += PRIMES[end];
            // console.log(sum+" "+start+" "+end);
            if (sum > limit) {
                break;
            }
            if (end - start > maxPrimes && isPrime(sum)) {
                maxPrimes = end - start;
                ans = sum;
            }
        }
    }
    console.log(ans);
    return ans;
}
  
  consecutivePrimeSum(100);