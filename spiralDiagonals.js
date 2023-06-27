function spiralDiagonals(n) {
    let sum = 1;
    if(n===1)
        return 1;
    for(let i=3;i<=n;i+=2){
        sum += 4*(i**2)-6*(i-1);
    }
    return sum;
  }
  
  spiralDiagonals(303);