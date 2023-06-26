function lexicographicPermutations(n) {
    let arr = new Array(10).fill(0).map((value,i)=>i);
    for(let i=0;i<n;i++){
      nextPermutation(arr,10);
    }
    return Number(arr.join(''));
}


function nextPermutation(arr,n){
  let x =-1;
  
  //step-1
  for(let i=n-2;i>=0;i--){
    if(arr[i]<arr[i+1]){
      x = i;
      break;
    }
  }

  if(x===-1)
    return arr.reverse();

  //step-2  
  for(let i=n-1;i>=0;i--){
    if(arr[i]>arr[x]){
      swap(i,x,arr);
      break;
    }
  }

  //step-3
  let left = x+1;
  let right = arr.length-1;

  while(left<=right){
    swap(left,right,arr);
    left++;
    right--;
  }
}

function swap(i,j,arr){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
  
lexicographicPermutations(699999);