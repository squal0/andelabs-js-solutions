function distinctList(arr=[]){
	var sorted_arr = arr.slice().sort();

	var results = [];
	for(var i = 0; i < arr.length - 1; i++){
		if(sorted_arr[i + 1] === sorted_arr[i]){
			results.push(sorted_arr[i]);
		}
	}
	return results;
}