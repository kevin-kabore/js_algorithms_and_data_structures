/*
	Stacks
	Method Complexities
	- Insertion - O(1)
	- Removal - O(1)
	- Searching - O(n)
	- Access O(n)
	- Stacks prioritize insertion and removal because adding/removing from first item (or last item if using doubly linked list)

	- LIFO principle
		- Examples: 
			- Stack of dirty plates. Wash from top
			- Call Stack
			- Forward/backward in browser, re-do/undo.
		- Array Implementation 
			- Using push/pop from end or 
			- unshift/shift from beginning: Not efficienct because of array re indexing O(n)
			- However don't need other array methods so unecessary space
		- Linked list implementation
			- Node with val, and next
			- Stack with first, last, and size
		 	- Shift and unshift of Linked List is similar to push and pop of Linked List
		 	- Add/removing from beginning in SINGLY linked list is constant time. 
		 	- Add/removing from tail in Singly Linked list is linear time O(n)
		 	- Doubly linked list is constant O(1) 


*/

// Stack with singly linked list
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	push(val) {
		var newNode = new Node(val);

		if (this.size === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			newNode.next = this.first;
			this.first = newNode;

		}
		return ++this.size;
	}
	pop() {
		if (!this.first) return null;

		var firstNode = this.first;
		// edge case if only one item
		if (this.first === this.last) {
			this.last = null; // set last to zero so next step sets first to null
		}
		this.first = this.first.next;
		this.size--;
		return firstNode.val;
	}
}