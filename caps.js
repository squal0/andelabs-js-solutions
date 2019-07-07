function Caps(str){
  str = str.toString();
  this.str = str;
}

Caps.prototype.isCapped = function(){
  if(this.str === this.str.toUpperCase()){
    return "UPPERCASED";
  }
  else if(this.str === this.str.toLowerCase()){
    return "LOWERCASED";
  }
  else{
    return "SOME";
  }
};

Caps.prototype.upper = function(){
  var new_str = '';
  for( var index = 0; index <= this.str.length; index++){
    if(this.str.charAt(index) === this.str.charAt(index).toUpperCase()){
      new_str += this.str.charAt(index);
    }
  }
  return new_str.length;
};

Caps.prototype.lower = function(){
  var new_str = '';
  for( var index = 0; index <= this.str.length; index++){
    if(this.str.charAt(index) === this.str.charAt(index).toLowerCase()){
      new_str += this.str.charAt(index);
    }
  }
  return new_str.length;
};