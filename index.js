// Your code here
 function mapToNegativize(sourceArray) {
    let negativeNum = sourceArray.map(el => -el);
    return negativeNum
 }
 function mapToNoChange(arr){
     let originalNum = arr.map(el => el);
     return originalNum
 }
 function mapToDouble(doubleArray){
     let doubleNum = doubleArray.map(el => el * 2);
     return doubleNum
 }
 //-Math.abs(num)

function mapToSquare(array) {
    let squaredArray = array.map(element => element * element);
    return squaredArray
}
//const sumofArray = sourceArray.reduce(reduceToTotal,0);
 function reduceToTotal(sourceArray, startingPoint = 0){
     function addition(num1, num2){
     let sumofArray = num1 + num2;
     return sumofArray
     };
    return sourceArray.reduce(addition, startingPoint);
 }

function reduceToAllTrue(sourceArray){
    for (let i = 0; i < sourceArray.length; i++){
        if (!sourceArray[i]) return false 
    }
    return true  
}
function reduceToAnyTrue(sourceArray){
    for (let i = 0; i < sourceArray.length; i++){
        if (sourceArray[i]) return true  
    }
    return false   
} 
    

    // if(!!values){
    //     return true;}
    // if(!values){
    // return false;}
    // if(!!values){
    // return true;}
    
  //  }