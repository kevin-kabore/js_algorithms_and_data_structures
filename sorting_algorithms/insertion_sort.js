/*
 Insertion Sort
 - Builds up by gradually creating a sorted left half
 - Time Complexity worst case: O(n^2)
 - Time Complexity best Case: O(n). Practical If arr nearly sorted 
 - Practical in applications where items being inserted one at a time. 

 Pseudo 

 - Pick second el in arr
 - loop 
 	- Swap if necessary
 - Continue to next element
	- If incorrect order, iterate throufh left
	- Place in correct place 
*/

const insertionSort = (arr) => {
	for (var i = 1; i < arr.length; i++) {
		// pick second el 
		let currentVal = arr[i];
		// iterate down while arr[j] < current val
		for (var j = i -1; j >= 0 && arr[j] > currentVal; j--) {
			// move greater val forward one since curVal saved 
			arr[j+1] = arr[j];
		}
		// arr[j] < currentVal
		// place currentVal in arr[j+1]
		arr[j+1] = currentVal;
	}
	return arr;
}

insertionSort([2,1,9,76,4])
[2,2,9,76,4] // val =1
[1,2,9,76,4] // val = 9
[1,2,9,76,4] // val = 76
[1,2,9,76,4] // val = 4
[1,2,9,76,76]
[1,2,9,9,76]
[1,2,4,9,76] // done

