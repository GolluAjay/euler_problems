function concate(a,b,c){
    return `${a}${b}${c}`;
}

function isPandigital(s,n){
    for(let i=1;i<=n;i++){
        if(s.includes(i))
            continue;
        return false;
    }
    return true;
}

function pandigitalProducts(n) {
    const limit = 10 ** Math.floor(n/2) -1;
    const pandigitalNums = [];
    let sum = 0;
    for(let i=2;i<limit;i++){
        for(let j=2;j<limit;j++){
            const product = ""+i*j;
            const value = concate(i,j,product);
            if(value.length>n){
                break;
            } else {
                if(isPandigital(value,n) && !pandigitalNums.includes(product)){
                    pandigitalNums.push(product);
                    sum += parseInt(product);
                }
            }
        }
    }
    return sum;
  }
  
  pandigitalProducts(9);