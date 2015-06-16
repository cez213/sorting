describe('Merge Sorting suite', function(){

	describe('Merge', function(){
		it('is able to merge two sorted arrays', function(){
			expect(merge([1,3,5], [2,4,6])).toEqual([1,2,3,4,5,6]);
		});

	});

	describe('halve', function(){
		it('halves an array', function(){
			expect(halve([1, 2, 3, 4])).toEqual([[1,2], [3,4]]);
		});
	});

	describe('mergeSort', function(){
		it('returns the array if length <= 1', function(){
			expect(mergeSort([])).toEqual([]);
			expect(mergeSort([2])).toEqual([2]);
		})

		it('sorts multiple elements', function(){
			expect(mergeSort([3,5,1,6,2,4])).toEqual([1,2,3,4,5,6]);
		})
	})

});