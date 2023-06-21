function gcd(x,y){
    if(y==0) return x;
    else if(x>y) return gcd(y,x%y);
    else return gcd(x,y%x);
}

function smallestMult(n) {
    let result = 1;
    for(let i=2;i<n+1;i++){
        result = parseInt((i*result)/gcd(result,i));
    }
    return result;
  }
  
  smallestMult(20);