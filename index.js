// Your code here

//MAP
function mapToNegativize(sourceArray) {
    let negativeArray = []
    sourceArray.forEach(element => negativeArray.push(element * -1));
    return negativeArray;
}

function mapToNoChange(sourceArray) {
    let originalArray = []
    sourceArray.forEach(element => originalArray.push(element));
    return originalArray;
}

function mapToDouble(sourceArray) {
    let doubleArray = []
    sourceArray.forEach(element => doubleArray.push(element * 2));
    return doubleArray;
}

function mapToSquare(sourceArray) {
    let squareArray = []
    sourceArray.forEach(element => squareArray.push(element*element));
    return squareArray;
}

//REDUCE
function reduceToTotal(sourceArray, startingPoint = 0) {
    sourceArray.forEach(element => startingPoint += element);
    return startingPoint;
}

function reduceToAllTrue(sourceArray) {
    let result = true
    sourceArray.forEach(element => {
        result = result && element;
    });
    return !!result;
}

function reduceToAnyTrue(sourceArray) {
    let result = false
    sourceArray.forEach(element => {
        result = result || element;
    });
    return !!result;
}