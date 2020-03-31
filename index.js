// Your code here


function mapToNegativize (src) {
    let r = [ ]
    for (let i = 0; i < src.length; i++){
        r.push(-1 * src[i])
    }
    return r
}
// mapToNegativize returns an array with all values made negative


function mapToNoChange(src) {
let r = []
for (let i = 0; i < src.length; i++) {
    r.push(src[i])
}
return r
}
// mapToNoChange returns an array with the original values


function mapToDouble(src){
    let r = []
    for (let i = 0; i < src.length; i++) {
    r.push( 2 * src[i])
}
return r
}
// mapToDouble returns an array with the original values multiplied by 2


function mapToSquare(src) {
    let r = []
    for (let i = 0; i < src.length; i++) {
        r.push( src[i] * src[i])
    }
    return r 
}
// mapToSquare returns an array with the original values squared


function reduceToTotal(src, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < src.length; i++ ) {
      total = total + src[i]
    }
    return total
  }
  

  
  function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
  }
//   reduceToAllTrue returns false when any value is falsy
//   reduceToAllTrue returns true when all values are truthy


  
  function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }
//   reduceToAnyTrue returns true when a true value is present
//   reduceToAnyTrue returns false when no true value is present