// Map Methods
// Remember, all map methods return a new Array

// mapToNegativize(sourceArray)
function mapToNegativize(arr) {
    const newArr = [];
    let n = 0;
    arr.forEach(element => {
        n = element * -1;
        newArr.push(n);
    });
    return newArr
}

// mapToNoChange(sourceArray)
function mapToNoChange(arr) {
    return arr;
}

// mapToDouble(sourceArray)
function mapToDouble(arr) {
    const newArr = [];
    let n = 0;
    arr.forEach(element => {
        n = element * 2;
        newArr.push(n);
    });
    return newArr
}

// mapToSquare(sourceArray)
function mapToSquare(arr) {
    const newArr = [];
    let n = 0;
    arr.forEach(element => {
        n = element * element;
        newArr.push(n);
    });
    return newArr
}

// Reduce Methods
// Remember, all reduce methods return a value

// reduceToTotal(sourceArray, startingPoint)
function reduceToTotal(arr, x) {
    if (x === undefined) {
        let n = 0;
        arr.forEach(element => {
            n += element;
        })
        return n;
    }
    else {
        arr.forEach(element => {
            x += element;
        })
        return x;
    }
}

// reduceToAllTrue(sourceArray)
function reduceToAllTrue(arr) {
    let x = true
    arr.forEach(element => {
        if(element === false) {
            x = false;
        }
    })
    return x;
}

// reduceToAnyTrue(sourceArray)
function reduceToAnyTrue(arr) {
    let x = false;
    arr.forEach(element => {
        if(element === true) {
            x = true;
        }
    })
    return x;
}