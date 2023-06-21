function is_palindrome(n){
    const s = "" + n;
    if(s===s.split('').reverse().join('')) return true;
    return false;
}

function largestPalindromeProduct(n) {
    let max = Math.pow(10,n) - 1;
    let min = Math.pow(10,n-1);
    let largest_palindrome = 0;
    for(let i=max;i>=min;i--){
        for(let j=i;j>=min;j--){
            let product = i*j;
            if(is_palindrome(product) && product > largest_palindrome) largest_palindrome = product;
        }
    }
    return largest_palindrome;
  }
  
  console.log(largestPalindromeProduct(3));