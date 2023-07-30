function isPandigital(n,k){
    for(let i=1;i<=k;i++){
        if(!n.includes(i)) return false;
    }
    return true;
}

function findDuplicates(temp) {
    let arr1 = temp.split("");
    for (let x = 0; x < arr1.length; x++) {
      for (let y = 0; y < arr1.length; y++) {
        if (x != y && arr1[x] === arr1[y]) {
          return false;
        }
      }
    }
    return true;
  }
  function pandigitalMultiples(k) {
    let max = 10 ** (k - 1) * (k + 1);
    let largest = 0;
    let i = 1;
    while (largest < max) {
      let s = "";
      for (let j = 1; j <= k; j++) {
        let arr = s.split("");
        let flag = true;
        if (!findDuplicates((i * j).toString())) {
          break;
        }
        if (arr.length != 0) {
          for (let x of (i*j).toString().split('')) {
            if (arr.includes(x) || x === "0") {
              flag = false;
              break;
            }
          }
          if (!flag) break;
        }
        s += i * j;
      }
      if (parseInt(s) > largest && s.split("").length === k && isPandigital(s,k)) {
          largest = parseInt(s);
      }
      if(i>10**(Math.ceil(k/2))) break;
      i++;
    }
    return largest;
  }
  
  console.log(pandigitalMultiples(7));
  