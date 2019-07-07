function caffeineBuzz(num){
  var script = "Script";
  var java = "Java";
  var coffee = "Coffee";
  var miss = "mocha_missing!";
  
  if(isEven(num) &&((num % 3 === 0)) &&(num % 4 === 0)){
    return coffee.concat(script);
  }
  else if((num % 3 === 0) && (num % 4 === 0)){
    return coffee;
  }
  else if(isEven(num) && (num % 3 === 0)){
    return java.concat(script);
  }
  else if(num % 3 === 0){
    return java;
  }
  else{
    return miss;
  }
}

function isEven(n){
  if(n % 2 === 0){
    return true;
  }
  return false;
}