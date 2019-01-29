/*

 How to improve  
  1. Devise plan for solving problems
  2. Master common problem solving patterns

*/

/*

Problem Solving
1. Understand the problem
2. Explore concrete examples
3. Break it down
4. Solve/simplify
5. Look back and refactor

1. Understanding the problem
- Can I restate the problem in my own words?
- What are the inputs that go into the problem?
- What are the outputs?
- Can the output be determined from the inputs meaning do I have enough info to solve the problem
- How should I label the important pieces of data that are a part of this problem?

2. Explore 3 Examples
- Examples can help understand the problem better
- Useful for sanity check to to make sure algorithm works
a. Start with simple examples
b. Continue with more complex
c. Edge cases: Explore with empty inputs, faulty inputs

Ex: Write a function that takes a string and returrns counts of each char in string
My examples:
a. charCount("aaaa") // {a:4}
b. charCount("hello"); // {h:1, e:1, l:2, o: 1}
b. charCount("Your Pin is 1234");
c. charCount(0); charCount({});
- questions: Returning object? Accounting for letters that aren't there? ex: {a:4, b:0}
- Counting spaces? Uppercase vs lowercase? Numbers?

3. Break it down
- Write basic steps of your thought of solutions

Ex: Write a function that takes a string and returrns counts of each char in string
function charCount(str) {
	// make object to return

	//loop over string for each char. lowercase
	 // if char is a number/letter AND in obj to count
	 // if char is a number/letter AND not in obj, add it to obj and set val to 1
	 // if char is space, period, etc. do nothing


	// return obj

	// return object
}

4. Solve/simplify
- Solve problem if you can
- solve simpler problem if you can't

Ex: Write a function that takes a string and returrns counts of each char in string
- solve without checking for alphanumeric first, return to it after
*/
function charCount(str) {
	// make object to return
	let res = {};
	//loop over string for each char. lowercase
	for ( let i = 0; i < str.length; i++) {
		var char = str[i].lowercase();
		// if char is a number/letter AND in obj add to count
		if (res[char]) {
			res[char]++;
		} 
		// if char is a number/letter AND not in obj, add it to obj and set val to 1
		else {
			res[char] = 1;
		}
		// if char is space, period, etc. do nothing
	}
	// return object
	return res;
}
// Think out loud
// For solving alphanumeric, can use 1. Array of all alphanumeric, or array of non-alphanumeric and loop (O(n))
// Regex O(1). Ask if you can look up regex or if they can provide if don't know. add into the refactor
function charCountRefactor(str) {
	// make object to return
	let res = {};
	//loop over string for each char. lowercase
	for ( let i = 0; i < str.length; i++) {
		var char = str[i].lowercase();
		// if char is a number/letter AND in obj add to count
		if (/[a-z0-9]/.test(char)) {
			if (res[char]) {
				res[char]++;
			} 
			// if char is a number/letter AND not in obj, add it to obj and set val to 1
			else {
				res[char] = 1;
			}	
		}
		
	}
	// return object
	return res;
}

/*

5. Look Back and Refactor

Questions/Steps
- Check result against examples
- Can you get result differently
- Can you understand at glance
- Can you improve performance? What is performance?
- Other ways to refactor?
- How have other people solved this differently?

Add note about efficiency of checking char as alpha numeric
// Not sure how efficient regex actually is
// What we can do charCodeAt which has a O(1)
// 57-48 numberic
// 64- 91 upper alphabetic
// lower alpha a-z
// could create a helper function isAlphaNumeric

*/

function charCountRefactor2(str) {
	// make object to return
	let res = {};
	for ( var char of str) {
		var char = char.lowercase();
		if (isAlphaNumeric(char)) {
			res[char] = ++res[char] || 1;
		}
		
	}
	// return object
	return res;
}

function isAlphaNumeric(char) {
	var code = char.charCodeAt(0);
	if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }
    return true
}