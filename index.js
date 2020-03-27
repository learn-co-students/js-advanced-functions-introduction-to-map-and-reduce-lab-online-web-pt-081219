let mapFunction = (multiplier) => {
    return function(arr){
        if (typeof(arr[0]) === "number"){
        let output = arr.map(element => element * multiplier)
        return output
        } else {
            return arr
        }
    }
}

let mapToNegativize = mapFunction(-1)

let mapToNoChange = mapFunction(1)

let mapToDouble = mapFunction(2)

function mapToSquare(arr) {
    let square = arr.map(el => el * el)
    return square
}

// Reduce
let reducer = (accumulator, currentValue) => accumulator + currentValue
let reduceToTotal = function(arry, start=0) {
    return arry.reduce(reducer, start)
}

function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
  }
  

function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }
