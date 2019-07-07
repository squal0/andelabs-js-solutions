function reverseString(string){
  
  r_string = string.split("").reverse().join("");
  
  if (string === '')
    return null;
  else if (r_string === string)
    return true;
  else
    return r_string;
}