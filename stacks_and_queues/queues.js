/*
	Queues
	Method Complexities
	- Insertion - O(1)
	- Removal - O(1)
	- Searching - O(n)
	- Access O(n)
	
	FIFO
	- Examples:
		- Background tasks
		- Checkout line
		- Printing/task processing
	- Array implementation
		- Push()/Shift(). Removing from beginning is O(n) because of reindexing
		- Unshift/pop(). However adding to the front is O(n) because of reindexing
	- Linked List implementation
		- Normal linked list: removing from end is O(n)
		- Add to end/tail, and remove from tail
		- Enqueue adds to last/end/tail => returns size
		- Dequeue removes from first/head => returns node.val

*/

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}
}

class Node {
	constructor(val) {
		this.val = val;
		this.next;
	}
	enqueue(val){ 
		var newNode = new Node(val);
		if (!this.first) {
			this.last = newNode;
			this.first = newNode;
		} else { // add to end
			this.last.next = newNode;
			this.last = newNode;
		}
		return ++this.size;
	}
	dequeue() { 
		// remove from beginning (first item in)
		// edge cases: size = 0; size = 1
		if (!this.first) return null;

		var node = this.first;
		if (this.first === this.last) {
			this.last = null;
		}
		this.first = this.first.next;
		this.size--;
		return node.val;
	}
}