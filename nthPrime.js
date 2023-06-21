function isPrime(n) {
  if (n == 2) return true;
  for (let i = 3; i < Math.sqrt(n) + 1; i += 2) {
    if (n % i == 0) return false;
  }
  return true;
}

function nthPrime(n) {
  if (n === 1) return 2;
  let count = 1;
  let n_prime = -1;
  for (let i = 3; count < n; i += 2) {
    if (isPrime(i)) {
      n_prime = i;
      count++;
    }
  }
  return n_prime;
}

nthPrime(10001);
