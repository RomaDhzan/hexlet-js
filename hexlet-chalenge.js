import _, { result } from 'lodash';
const buildSnailPath = (matrix) =>{
let result = [];
const len = matrix.length;
const lenColumn = matrix[0].length;

return _.eachRight(matrix);
};
console.log(buildSnailPath([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ]));
  for (let i = 0; i < lenColumn; i += 1){
    switch(i){
    case 0: result.push(_.initial(matrix[i]))
    continue;
    case len -1: result.push(_.reverse(matrix[len-1]))
    break; 
}
    for ( let j = 0; j < len; j += 1){
      result.push(matrix[j].pop())
      
    }
}
