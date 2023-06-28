function coinSums(n) {
  const coins = [1, 2, 5, 10, 20, 50, 100, 200];
  const ways = new Array(n + 1).fill(0);
  ways[0] = 1;

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= n; j++) {
      ways[j] += ways[j - coins[i]];
    }
  }
  return ways[n];
}

coinSums(6);
