function latticePaths(gridSize) {
    return gridTraveler(gridSize+1,gridSize+1);
  }
  
  const gridTraveler = (m,n,memo={}) => {
      const key = m + ',' + n;
      if(key in memo) return memo[key];
      if(m===0 || n===0){
          return 0;
      } else if(m===1 || n===1){
          return 1;
      }
      memo[key] = gridTraveler(m-1,n,memo) + gridTraveler(m,n-1,memo);
      return memo[key];
  }
  
  latticePaths(4);