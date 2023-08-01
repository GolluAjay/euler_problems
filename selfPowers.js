function selfPowerMask(num,mask){
    let lastDigits = 1;
    for(let i=0;i<num;i++){
        lastDigits = (lastDigits*num)%mask;
    }
    return lastDigits;
}

function selfPowers(power, lastDigits) {
    const mask = 10**lastDigits;
    let sum = 0;
    for(let i=1;i<=power;i++){
        sum = (sum + selfPowerMask(i,mask)) % mask;
    }
    console.log(sum);
    return sum;
  }
  
  selfPowers(3, 1);