// Evaluating and Comparing Code
/* 

What does better algorithm mean?
- Faster
- Less memory intensive
- Readable

O(n) from worst to best

-Horrible
O(n!)
O(2^n)
O(n^2)

- Bad
O(nlogn)

-Fair
O(n)

-Excellent
O(logn)
O(1)

*/

// O(n)
function addUpTo(n) {
	let total = 0;
	for (let i = 1; i <= n; i++) {
		total+= i;
	}
	return total;
}

// performance.now() browser method that gives miliseconds since created.

let t1 = performance.now();
addUpTo(10000000000000);
let t2 = performance.now();

console.log(`Time Elapsed: ${(t2-t1) / 1000} seconds.`);

// O(1)
function addUpTo1(n) {
    return n * (n+1)/ 2;
}

let t1b = performance.now();
addUpTo(10000000000000000000);
let t2b = performance.now();

console.log(`Time Elapsed: ${(t2a-t1a) / 1000} seconds.`);