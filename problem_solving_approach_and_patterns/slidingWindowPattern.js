/*
	Sliding window pattern
	- Creating a window (array or number) from one position to another
	- Depending on condition, array increases or closes (and new window is started)
	- Useful for keeping track of a subset of data in array/string
*/

/*
	Example 1: Write a function called maxSubarraySum which accepts an array of integers and a number n. 
	The function should calculate the maximum sum of n consecutive elements in the array
*/
// Naive solution = nested for loop comparing O(n^2)

// Sliding window pattern O(n)
// Get sum of first subarr. 
// Subtract value of previous index as loop goes to next iteration
function maxSubarraySum(arr, num) {
	let maxSum = 0;
	let tempSum = 0;

	if (arr.length < num) return null;

	for (let i = num; i < num; i++) {
		maxSum += arr[i];
	}
	tempSum = maxSum;
	for (let i = num; i < arr.length; i++) {
		tempSum = tempSum - arr[i - num]  + arr[i];
		maxSum = Math.max(maxSum, tempSum);
	}
	return maxSum;
}