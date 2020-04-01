// Your code here

function mapToNegativize(sourceArray){
    return sourceArray.map(x => x *-1);
}

function mapToNoChange(sourceArray){
    return sourceArray;
}

function mapToDouble(sourceArray){
    return sourceArray.map(x => x*2);
}

function mapToSquare(sourceArray){
    return sourceArray.map(x => x**2);
}

function reduceToTotal(sourceArray, startingPoint = 0){
    return sourceArray.reduce(sumofArray, startingPoint);
}

function reduceToAllTrue(sourceArray){
    
    return sourceArray.every(Boolean);

}

function reduceToAnyTrue(sourceArray){
    return sourceArray.some(Boolean);
}

function sumofArray(sum, num) { 
    return sum + num; 
}