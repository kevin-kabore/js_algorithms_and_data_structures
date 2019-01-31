/*

	Quick Sort:
	- Time complexity:
		Worst: O(n^2)
			If we take min element every time
			or if array is always sorted
			pick random item every time to mitigate
		Average: O(nlogn)
		Best: Omega(nlogn)
			O(logn) decompositions
			O(n) comparisons
	
	Quicksort steps
	- Select one element, the pivot point. Use pivot or partition function
	- Find the index where pivot should end up
	- Once pivot positioned, quick sort can be applied to either side

	Quicksort pseudo 
	- Takes arr, left pointer defaulted (leftIdx = 0), and right pointer defaulted (rightIdx = arr.length - 1)
	- Base case:
		if leftIdx = rightIdx // one item array
		keep going if leftIdx < rightIdx
	- Use pivot/partition fn to get pivotIdx
		pivot(arr, leftidx, rightIdx) => returns index
	- recursively call quicksort on leftSubArr and on rightSubArr, not including pivot:
		quicksort(arr, left, pivotIdx-1)
		quicksort(arr, pivotIdx+1, rightIdx)
	- return arr;


	Pivot Helper (responsible for arranging els in array on either side of pivot)
	- Best case, pick median value. pivot value has impact on runtime
	- Given arr, should designate pivot point. Order on each side doesn't matter
	- Rearrange in place. No new arr
	- Returns index of the pivot

	Pivot helper pseudo:
		- Accept three args: arr, start=0 index, and end=arr.length-1 index
		- Grab the pivot
		- Store current pivot index in a variable (swapIdx) for swapping
		- Loop through arr from start to end
			- If pivot > current el; 
				- swapIdx++; 
				- swap current el with arr[swapIdx]
		- Swap pivot arr[start] with arr[swapIdx]
		- return swapIdx
*/
function quickSort(arr, leftIdx = 0, rightIdx = arr.length - 1) {
	// base case run when leftI < rightI
	if (leftIdx < rightIdx) {
		let pivotIdx = pivot(arr, leftIdx, rightIdx);
		quickSort(arr, leftIdx, pivotIdx -1);
		quickSort(arr, pivotIdx+1, rightIdx);
	}
	return arr;
}
quickSort([9,4,2,7,3,1,6,8,17,-20]);


function pivot(arr, start = 0, end = arr.length - 1) {
	var pivot = arr[start],
		swapIdx = start;

	for (let i = start + 1; i <= end; i++) {
		if (pivot > arr[i]) {
			swapIdx++;
			// swap
			swap(arr, swapIdx, i);
		}
	}
	// swap pivot with arr[swapIdx]
	// not swapping pivot but the index
	swap(arr, start, swapIdx);

	// return index
	return swapIdx;
}

pivot([4,8,2,1,5,7,6,3]);

function swap(arr, i, j){
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

function swapES6(arr, i, j) {
	[arr[i], arr[j]] = [arr[j], arr[i]];
}