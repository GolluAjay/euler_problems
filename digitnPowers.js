function digitnPowers(n) {
  let max = 9 ** (n + 1);
  let min = 2**n;
  let result = 0;
  for (let i = 2; i <= 2*max; i++) {
    let sum = 0;
    let temp = i;
    while (temp != 0) {
      sum += (temp % 10)**n;
      temp = Math.floor(temp / 10);
    }
    if (sum === i) {
      result += i;
    }
  }
  return result;
}

digitnPowers(5);
