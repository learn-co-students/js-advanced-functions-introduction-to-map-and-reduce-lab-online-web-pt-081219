// Your code here

function negativize(num) {
    return num * -1
}

function mapToNegativize(array){
    let newArray = []
    for(let i = 0; i < array.length; i++){
        newArray.push(negativize(array[i]))
    }

    return newArray
}

function mapToNoChange(array){
    return array
}

function mapToDouble(array){
    let newArray = []
    for(let i = 0; i < array.length; i++){
        newArray.push(array[i] * 2)
    }

    return newArray
}

function mapToSquare(array){
    let newArray = []
    for(let i = 0; i < array.length; i++){
        newArray.push(array[i] ** 2)
    }

    return newArray
}

function reduceToTotal(array, startingPoint = 0){
    let total = startingPoint
    for(let i = 0; i < array.length; i++){
        total = total + array[i]
    }
    return total
}

function reduceToAllTrue(array){
    let result 
    for(let i = 0; i < array.length; i++){
        if (!!array[i]){
            result = true
        } else {
            result = false 
            break
        }
    }
    return result
}

function reduceToAnyTrue(array){
    let result 
    for(let i = 0; i < array.length; i++){
        if (!!array[i]){
            result = true
            break
        } else {
            result = false
        }
    }
    return result
}


