function permutedMultiples(n) {
  let i = 1;
  let flag = false;
  while (true) {
    let temp = n;
    const value1 = i.toString().split("").sort().join("");
    while (temp > 1) {
      const value2 = (i * temp).toString().split("").sort().join("");
      if (value1 === value2) {
        temp--;
        flag = true;
        continue;
      } else {
        flag = false;
        break;
      }
    }
    if(flag) return i;
    i++;
  }
}

console.log(permutedMultiples(6));
