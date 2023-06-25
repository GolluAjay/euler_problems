function sumFactorialDigits(n) {
    let arr = [BigInt(1),BigInt(2)];
    for(let i=2;i<=n;i++){
        arr[i] = BigInt(i+1) * arr[i-1];
    }
    return arr[n-1].toString().split("").reduce((sum,prev)=>sum + parseInt(prev),0);
  }
  
sumFactorialDigits(100);