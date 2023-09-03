const { performance } = require('perf_hooks');
// ALK test
function isPrime(n) {
  if (n === 0 && n === 1) return false;
  if (n === 2 || n === 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  let i = 5;
  let w = 2;
  while (i * i < n) {
    if (n % i === 0) {
      return false;
    }
    i += w;
    w = 6 - w;
  }
  return true;
}

function generateWildCards(s, index, result) {
  for (let i = index; i < s.length; i++) {
    let wc = s.slice(0, i) + "#" + s.slice(i + 1);
    result.add(wc);
    generateWildCards(wc, i + 1, result);
  }
}

function primeDigitReplacements(n) {
  let i = 11;
  let arr = new Set();
  while (true) {
    if (i % 5 === 0) {
      i += 2;
      continue;
    }
    const result = new Set();
    generateWildCards(i.toString(), 0, result)
    for (let s of result) {
      if(arr.has(s)) continue;
      if (s.split("")[s.length - 1] === "#") continue;
      let x = undefined;
      arr.add(s);
      let count = 0;
      for (let j = 0; j <= 9; j++) {
        if (n - count > 10 - j) break;
        if ((j === 0 && s.split("")[0] === "#")) continue;
        let y = parseInt(s.replace(/#/g, j));
        if (isPrime(y)) {
          if(!x) x = y; 
          count++;
        }
        if (count === n) return x;
      }
    }
    i += 2;
  }
}


var startTime = performance.now()

console.log(primeDigitReplacements(8));  // <---- measured code goes between startTime and endTime
    
var endTime = performance.now()

console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)
