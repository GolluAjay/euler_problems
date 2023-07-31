const DIVISORS = [2, 3, 5, 7, 11, 13, 17];
function testDivisibility(digits, n) {
  for (let i = 0; i < n - 2; i++) {
    let threeDigits = 100 * digits[i + 1] + 10 * digits[i + 2] + digits[i + 3];
    if (threeDigits % DIVISORS[i] !== 0)
      return false;
  }
  return true;
}
function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function factorial(num) {
    return num <= 1 ? 1 : num * factorial(num - 1);
  }
function lexicalPermutation(arr,n){
    let flag = false;
    for(let i=n-1;i>0;i--){
        if(arr[i-1]<arr[i]){
            for(let j=n-1;j>i-1;j--){
                if(arr[j]>arr[i-1]){
                    swap(arr,i-1,j);
                    const subArray = arr.slice(i, n);
                    subArray.reverse();
                    for (let a = i, b = 0; a <= n-1; a++, b++) {
                        arr[a] = subArray[b];
                      }
                    flag = true;
                    return;
                }
            }
        }
    }
    arr = Array(n+1).fill(0).map((_,i)=>i);
    return;
}

function substringDivisibility(n) {
    const arr = Array(n+1).fill(0).map((_,i)=>i);
    const numPermutations = factorial(n + 1);
    let sum=0;
    for(let i=0;i<numPermutations;i++){
        if (testDivisibility(arr, n))
            sum += parseInt(arr.join(""));
        lexicalPermutation(arr,n+1);
    }
    return sum;
  }
  
  console.log(typeof(substringDivisibility(8)));