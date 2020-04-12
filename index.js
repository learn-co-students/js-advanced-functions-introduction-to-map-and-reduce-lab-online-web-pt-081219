function mapToNegativize(sourceArray) {
    let map = []
    for (let i = 0; i < sourceArray.length; i++){
        map.push(-sourceArray[i]);
        
    }
    return map; 
    // return sourceArray.map((num) => -num)
}

function mapToNoChange(sourceArray) {
    let map = []
    for (let i = 0; i < sourceArray.length; i++){
        map.push(sourceArray[i]);
        
    }
    return map; 
    // return sourceArray.map((num) => num)
}

function mapToDouble(sourceArray) {
    let map = []
    for (let i = 0; i < sourceArray.length; i++){
        map.push(sourceArray[i]*2);
        
    }
    return map; 
    // return sourceArray.map((num) => num * 2)
}

function mapToSquare(sourceArray) {
    let map = []
    for (let i = 0; i < sourceArray.length; i++){
        map.push(sourceArray[i]**2);
        
    }
    return map; 
    // return sourceArray.map((num) => num**2)
}

function reduceToTotal(sourceArray, startingPoint=0) {

    let reduce = startingPoint;
    for (let i = 0; i < sourceArray.length; i++) {
        reduce += sourceArray[i];
    }
    return reduce;

}

function reduceToAllTrue(sourceArray) {

    let reduce = true
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) {
        return reduce = false
        }
    }
    return reduce
}

function reduceToAnyTrue(sourceArray) {
    let reduce = false;
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) {
            return true
        }
    }
    return reduce  

}
