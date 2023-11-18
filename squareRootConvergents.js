function fun(i, n = BigInt(2), d = BigInt(1)) {
  if (i == 0) return [n, d];
  return fun(i - 1, BigInt(n * 2n + d * 1n), n);
}

function squareRootConvergents(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    const f = fun(i);
    const n = f[0] + f[1];
    const d = f[0];
    if (n.toString().split("").length > d.toString().split("").length) {
      count++;
    }
  }
  return count;
}

squareRootConvergents(100);
