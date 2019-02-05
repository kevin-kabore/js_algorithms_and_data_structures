/*
*
*		Doubly Linked List
*
*		Method Complexities
*		- Insertion: O(1)
*
*
*
*
*		List Methods
*			Push(val) O(1)
*				- Create a new node with the val
*				- if head is null or length 0
*					- head and tail = new node
*				- Else, 
*					tail.next = node 
*					node.prev = tail, 
*					update tail to be node: tail = node;
*				- length++, return list
*			Pop() Remove from tail O(1)
*				- If no head, return undefined
*				- store current tail in var
*				- If length = 1, head & tail = null
*				- Else, update tail to be previous node
*				- Set newTail, next to null. Remove link of removed tail
*				- Decrement length, return value removed
*			Shift() remove from head O(1)
*				- If length 0 => undefined
*				- if length 1 
*					- head = null, tail = null
*				- Store current head in var oldhead
*				- Update head to be next of oldhead
*				- head's prev prop to null, oldhead's next to null
*				- Decrement length, return oldhead
*
*			Unshift(val) add to head of linked list O(1)
*				- Create newNode with val
*				- if length 0; head and tail = new node
*				- else
*					- head.prev = newNode
*					- newNode.next = head
*					- head = newNode
*				- Increment length; return list
*			Get(index)
*
*
*
*
*/

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val) {
		var newNode = new Node(val);
		if (this.length === 0 || this.head === null) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
	pop() {
		if (!this.head || this.length === 0) return undefined;

		var poppedNode = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = poppedNode.prev;
			this.tail.next = null;
			poppedNode.prev = null;
		}
		this.length--;
		return currentNode;
	}
	shift() {
		if (!this.head) return undefined;

		var oldHead = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
		}
		this.length--;
		return oldHead;
	}
	unshift(val) {
		var newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}
}

