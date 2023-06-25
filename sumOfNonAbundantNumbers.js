function sumOfNonAbundantNumbers(n) {
    const abundantNumbers = [];
    const arr = Array(n+1).fill(false);

    for(let i=1;i<n;i++){
        if(isAbundantNumber(i)) abundantNumbers.push(i);    
    }

    for(let i=0;i<abundantNumbers.length;i++){
        for(let j=0;j<abundantNumbers.length;j++){
            const sum = abundantNumbers[i] + abundantNumbers[j];
            if(sum<=n){
                arr[sum] = true;
            }
        }
    }
    return arr.reduce((sum,next,i)=> sum + (next?0:i),0);

}
function isAbundantNumber(n) {
  return n < d(n) ? true : false;
}

function d(n) {
  let sum = 1;
  for (let i = 2; i < Math.floor(Math.sqrt(n)) + 1; i++) {
    if (n % i == 0) {
      sum += i + Math.floor(n / i);
      if (Math.floor(n / i) == i) sum -= i;
    }
  }
  return sum;
}

sumOfNonAbundantNumbers(15000);