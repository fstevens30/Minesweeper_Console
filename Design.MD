#An explanation of the code

# Design

- Create a skeleton function that takes an argument of an array.

```JavaScript
function minesweeper(input) {}
```

- Create a new array to modify throughout the code.

```JavaScript
const output = [];
```

- Create for loops to iterate through the original and .push to the output.

```JavaScript
for(let x = 0; x < input.length; x++) {
  output.push([]);
  for(let y = 0; y < input[0].length; y++){
    output[x][y] = 0;
  }
```

- Create if statements to update the array depending on bomb locations and increment the current cell depending on how many bombs it is touching. (Example is for if the current cell is above a bomb, all if statements are similar to this just with different co-ordinates to find the cell in question).

```JavaScript
if(input[x-1] ) {
  if(input[x-1][y]){
    output[x][y]++;
  }
}
```

- Around the if statements to determine bomb locations we make another if statement to convert the original arrays from 1 to "x"

```JavaScript
if(input[x][y] !== 1){
  //The Previous code for bomb locations will sit here
}else output[x][y] = "x"
```

- Create a return statement to return the updated array (Do this inside the function).

```JavaScript
return output;
```

- Using console.log() to input our original array and get an output.
  
```JavaScript
console.log(minesweeper([[0, 1, 0, 0],[0, 0, 1, 0],[0, 1, 0, 1],[1, 1, 0, 0],]));
//Output ->     [ [1, 'x', 2, 1],[1, 3, 'x', 2],[3, 'x', 4, 'x'],['x', 'x', 2, 1],]
```
