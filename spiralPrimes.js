function isPrime(n) {
  if (n === 0 || n === 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function spiralPrimes(percent) {
  const memo = {};
  let x = [];
  let layer = 3;
  while (true) {
    d = [];
    const a = layer**2;
    const b = layer - 1;
    d.push(a);
    d.push(a - b);
    d.push(a - (2 * b));
    d.push(a - (3 * b));
    x = [
      ...d.filter((val) => {
        if (val != 0) {
          if (val in memo) return memo[val];
          memo[val] = isPrime(val);
          return memo[val];
        }
        val != 0 && isPrime(val);
      }),
      ...x,
    ];
    
    if (Math.ceil((x.length / (layer * 2 - 1)) * 100) <= percent) {
      return layer;
    }
    layer += 2;
  }
  return true;
}
spiralPrimes(10);

