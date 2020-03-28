function mapToNegativize(sourceArray) {
    let newArray = [];

    for(const el in sourceArray){
        newArray.push(sourceArray[el] * -1)
    }

    return newArray;
}

function mapToNoChange(sourceArray) {
    let newArray = [];

    for(const el in sourceArray){
        newArray.push(sourceArray[el])
    }

    return newArray;
}

function mapToDouble(sourceArray) {
    let newArray = [];

    for(const el in sourceArray){
        newArray.push(sourceArray[el] * 2)
    }

    return newArray;
}

function mapToSquare(sourceArray) {
    let newArray = [];

    for(const el in sourceArray){
        newArray.push(sourceArray[el] ** 2)
    }

    return newArray;
}

function reduceToTotal(sourceArray, startingPoint = 0){
    let total = startingPoint;

    for(const el in sourceArray){
        total+= sourceArray[el]
    }

    return total;
}

function reduceToAllTrue(sourceArray){
    let result = true;

    for(const el in sourceArray){
        if (!sourceArray[el]){
            result = false;
        }
    }

    return result;
}

function reduceToAnyTrue(sourceArray){
    let result = false;

    for(const el in sourceArray){
        if (!!sourceArray[el]){
            result = true;
        }
    }

    return result;
}