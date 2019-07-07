function factorialDivision(num1, num2){
  num1 = Number(num1);
  num2 = Number(num2);
  return factorial(num1) / factorial(num2);
}

function factorial(num){
  if(num === 0 || num === 1){
    return 1;
  }
  return factorial(num - 1) * num;
}
