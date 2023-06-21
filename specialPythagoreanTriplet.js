function specialPythagoreanTriplet(n) {
    let sumOfabc = n;
    let result=0;
    for(let a=0;a<n;a++){
        for(let b=a+1;b<n;b++){
            let c=n-a-b;
            if(a**2+b**2===c**2){
                result = a*b*c;
                break;
            }
        }
    }
    return result;
   }
   
   specialPythagoreanTriplet(1000);