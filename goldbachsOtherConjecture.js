function isPrime(n){
    if(n===0 || n===1){
        return false;
    }
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0) return false;
    }
    return true;
}

function goldbachsOtherConjecture() {
    for(let i=1;i<3000;i++){
        const odd = 2*i+1;
        let flag = false;
        for(let j=1;j<odd;j++){
            if(isPrime(j)){
                let x = Math.sqrt((odd-j)/2);
                if(x === Math.floor(x)) {
                    flag = true;
                    break;
                }
            }
        }
        if(!flag && !isPrime(odd)) return odd;
    }
    return true;
  }
  
  goldbachsOtherConjecture();