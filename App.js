function minesweeper(input) {
  const output = [];
  for(let x = 0; x < input.length; x++) {
    output.push([]);
    for(let y = 0; y < input[0].length; y++){
      output[x][y] = 0;
      if (input[x][y] !== 1) {
      //Above
      if(input[x-1] ) {
        if(input[x-1][y]){
          output[x][y]++;
        }
      }
      //Below
      if(input[x+1] ) {
        if(input[x+1][y]){
          output[x][y]++;
        }
      }
      // Left
      if(input[x][y-1] ) {
        if(input[x][y-1]){
          output[x][y]++;
        }
      }      
      // Right
      if(input[x][y+1] ) {
        if(input[x][y+1]){
          output[x][y]++;
        }
       }
       //Top Left
      if(input[x-1] ) {
        if(input[x-1][y-1]){
          output[x][y]++;
        }
      }
      //Top Right
      if(input[x-1] ) {
        if(input[x-1][y+1]){
          output[x][y]++;
        }
      }
      //Bottom Left
      if(input[x+1] ) {
        if(input[x+1][y-1]){
          output[x][y]++;
        }
      }
      //Bottom Right
      if(input[x+1]) {
        if(input[x+1][y+1]){
          output[x][y]++;
        }
      }
    }else output[x][y] = "x"
    }
}
  return output;
}
console.log(minesweeper([[0, 1, 0, 0],[0, 0, 1, 0],[0, 1, 0, 1],[1, 1, 0, 0],]))
