function fiboEvenSum(n) {
    let arr = [1,1];
    let sum = 0;
    let i=2;
    while(arr[i-1]<n){
        arr[i] = arr[i-1] + arr[i-2];
        if(arr[i]%2===0) sum+=arr[i];
        i++;
    }
    return sum;
  }

  console.log(fiboEvenSum(8));