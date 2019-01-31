/*

	Quick Sort:
	- Time complexity:
		Worst: O(n^2)
		Average: O(nlogn)
		Best: Omega(nlogn)
	
	Quicksort steps
	- Select one element, the pivot point. Use pivot or partition function
	- Find the index where pivot should end up
	- Once pivot positioned, quick sort can be applied to either side	

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

function swap(arr, i, j){
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

function swapES6(arr, i, j) {
	[arr[i], arr[j]] = [arr[j], arr[i]];
}

function pivot(arr, start = 0, end = arr.length-1) {
	var pivot = arr[start],
		swapIdx = start;

	for (let i = start + 1; i < arr.length; start++) {
		if (pivot > arr[i]) {
			swapIdx++;
			// swap
			swap(arr, swapIdx, i);
		}
	}
	// swap pivot with arr[swapIdx]
	// noy swaping pivot but the index
	swap(arr, start, swapIdx);
	return swapIdx;
}



pivot([4,8,2,1,5,7,6,3]);