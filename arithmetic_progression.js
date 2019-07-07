function aritGeo(numArray){
	if (numArray.length === 0)
		return 0;

	var diff = numArray[1] - numArray[0];
	var ratio = numArray[1] / numArray[0];
	var aSeq = true;
	var gSeq = true;
	var index = 2;
	var i;

	while(index < numArray.length -1){
		if( (numArray[index + 1] - numArray[index]) !== diff)
			aSeq = false;
		index += 1;
	}
	for (var i = 0; i < numArray.length - 2; i++) {
		if((numArray[i] * numArray[i + 2]) !== numArray[i + 1] ^ 2)
			gSeq = false;
	}
	for (var i = 0; i < numArray.length - 1; i++) {
		if((numArray[i] === 0) && numArray[i + 1] !== 0)
			gSeq = false;
	}

	if (aSeq === true)
		return "Arithmetic";
	else if ( gSeq == true)
		return "Geometric";
	else
		return -1;
}
