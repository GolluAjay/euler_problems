function intRightTriangles(n) {
    const maxPerimeter = n;
    const trianglesCount = new Array(maxPerimeter).fill(0);
    let max = 12;
  
    for (let i = 1; i < n; i++) {
      for (let j = i; j < n; j++) { // j starts from i to avoid redundant checks (k>i and k>j)
        const k = Math.sqrt(i * i + j * j);
        if (k === Math.floor(k) && i + j + k < maxPerimeter) { // Check if k is an integer and the perimeter is within limit
          const x = i + j + k;
          trianglesCount[x]++;
          if (trianglesCount[x] > trianglesCount[max]) {
            max = x;
          }
        }
      }
    }
  
    return max;
  }
  
  console.log(intRightTriangles(500));
  