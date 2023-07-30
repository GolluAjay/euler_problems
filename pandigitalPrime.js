function isPandigital(arr,k){
    for(let i=1;i<=k;i++){
        if(!arr.includes(i)) return false;
    }
    return true;
}

function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function isPrime(n){
    if(n===0 || n===1){
        return false;
    }
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0) return false;
    }
    return true;
}

function permuationsStorePrime(arr,i,result){
    if(i===arr.length){
        const value = [...arr].join('');
        if(isPrime(value)){
            result = result.push(value);
        } 
        return;
    }
    for(let j=i;j<arr.length;j++){
        swap(arr,i,j);
        permuationsStorePrime(arr,i+1,result);
        swap(arr,i,j);
    }
}


function pandigitalPrime(n) {
    const arr = Array(n).fill(0).map((value,index)=>index+1);
    const result = [];
    permuationsStorePrime(arr,0,result);
    return Math.max(...result);
  }
  
  console.log(pandigitalPrime(7));