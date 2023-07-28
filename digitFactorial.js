function digitFactorial() {
    var sum = 0;
    var numbers = [];
    const f=[1,1];
    for(let i=2;i<10;i++){
        f[i] = i*f[i-1];
    }
    for(let i=10;i<100000;i++){
        let temp = i.toString();
        let innerSum = 0;
        for(let x of temp)
            innerSum += f[parseInt(x)];
        if(innerSum===i){
            numbers.push(i);
            sum += i;
        }
    }
    return { sum, numbers };
  }
  
  digitFactorial();