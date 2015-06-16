
describe('bubbleSort', function(){
	it('handles an empty array', function(){
		expect(bubbleSort([])).toEqual([]);
	});

	it('should sort an array with 2 values', function(){
		var arr = [12, 5];
		expect(bubbleSort(arr)).toEqual([5, 12]);
	});

	it('should sort an array with 6 values', function(){
		var arr = [5, 12, 23, 2, 10, 7];
		expect(bubbleSort(arr)).toEqual([2, 5, 7, 10, 12, 23]);
	})
	it('swaps 2 times for the given array', function(){
		spyOn(window, 'swap').andCallThrough();
		bubbleSort([3, 1, 2]);
		expect(swap.callCount).toEqual(2);
	})

	it('minimizes the number of passes over the array', function(){
		spyOn(window, 'atEachIndex').andCallThrough();
		bubbleSort([4,5,2,3,1,6]);
		expect(atEachIndex.callCount).toEqual(15);
	})

});


/*describe('Merge Sorting suite', function(){

	describe('Merge', function(){

		it('is able to merge two sorted arrays', function(){
			expect(merge([1,3,5], [2,4,6])).toEqual([1,2,3,4,5,6]);
		});
		
	});

});*/

/*describe('Split Array function', function(){
	it('is able to split an array into two halves', function(){
		var arr = [5, 12, 23, 2, 10, 7];
		expect(split(arr)).toEqual([[5, 12, 23], [2, 10, 7]]);
	})
})*/

/*//Example of spyOn test spec
//If you  do not want to write to file each time
//you check how many times the function is called,
//you don't do call through, so it doesn't write to the file
function spyOn(obj, methodName){
	//not call through
	var spy = function(){
		spy.callCount++;
	};
	obj[methodName] = spy;

	//call through
	var oldFn = obj[methodName];
	var spy = function(){
		spy.callCount++;
		oldFn();
	};
	obj[methodName] = spy;
}*/