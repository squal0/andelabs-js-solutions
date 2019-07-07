function sequences(numArray, fxn) {

  var compare = fxn(numArray[0], numArray[1]);

  for (var i = 2; i < numArray.length; i++) {

    if (fxn(numArray[i - 1], numArray[i]) !== compare) 
    	return false;
  }
  return true;
}

function aritGeo(numArray) {
  
  if (numArray.length === 0)
  	return 0;
  if (sequences(numArray, function(x, y) { return y - x; })) 
  	return 'Arithmetic';
  if (sequences(numArray, function(x, y) { return y / x; })) 
  	return 'Geometric';
  	
  return -1;        
}