/*
	Frequency Counter
	- usually use an object to break down contents of two arrs or string
	- Compare the breakdown of one vs other to check for consistency
*/

// Naive approach: Nested loop to compare indeces/values on each. O(n^2)

/*
	// Example:  Write a function: same, that takes two arrays. The fn should return true if every value in the array has
	// its corresponding value squared in the second array. Frequency myst be the same

	same([1,2,3], [4,1,9]) // true
	same([1,2,3], [1,9]) // false
	same([1,2,1], [4,4,1]) // false (must be same frequency)

*/

// O(n)
function same(arr1, arr2){
	let frequency1 = {},
		frequency2 = {};

	for(let char of arr1){
		frequency1[char] = (frequency1[char] || 0) + 1;
	}
	for(let char of arr2){
		frequency2[char] = (frequency2[char] || 0) + 1;
	}

	for(let key in frequency1) {
		if (!(key ** 2 in frequency2)) { //if squared key doesn't exist
			return false; 
		} 
		if (!frequency2[key ** 2] !== frequency1[key]) { // if key frequency doesn't match
			return false;
		}
	}

	return true;

}

