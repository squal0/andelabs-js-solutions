function stringLength(string){
  var len = [];
  var counter = 0;
  
  if (typeof string === "string"){
    len.push(string.length);
    return len;
  }
  if (Array.isArray(string)){
    for (var index = 0; index < string.length; index++){
      len.push((string[index]).length);
      index += counter;
      
    }
    return len;
  }
  if(typeof string === "object") {
    for (var key in string){
        if (string.hasOwnProperty(key)){
          len.push(string[key].length);
        }
      }
    return len;
  }
  }