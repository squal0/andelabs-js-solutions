function findMissing(arr1, arr2){
  
  if((arr1.length) && (arr2.length) === 0){
    return 0;
  }
  
  if(arr1.same_values(arr2)){
    return 0;
  }
  
  for(num = 0; num < arr2.length; num++){
    if(isInArray(arr2[num], arr1) !== true) return arr2[num];
  }
  
}

Array.prototype.same_values = function(arr) {
    if (this.length != arr.length) return false;
    for (var i = 0; i < arr.length; i++) {
        if (this[i].same_values) { //To test values in nested arrays
            if (!this[i].same_values(arr[i])) return false;
        }
        else if (this[i] !== arr[i]) return false;
    }
    return true;
};

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}