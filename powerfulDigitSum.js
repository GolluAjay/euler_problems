function powerfulDigitSum(n) {
    let max = -1;
    for (let i = 1; i < n; i++) {
      for (let j = 1; j < n; j++) {
        const v = power(i,j)
          .toString()
          .split("")
          .map((x) => parseInt(x))
          .reduce((p, c) => p + c, 0);
        if (v > max) max = v;
      }
    }
    return max;
  }
  
  function power(i,j){
      let value = BigInt(1);
      for(let k=0;k<j;k++){
          value = BigInt(value)*BigInt(i);
      }
      return value;
  }
  
  powerfulDigitSum(100);