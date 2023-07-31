function isPentagonal(num){
    let x = (Math.sqrt(24*num+1)+1)/6;
    return x === parseInt(x);
}

function pentagonNumbers() {
    const pentagonNumbers= Array(10000).fill(0);
    for(let i=1;i<10000;i++){
        let p_i = pentagonNumbers[i] = (i*(3*i-1))/2;
        for(let j=i-1;j>0;j--){
           let p_j = pentagonNumbers[j];
           if (isPentagonal(p_i - p_j) && isPentagonal(p_i + p_j)) return p_i - p_j;   
        }
    }
    return;
  }
  
  pentagonNumbers();