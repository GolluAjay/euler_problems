function isPalindrom(s){
    let s1 = s.split('').reduce((curr,next)=> next + curr,"");
    if(s === s1) return true;
}

function doubleBasePalindromes(n) {
    let sum = 0;
    for(let i=0;i<=n;i++){
        let x = i.toString(2);
        let temp = i.toString();
        if(isPalindrom(x) && isPalindrom(temp)) sum+=i;
    }
    return sum;
  }
  
 console.log(doubleBasePalindromes(1000000));