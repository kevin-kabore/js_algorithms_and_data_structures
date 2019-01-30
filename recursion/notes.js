/* 

 Recursion solves a problem by breaking it down into smaller parts
 - Base case: what ends the recursive function
 - Different input on supsequent calls

 Helper Method Recursion
 - putting a recursive function inside of your main function
 - common pattern to compile results. Sometimes arrays, other times other data structures.

 Recursion tips
 - For arrays: slice, spread operator, and concat that make copies of arrays so don't have to mutate them
 - Strings immutable: Well need to use slice, substr, or substring to make copies
 - Objects: Object.assign, or spread operator
*/

// ex: Factorial Recursive

function factorial(n) {
	if (n === 1) { return 1; }
	return n * factorial(n-1);
}

// Helper Method Recursion example
// - result is used to collect data, outside the recursive function helper

function collectOddValues(arr) {
	let result = [];

	function helper(helperInput){
		if(helperInput.length === 0) {
			return;
		}
		if (helperInput % 2 !== 0) {
			result.push(helperInput[0])
		}

		helper(helperInput.slice(1)); // shallow copy as subarray from 1st index
	}

	helper(arr);

	return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9])

function collectOddValuesPureRecursion(arr) {
	let result = [];

	if (arr.length === 0) {
		return result;
	}

	if (arr[0] % 2 !== 0) {
		result.push(arr[0]);
	}

	// carry result by concatnating with a shallow copy of recursive next index
	result = result.concat(collectOddValuesPureRecursion(arr.slice(1)));
	return result;
}