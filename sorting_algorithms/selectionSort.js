/*
	Selection Sort: 
	- Time Complexity Worst & best case: O(n^2)
	- Comparison sort
	- Similar to bubble sort, but: 
		works by finding min and swapping within a loop, in place
	- sorts in place
	- Space complexity: O(1)

	Bubble sort: Best O(1), Worst: O(n^2)
	
*/

const selectionSort = (arr) => {
	const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

	// let temp = arr[i];
	// 	arr[i] = arr[min]; 
	// 	arr[min] = temp; // arr[j] = temp (arr[i])

	for(let i = 0; i < arr.length; i++) {
		let min = i;
		for (let j = i+1; j < arr.length; j++) {
			if (arr[j] < arr[min]) {
				min = j;
			}
		}
		
		if (i !== min) swap(arr, i, min);
	}
	return arr;
}