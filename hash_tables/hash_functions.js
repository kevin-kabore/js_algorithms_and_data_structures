/*
	Hash Functions
	- Takes string and length of array to return hash value (index)
	- Want to use prime number length arrays to reduce collisions
	- Want to use prime number in function to help reduce collisions
	- How to handle collisions (2 strategies)
		1. Separate Chaining
			- Store multiple key/value pairs in each position
			- In a nested data strutcture
			- Allows us to store more data in one table
		2. Linear Probing
			- Only store one key/value pair in each position
			- Find the next empty slot
*/

// Will use a limitter in loop to make more efficitent than O(n)
// and a prime number to reduce collisions
function hashInefficient(string, arrayLen) {
	let total = 0;
	for (let i = 0; i < string.length; i++) {
		let char = string[i],
			value = char.charCodeAt(0) - 96;
		total = (total + value) % arrayLen;
	}
	return total;
}

// Will use a limitter in loop to make more efficitent than O(n)
// and a prime number to reduce collisions
function hash(string, arrayLen) {
	let total = 0,
		PRIME = 31;

	for (let i = 0; i < Math.min(string.length, 100); i++) {
		let char = string[i],
			value = char.charCodeAt(0) - 96;
			total = (total * PRIME + value) % arrayLen;
	}

	return total;
}