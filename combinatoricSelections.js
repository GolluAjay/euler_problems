function C(n,r,fact){
    return parseInt(fact[n]/(BigInt(fact[r])*BigInt(fact[n-r])));
}

function combinatoricSelections(limit) {
    let count = 0;
    const factArray = [];
    factArray[0] = factArray[1] = 1;
    for(let i=2;i<101;i++){
        factArray[i] = BigInt(i) * BigInt(factArray[i-1]);
    }

    for(let i=1;i<101;i++){
        for(let j=0;j<i-1;j++){
          
            if(C(i,j,factArray)>limit) {
                count++;
            }
        }
        console.log(count);
    }
    
    return count;
}

combinatoricSelections(1000000);