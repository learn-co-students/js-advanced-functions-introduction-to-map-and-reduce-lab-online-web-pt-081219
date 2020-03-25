// Your code here

//Map
function mapToNegativize(array) {
    let map = []
    for (let i = 0; i < array.length; i++) {
        map.push(array[i] * -1)
    }
    return map
};

function mapToNoChange(array) {
    let map = []
    for (let i = 0; i < array.length; i++) {
        map.push(array[i])
    }
    return map
};

function mapToDouble(array) {
    let map = []
    for (let i = 0; i < array.length; i++) {
        map.push(array[i] * 2)
    }
    return map
};

function mapToSquare(array) {
    let map = []
    for (let i = 0; i < array.length; i++) {
        map.push(array[i] ** 2)
    }
    return map
};

//Reduce
function reduceToTotal(array, start = 0) {
    let reduce = start
    for (let i = 0; i < array.length; i++) {
        reduce = reduce + array[i]
    }
    return reduce
};

function reduceToAllTrue(array) {
    let reduce = true
    for (let i = 0; i < array.length; i++) {
        if (!array[i]) {
        return reduce = false
        }
    }
    return reduce
};

function reduceToAnyTrue(array) {
    let reduce = false
    for (let i = 0; i < array.length; i++) {
        if (array[i]) {
            return reduce = true
        }
    }
    return reduce
};