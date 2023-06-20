function multiplesOf3and5(number) {
  let n_3 = parseInt((number-1)/3);
  let n_5 = parseInt((number-1)/5);
  let n_15 = parseInt((number-1)/15);

  //Sn = n*a + (n*(n-1)*d)/2

  sum_3 = (n_3)*3+((n_3)*(n_3-1)*3)/2;
  sum_5 = (n_5)*5+((n_5)*(n_5-1)*5)/2;
  sum_15 = (n_15)*15+((n_15)*(n_15-1)*15)/2;

  return sum_3 + sum_5 - sum_15;
}

multiplesOf3and5(8456);
