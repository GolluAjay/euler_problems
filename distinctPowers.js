function distinctPowers(n) {
    let total_distinct_terms = [];
    for(let a=2;a<=n;a++){
      for(let b=2;b<=n;b++){
        if(!total_distinct_terms.includes(a**b)){
          total_distinct_terms.push(a**b);
        }
      }
    }
    return total_distinct_terms.length;
  }
  
  distinctPowers(30);