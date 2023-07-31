function isTriangular(n) {
    let x = (-1 + Math.sqrt(1+8*n))/2;
    return x === parseInt(x);
  }
  function isPentagonal(n) {
    let x = (1 + Math.sqrt(1+24*n))/6;
    return x === parseInt(x);
  }
  function isHexagonal(n) {
    let x = (1 + Math.sqrt(1+8*n))/4;
    return x === parseInt(x);
  }
  function triPentaHexa(n) {
    for(let i=1;i<100000;i++){
      let value = i*(2*i-1);
      if(isTriangular(value) && isHexagonal(value) && isPentagonal(value)){
        if(value>n){
            return value;
        }
      }
    }
    return true;
  }
  
triPentaHexa(40756);