function simplifyFrac(denom, num) {
    let sDenom = denom, sNum = num;
    for (let i = 2; i < 10; i++) {
      if (sDenom % i === 0 && sNum % i === 0) {
        sDenom /= i;
        sNum /= i;
        i = 2;
      }
    }
    return [sDenom, sNum];
  }
function digitCancellingFractions() {
    let finaln=1,finald=1;
    for(let i=10;i<100;i++){
        for(let j=10;j<100;j++){
            const n = [Math.floor(j/10),j%10];
            const d = [Math.floor(i/10),i%10];
            const x = [];
            if(n[0]===d[0]){
                x.push(n[1]);
                x.push(d[1]);
            } else if(n[0]===d[1]){
                x.push(n[1]);
                x.push(d[0]);
            } else if(n[1]===d[0]){
                x.push(n[0]);
                x.push(d[1]);
            } else if(n[1]===d[1]){
                x.push(n[0]);
                x.push(d[0]);
            }
            if(x.length>0 && i != j && j<i){
                if(j%10===0) continue;
                if(j/i === x[0]/x[1]){
                    finaln *= x[0];
                    finald *= x[1];
                }
            }
        }
    }
    return simplifyFrac(finald,finaln)[0];
  }
  
digitCancellingFractions();