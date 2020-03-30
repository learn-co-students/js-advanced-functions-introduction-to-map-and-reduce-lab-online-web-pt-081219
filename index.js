function mapToNegativize(array) {
  let newArr = []
  for (let x in array) {
    newArr.push(array[x] * -1)
  }
  return newArr
};

function mapToNoChange(array) {
  const newArr = [...array];
  return newArr
};

function mapToDouble(array) {
  let newArr = []
  for (let x in array) {
    newArr.push(array[x] * 2)
  }
  return newArr
};

function mapToSquare(array) {
  let newArr = []
  for (let x in array) {
   newArr.push(array[x] ** 2)
  }
  return newArr 
};

function reduceToTotal(array, intial = 0) {
  let result = intial;
  for (let x in array) {
    result += array[x]  
  }
  return result 
};

function reduceToAllTrue(array) {
  let result;
  for (let x in array) {
    (array[x] === false) ? result = false : result = true 
  }
  return result
};

function reduceToAnyTrue(array) {
  let result; 
  for (let x in array) {
    if (!!array[x] === true) {
      result = true
    } else {
      result = false 
    }
  }
  return result
};