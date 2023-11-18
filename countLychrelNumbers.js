function isPalindrome(x){
    const s = x.toString();
    const s1 = s.split('').reverse().join("");
    return s ===  s1;
}
function countLychrelNumbers(num) {
  const memo = {};
  let count = 0;
  let i = 0;
  while (i < num) {
    let c = i;
    for (let j = 0; j < 50; j++) {
      c = c + parseInt(c.toString().split('').reverse().join(""));
      if(c in memo){
        break;
      }
      else if (isPalindrome(c)) {
        memo[i] = true;
        count++;
        break;
      }
    }
    i++;
  }
  return num - count;
}

countLychrelNumbers(10000);
