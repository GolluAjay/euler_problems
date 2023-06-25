function maximumPathSumI(triangle) {
    const copyTriangle = triangle.map(row => [...row]);
    for(let i=triangle.length-2;i>=0;i--){
      for(let j=0;j<copyTriangle[i].length;j++){
        const maxBelow = Math.max(copyTriangle[i+1][j],copyTriangle[i+1][j+1]);
        copyTriangle[i][j] += maxBelow;
      }
    }
    return copyTriangle[0][0];
  }
  
  const testTriangle = [[3, 0, 0, 0],
                        [7, 4, 0, 0],
                        [2, 4, 6, 0],
                        [8, 5, 9, 3]];
  
  maximumPathSumI(testTriangle);