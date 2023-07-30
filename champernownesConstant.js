function champernownesConstant(n) {
    const x = Math.log10(n);
    const y ={'0':0};
    let product = 1;
    for(let i=1;i<=x;i++){
        y[i] = i*(Math.pow(10,i)-Math.pow(10,i-1)) + y[i-1];
    }
    for(let i=1;i<=x;i++){
        if(Math.pow(10,i)<y[i]){
            product *= (Math.pow(10,i-1)-1 + Math.floor((Math.pow(10,i)-y[i-1])/(i))).toString().split('')[((Math.pow(10,i)-y[i-1])%(i))-1];
        }else {
            product *= ((Math.pow(10,i)-1 + Math.ceil((Math.pow(10,i)-y[i])/(i+1)))).toString().split('')[((Math.pow(10,i)-y[i])%(i+1))-1];
        }
    }
    return product;
  }

  champernownesConstant(1000);