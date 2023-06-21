function sumSquareDifference(n) {
    const sum_of_squares = parseInt((n*(n+1)*(2*n+1))/6);
    const square_of_sum = parseInt((n*(n+1))/2)**2;
    return square_of_sum - sum_of_squares;
}
  
  sumSquareDifference(100);