// Your code here
const mapToNegativize = function(array) {
    let newArray = [] 
        for(const el of array) {
            newArray.push(el * -1)
        }
    return newArray
}; 

const mapToNoChange = function(array) {
    return array 
}; 

const mapToDouble = function(array) {
    let newArray = []
        for(const el of array) {
            newArray.push(el *2)
        }
    return newArray
}; 

const mapToSquare = function(array) {
    let newArray = [] 
        for(const el of array) {
            newArray.push(el ** 2)
        }
    return newArray
}; 

const reduceToTotal = function(array, startingPoint = 0) {
    let total = startingPoint
        for(const el of array) {
            total += el
        }
    return total 
}; 

const reduceToAllTrue = function(array){
    for(const el of array) {
        if(!el) {return false}
    }
    return true 
}; 

const reduceToAnyTrue = function(array) {
    for(const el of array) {
        if (!!el) {return true}
    }
    return false 
}