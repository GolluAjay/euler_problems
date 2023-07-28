function isPrime(n){
    // console.log(n);
    if(n===0 || n===1){
        return false;
    }
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0) return false;
    }
    return true;
}
function circularPrimes(n) {
    let count = 0;
    for(let i=0;i<=n;i++){
        let flag = true;
        let temp = i.toString().split('');
        for(let j=0;j<temp.length;j++){
            // console.log(temp);
            if(!isPrime(parseInt(temp.join('')))){
                flag = false;
                break;
            }
            let x = temp.shift();
            temp.push(x);
        }
        if(flag){
            // console.log(i);
            count++;
        } ;
    }
    return count;
  }
  
console.log(circularPrimes(100));