function StringSplosion(text){
  this.text = text;
}
StringSplosion.prototype.manipulate = function(){
  word = [];
  for (var s = 0; s <= (this.text).length; s++){
    var s1 = this.text.substr(0, s);
    word.push(s1);
  }
  
  return word.join('');
};

function StringSplosion(text){
  this.text = text;
  this.manipulate = manipulate;
}

function manipulate(){
	word = [];
	for (var s = 0; s <= (this.text).length; s++){
    	var s1 = this.text.substr(0, s);
    	word.push(s1);
  }

  
	return word.join('');
}