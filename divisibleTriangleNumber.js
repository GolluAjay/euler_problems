function divisibleTriangleNumber(n) {
    let count = 0;
    let naturalNumber = 1;
    let triangleNumber = 0;
    while(count<n){
      triangleNumber += naturalNumber;
      naturalNumber++;
      count = 0;
      for(let i=1;i<Math.sqrt(triangleNumber);i++){
        if(triangleNumber%i===0){
          count+=2;
        }
      }
      if(parseInt(Math.sqrt(triangleNumber))**2 === triangleNumber) count--;

      console.log(triangleNumber+" "+count);
    }
    
    return triangleNumber;
  }
  
  divisibleTriangleNumber(5);