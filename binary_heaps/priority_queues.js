/*
	
	Priority Queue
	
	- Insertion: O(logn) or log base 2 of n
	- Deletion: O(logn) or log base 2 of n
	- Search: O(n)
	
	- A data structure where each element has a priority. 
	- Elements with higher priorities are served before elements with lower priorities.
	- Ex: Emergency room. 5 Flu vs 1 new w/ gunshot wounds
	- Separate from max heaps. Can be implemented in different ways. Heap is efficient
		- Swap top with bottom and remove, and sink down

	Priority Queue Pseudo

*/

class Node {
	constructor(val, priority) {
		this.val = val;
		this.priority = priority;
	}
}

class PriorityQueue {
	constructor() {
		this.values = [];
	}

	enqueue(val, p) {
		let node = new Node(val, p);
		this.values.push(node);
		this.bubbleUp();

	}

	dequeue() {
		let min = this.values[0],
			last = this.values.pop();

		if (this.values.length > 0) {
			this.values[0] = last;
			this.sinkDown();
		}

		return min;
	}

	bubbleUp() {
		let idx =  this.values.length - 1,
			el = this.values[idx];

		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1)/2),
				parent = this.values[parentIdx];

			if (el.priority >= parent.priority) break;

			this.values[parentIdx] = el;
			this.values[idx] = parent;
			idx = parentIdx;
		}
	}

	sinkDown() {
		let parent = this.values[0],
			parentIdx = 0,
			length = this.values.length;

		while(true) {
			let leftIdx  = (2 * parentIdx) + 1,
				rightIdx = (2 * parentIdx) + 2,
				rightEl, leftEl,
				swap = null,
				swapIdx = null;
			
			if (leftIdx < length) {
				leftEl = this.values[leftIdx];
				if (leftEl.priority < parent.priority) {
					swap = leftEl;
					swapIdx = leftIdx;
				}
			}
			if (rightIdx < length) {
				rightEl = this.values[rightIdx];
				if (
					(swap === null && rightEl.priority < parent.priority) || 
					(swap !== null && rightEl.priority < parent.priority) 
				) {
					swap = rightEl;
					swapIdx = rightIdx;
				}
			}

			if (swap === null) break;

			this.values[parentIdx] = swap;
			this.values[swapIdx] = parent;

			parent = swap;
			parentIdx = swapIdx;
		}
	}
}

