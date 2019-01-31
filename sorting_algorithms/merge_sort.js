/*
	Best sorting algorithm: O(nlogn)

	Merge Sort 
	- O(nlogn) worst, best, and average case time
		O(logn) decompositions: as n grows, have to split logn times ex: 
			- 3 times for 8 item array where 2^3 = 8
			- 5 times for 32 item array where 2^5 = 32
		O(n) comparisons per decompositions: merge

		
	- O(n) space complexity is tradeoff

	- Divide and Conquer

	Divide
	- Exploits the fact that arrays of 0 or 1 element, are always sorted
		- Split arrays repetitively until arrays of 0 or 1 lengths
		- This is base case. When arr.length <= 1
		[9,5,7,1,4,7,6,2]
	   [9,5,7,1]    [4,7,6,2]
  	  [9,5] [7,1] [4,7] [6,2]		
  	 [9][5][7][1] [4][7][6][2]
  	 	- Merges back together by comparing corresponding indeces all the way to the top.
	  [9][5][7][1] [4][7][6][2]
	  [5,9][1,7][4,7][2,6]
	  [1,5,7,9] [2,4,6,7]
	  [1,2,4,5,6,7,9]

	Merge: O(n+m)
	- Create empty arr
	- While i and j aren't at end
		- compare first array item of each
		- Push smallest to result array
		 i       j
		[1,4,9] [2,3,7,10,50] i = 0 j = 0
		[1] // res
		   i     j
		[1,4,9] [2,3,7,10,50] i = 1 j = 0
		[1,2]
		   j       j
		[1,4,9] [2,3,7,10,50] i = 1 j = 1
		[1,2,3]
		   i         j
		[1,4,9] [2,3,7,10,50] i = 1 j = 2
		[1,2,3,4] // res	
			 i          i	
		[1,4,9] [2,3,7,10,50] i = 2 j = 3
		[1,2,3,4,7] // res
			           i	
		[1,4,9] [2,3,7,10,50] i = end j = 3
		[1,2,3,4,7,9] // res				

	- concat the rest when exhaust one array	
		[1,2,3,4,7,9,10,10] // res
	
*/
const mergeSort = (arr) => {
	// base case if length <= 1
	if (arr.length <= 1) return arr;

	let mid = Math.floor((arr.length) / 2);
	let left = arr.slice(0, mid); // slice not inclusive of end arg
	let right = arr.slice(mid); // mid to end
	
	return merge(mergeSort(arr1), mergeSort(arr2));

	// Also an option
	// let left = mergeSort(arr.slice(0, mid)); // slice not inclusive of end arg
	// let right = mregeSort(arr.slice(mid)); // mid to end
	
	// return merge(left, right);
	
}

const merge = (arr1, arr2) => {
	let res = [],
		i = 0,
		j = 0;

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			res.push(arr1[i]);
			i++;
		} else {
			res.push(arr2[j]);
			j++;
		}
	}
	res = res.concat(arr1.slice(i)).concat(arr2.slice(j));
	return res;
}

mergeSort([9,5,7,1,4,7,6,2]);