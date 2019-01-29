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

// O(n) linear time
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequency1 = {},
    frequency2 = {};

  for (let char of arr1) {
    frequency1[char] = (frequency1[char] || 0) + 1; // add one or initialize to 1
  }
  for (let char of arr2) {
    frequency2[char] = (frequency2[char] || 0) + 1;
  }

  // loop over first frequency obj
  for (let key in frequency1) {
    if (!(key ** 2 in frequency2)) {
      //if squared key of frequency1 not in frequency2
      return false;
    }
    if (!frequency2[key ** 2] !== frequency1[key]) {
      // if key frequency in 2 doesn't match frequency1[key]
      return false;
    }
  }
  return true;
}

same([1, 2, 3, 2], [9, 1, 4, 4]); // true
// frequency1 = {1:1, 2:2, 3:1}
// frequency2 = {9:1, 1:1, 4:2}

/*
	Example 2: Given two strings, write a function to determine if the second string is an anagram of the first.
	- Anagram: word, phrase, or name formed by rearranging letters of another such as cinema from iceman

*/

function validAnagram(str1, str2) {
  // if length of strings not equal return false
  if (str1.length !== str2.length) {
    return false;
  }
  // freq assignments
  let freq1 = {},
    freq2 = {};
  for (let char of str1) {
    freq1[char] ? (freq1[char] += 1) : (freq1[char] = 1);
  }
  for (let char of str2) {
    freq2[char] = (freq2[char] || 0) + 1;
  }

  for (let key in freq1) {
    if (!freq2[key]) {
      return false;
    } else if (freq1[key] !== freq2[key]) {
      return false;
    }
  }

  console.log(freq1);
  console.log(freq2);
  console.log('TRUE');
  return true;
}

validAnagram('', ''); // true
validAnagram('aaz', 'zza'); // false
validAnagram('anagram', 'nagaram'); // true
validAnagram('rat', 'car'); // false
validAnagram('awesome', 'awesom'); // false
validAnagram('qwerty', 'qeywrt'); // true

function validAnagramRefactored(str1, str2) {
  // if length of strings not equal return false
  if (str1.length !== str2.length) {
    return false;
  }
  // freq assignments
  let frequency = {};
  for (let char of str1) {
    frequency[char] ? (frequency[char] += 1) : (frequency[char] = 1);
  }
  for (let char of str2) {
    if (!frequency[char]) {
      return false;
    } else {
      frequency[char] -= 1;
    }
  }

  console.log(frequency);
  return true;
}

validAnagramRefactored('', ''); // true
validAnagramRefactored('aaz', 'zza'); // false
validAnagramRefactored('anagram', 'nagaram'); // true
validAnagramRefactored('rat', 'car'); // false
validAnagramRefactored('awesome', 'awesom'); // false
validAnagramRefactored('qwerty', 'qeywrt'); // true
