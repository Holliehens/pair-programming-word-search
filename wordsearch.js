const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (let l of horizontalJoin) {
      if (l.includes(word)) 
        return true;
    }
    const verticalJoin = transpose(letters.map(ls => ls.join('')));
  
    for (let l of verticalJoin) {  
      if (l.includes(word)) 
        return true;
      
    }
  
    return false;
  };
  
  const transpose = function(matrix) {
    let newMatrix = [];
    for (let j = 0; j < matrix[0].length; j++) {
          
      let verticalWord = '';
  
      for (let i = 0; i < matrix.length; i++) {
        newMatrix.push(verticalWord += matrix[i][j]);
               
      }
    }
    return newMatrix;
  };
  
  
  module.exports = wordSearch;
      
  
  
  
  