function longestCollatzSequence(limit) {
    let max = 0;
    let res = -1;
    const memo = {};
    for(let i=1;i<limit;i++){
        let c=i;
        let count=0;
        while(c!=1){
            if(c in memo){
                count += memo[c];
                break;
            }
            else if(c%2==0){
                c = parseInt(c/2);
            } else {
                c = 3*c + 1;
            }
            count++;
        }
        if(max<count){
            max=count;
            res=i;
        }
        memo[i] = count;
    }
    console.log(res);
    return res;
  }
  
  longestCollatzSequence(1000000);