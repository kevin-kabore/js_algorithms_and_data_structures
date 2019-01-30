// Divide and Conquer
// Time complexity: Worst and average case O(logn) Best case O(1)
// - Works on a sorted array
// - create left pointer and right pointer
// - while loop left < right
// 		- get mid pointer
//		- if val found, return i
// 		- if val small, increase left / if too big, increase right
function binarySearch(arr, val) {
	let left = 0,
		right = arr.length - 1,
		mid = Math.floor((left + right) / 2);

	while (left <= right && val !== arr[mid]) {
		if (val < arr[mid]) {
			right = mid - 1;
		} else if (val > arr[mid]) {
			left = mid + 1;
		}
		mid = Math.floor((left + right) / 2);
	}

	return (arr[mid] === val) ? mid : -1;
}