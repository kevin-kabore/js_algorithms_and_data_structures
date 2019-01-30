/*

	 Multiple Pointers Pattern

	 - Works on a SORTED array or string
	 - Creating pointers/values that correspond to an index or position and move towards the
	  beginning, end or middle depending on a certain condition
	 - Very efficient with minimal time AND space complexity
*/

// Example 1: Write function called sumZero which takes a SORTED array of integers. It should return the FIRST 
// pair where the sum is 0; Return an array that includes both values

// Brute force: nested loop. O(n^2)

function sumZeroBrute(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i+1; j< arr.length; j++) {
			if (arr[i] + arr[j] === 0) {
				return [arr[i], arr[j]];
			}
		}
	}	
}

sumZeroBrute([-3,-2,-1,0,1,2,3]); // [-3,-3]
sumZeroBrute([-2,-1,0,1,3]); // undefined
sumZeroBrute([1,2,3]); // undefined


// Efficient solution: O(n) time O(1) space

function sumZero(arr) {
	let left = 0,
		right = arr.length -1;

	while(left < right){
		let sum = arr[left] + arr[right];
		if (sum === 0) {
			return [arr[left], arr[right]];
		} else if (sum > 0) { // find next highest possible combination
			right--;
		} else { // find next lowest possible combination
			left++;
		}
	}
}

sumZero([-3,-2,-1,0,1,2,3]); // [-3,-3]
sumZero([-2,-1,0,1,3]); // undefined
sumZero([1,2,3]); // undefined

/*

Example2: write a function countUniqueValues(arr) where arr is SORTED and returns the count of unique values

*/
// time: O(n), space O(1);
function countUniqueValues(arr) {
	if (arr.length === 0 || !arr.length) {
		return 0;
	}

	let i = 0;
	for (var j = 1; j < arr.length; i++) {
		if (arr[i] !== arr[j]) { // if not equal, unique so increment i
			i++;
			arr[i] = arr[j];
		}
	}
	return i+1;
}

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4