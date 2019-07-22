/* 

	Method Complexities
	- Insertion: O(logn)
	- Deletion/ExtractMax/ExtractMin: O(logn)
	- Search: O(n)

	Why Log(n):
		- For 16 elements, 4 comparisons because insert at end and compare to parent at n-1/2
		- Same for removal. Insert at root and compare to children
		- No worst case of O(n) like Binary Search Trees.
			- In heaps, always fill out left to right before bottom.
			- No possibility of inbalanced trees
	

	Binary Heap Recap:
	- Useful data structure for sorting, and implementing other data structures like priority queues
	- Binary Heaps are either MaxBinaryHeaps or MinBinaryHeaps w/ parents being either smaller or larger
	- Can be represented with arrays using a bit of math
		- Parent is n-1/2 from child
		- Children are 2n + 1 and 2n + 2 from parent 

	Max Binary Heap Properties
	- Can be represented using arrays
	- Parent is always greater than children
	- Children are always 2n+1 and 2n+2 from parent
	- Parent is always (n-1)/2 floored from child
	
	Insertion: Bubbles up from end of arr
	- Push value into the values prop on heap
	- bubble up
		- Create a var called index which is length of the vals -1
		- Create a var called parentIndex which is floor index-1 / 2
		- Loop as long as values element at parentIndex < values element at child index
			- Swap value of the values elem at parentIndex with the value of the element prop at child index
			- Set index to parent index and start over

	ExtractMax (Deletion): returns max value of heap
	- Swap the first value with the last
	- Pop from the values prop, store first val in var
	- Have new root sink down to correct spot
		- parent starts at root (0)
		- Find index of left, right child (not out of bounds)
		- If child is > than parent, swap. If both children greater, swap with largest child
		- Child index is now parent index
		- Keep looping until neither child is > elem

*/

class MaxBinaryHeap { 
	constructor() {
		this.values = [];
	}

	insert(val) {
		this.values.push(val);
		this.bubble();
	}
      
	extractMax() {
		let max = this.values[0],
			last = this.values.pop();

		// Edge case if 1 item left, we would have removed last value and replace
		if (this.values.length > 0) {
			this.values[0] = last; // reset max with last value of heap
			this.sinkDown();
		}


		return max;
	}

	bubble() {
		let idx = this.values.length - 1,
			elem = this.values[idx];

		while(idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2),
				parentEl = this.values[parentIdx];

			if (parentEl >= elem) break;

			this.values[parentIdx] = elem;
			this.values[idx] = parentEl;;
			idx = parentIdx;
		}
	}

	sinkDown() {
		let parentIdx = 0,
			parentEl = this.values[parentIdx],
			length = this.values.length;

		while(true) {
			let leftIdx = parentIdx * 2 + 1,
				rightIdx = parentIdx * 2 + 2,
				leftEl, rightEl,
				swap = null;

			if (leftIdx < length) { // if inbounds
				leftEl = this.values[leftIdx];    
				if (leftEl > parentEl) {
					swap = leftIdx;
				}
			}
			if (rightIdx < length) {
				rightEl = this.values[rightIdx];
				if (
					(swap === null && rightEl > parentEl) ||
					(swap !== null && rightEl > leftEl)
					) {
						swap = rightIdx;
				}
			}

			if (swap === null) break;

			this.values[parentIdx] = this.values[swap];
			this.values[swap] = parentEl;
			parentIdx = swap;
		}
	}

}

