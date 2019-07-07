function PrimeChecker(number){
  number = Number(number);
  this.number = number;
}
PrimeChecker.prototype.isPrime = function(){
  if (this.number < 2){
    return false;
  }
  else if (this.number === 2){
    return true;
  }
  for (var num = 2; num < this.number; num++){
    if (this.number % num === 0)
      return false;
  }
  return true;
};