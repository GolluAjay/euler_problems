function isPrime(n){
    if(n===0 || n===1){
        return false;
    }
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0) return false;
    }
    return true;
}

function primePermutations() {
    let lowerLimit = 10**3+1;
    let upperLimit = 10**4;
    for(let i=lowerLimit;i<upperLimit;i+=2){
        let j = 2;
        if(isPrime(i) && i!=1487){
            while(j<10**4){
                if(isPrime(i+j) && isPrime(i+2*j)){
                    let x = i.toString().split('').sort().join('');
                    let y = (i+j).toString().split('').sort().join('');
                    let z = (i+2*j).toString().split('').sort().join('');
                    if(x===y && y===z){
                        return parseInt(i+""+(i+j)+""+(i+2*j));
                    }
                }
                j+=2;
            }
        }
    }
    return true;
  }
  
  console.log(primePermutations());