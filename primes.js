function prime(num){
	var prime_nums = [];
	
	for (var i = 0; i <= num; i++){
		if(isPrime(i) === true){
			prime_nums.push(i);
		}
	}
	
	return prime_nums;
}

function isPrime(num){
	if (num < 2){
		return false;
	}
	else if( num === 2){
		return true;
	}
	
	for (var n = 2; n < num; n++){
		if(num % n === 0){
			return false;
		}
	}
	return true;
}