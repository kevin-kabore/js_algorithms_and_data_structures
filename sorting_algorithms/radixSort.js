/*
	Radix sort
	- Complexity:
		Worst: O(nk) // where n = length of array, and k = the number of digits (average)
		Average: O(nk)
		Best: O(nk)
		Space: O(n + k)
	- Not a comparison sort so better time complexity
	- Works on base 10 numbers only
	- Comparing the digits at each position and placing into buckets
	- Maximum amount of buckets is equal to longest number

	Radix Sort pseudo
	- function accepts list of numbers
	- figure out how many digits the largest number has
	- loop from k = 0 up to largest num of digits
		- For each iteration
		- create buckets for each digit 0-9
		- place each num in correct bucket based on kth digit
	- Replace existing arr with values in our buckets, starting with 0 to 9
	- return the list

*/

function radixSort(nums) {
	let maxDigitCount = mostDigits(nums);
	for (let k = 0; k < maxDigitCount; k++) {
		let digitBuckets = Array.from({length: 10}, () => []); // 10 empty buckets
		for (let i = 0; i < nums.length; i++) {
			let digit = getDigit(nums[i], k); // get digit
			digitBuckets[digit].push(nums[i]); // place in bucket for that digit
		}
		nums = [].concat(...digitBuckets)
	}
}

function getDigit(num, i) {
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
	let maxDigits = 0;
	for (let i = 0; i < nums.length; i++) {
		maxDigits = Math.max(maxDigits, digitCount(nums[i]));
	}
	return maxDigits;
}