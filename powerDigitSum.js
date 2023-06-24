function powerDigitSum(exponent) {
    let n =  BigInt(2**exponent);
    let arr = n.toString().split("");
    return arr.reduce((sum,next)=>sum+parseInt(next),0);
  }
  
powerDigitSum(128);