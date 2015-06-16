function bubbleSort(arr){
	var end = arr.length - 1;
	if(arr.length < 2){
		return arr;
	}
	var hasSwappedThisRound = true;
	while(hasSwappedThisRound){
		hasSwappedThisRound = false;
		for(var i = 0; i < end; i++){
			var didSwap = atEachIndex(arr, i);
			if(!hasSwappedThisRound){
				hasSwappedThisRound = didSwap;
			}
		}
		end--;
	}
	return arr;
}

//for counting the number of swaps
function atEachIndex(arr, i){
	if(arr[i] > arr[i+1]){
		swap(arr, i, i+1);
		return true;
	}
	return false;
}

function swap(arr, i, j){
	var prevVal = arr[i];
	arr[i] = arr[j];
	arr[j] = prevVal;
	return arr;
}

