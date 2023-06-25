function convertToWord(n){
    const oneToNineteen = [
        "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
        "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
        "seventeen", "eighteen", "nineteen"
      ];
    const tens = [
        "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
      ];
    let words = [];
    if(n==0) return "";
    else if(n<20) {
        return oneToNineteen[n];
    }
    else if(n<100) {
        return tens[Math.floor(n/10)]+" "+oneToNineteen[n%10];
    }
    else if(n<1000) {
        return oneToNineteen[Math.floor(n/100)]+" hundred "+(n%100!==0 ? "and " + convertToWord(n%100) : "");
    } else if(n==1000){
        return "one thousand";
    }
}

function numberLetterCounts(limit) {
    let sum = 0;
    for(let i=0;i<=limit;i++){
        const word = convertToWord(i);
        console.log(word);
        sum += word.replace(/[^a-z]/g,"").length;

    }
    return sum;
  }
  
  numberLetterCounts(1000);