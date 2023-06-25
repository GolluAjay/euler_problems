function namesScores(arr) {
    let sum=0;
    arr = [...arr].sort();
    for(let i=0;i<arr.length;i++){
        let score = 0;
        for(let j=0;j<arr[i].length;j++){
            score += (arr[i].charCodeAt(j)-64);
        }
        sum += score*(i+1);
    }
  return sum;
}

// Only change code above this line
const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];
const test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'];

namesScores(test1);