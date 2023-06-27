function quadraticPrimes(range) {
    const primes = sieve_of_eratosthenes(2*range);
    let max_primes=0
    let product_of_coefficients = 0;
    for(let a=-1*range+1;a<range;a++){
        for(let b=-1*range;b<range+1;b++){
            let n=0;
            while(primes.includes(n*n+a*n+b)){
                n += 1;
            }
            if(n>max_primes){
                max_primes = n;
                product_of_coefficients = a*b;
            }
            
        }
    }
    console.log(product_of_coefficients);
    return product_of_coefficients;
  }

function sieve_of_eratosthenes(limit){
    const sieve = new Array(limit+1).fill(true);
    sieve[0] = sieve[1] = false;

    for(let i=2;i<=limit;i++){
        if(sieve[i]){
            for(let j=i+1;j<=limit;j++){
                if(j%i===0)
                    sieve[j] = false;
            }
        }
    }
    const arr=[];
    for(let i=0;i<=limit;i++){
        if(sieve[i]){
            arr.push(i);
        }
    }
    return arr;
}
  
quadraticPrimes(1000);