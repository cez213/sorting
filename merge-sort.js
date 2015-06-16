function merge(left, right){
	var merged = [];
	while(left.length && right.length){
		var toPush = left[0] < right[0] ? left.shift() : right.shift();
		merged.push(toPush);
	}
	return merged.concat(left).concat(right);
}

function halve(arr){
	var middle = arr.length/2;
	var right = arr;
	var left = right.splice(0, middle);
	return [left, right];
}

function mergeSort(arr){
	if(arr.length <= 1) return arr;
	var halves = halve(arr);
	var left = mergeSort(halves[0]);
	var right = mergeSort(halves[1]);
	return merge(left, right);
}
