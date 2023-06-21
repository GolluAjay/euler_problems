function largestPrimeFactor(number) {
    let n = number;
    let max_prime = -1;
    while(n%2===0){
        n= parseInt(n/2);
        max_prime=2;
    }
    for(let i=3;i<Math.sqrt(n)+1;i+=2){
        while(n%i===0){
           n=parseInt(n/i);
           max_prime=i;
        }
    }
    if(n>2) max_prime = n;
    return max_prime;
  }
  
  console.log(largestPrimeFactor(13195));