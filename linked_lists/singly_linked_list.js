/* 
*
* 	Lists advantage vs arrays
*   - Faster Insertion and Deletion
*	
*	Lists disadvantage vs arrays
*	- Not indexed
*	- Random access is not allowed, must traverse n items
*
*	List Methods
*		Push(val)
*			- Create new node using value
*			- If head = null
*				head = node, tail = node
*			- Else 
*				- next property of tail = node, and tail property of list = node
*				- Increment length
*			- return list
*		Pop() (remove from tail)
*			- If no nodes, return undefined
*			- Loop through the list until you reach the tail
*			- Set next property of second to last Node to be null
*			- Set the tail to be second to last node
*			- Decrement the length by 1
*			- Return value of the node
*		Shift() (remove from head)
*			- If no nodes, return undefined
*			- Store the current head property in a variable
*			- Set the head property to be the current head's next property
*			- Decrement length by 1
*			- Return the value of the node removed
*		Unshift(val) (add to the front)
*			- create new node with val
*			- if head = null; head and tail = node
*			- Else; newNode.next = current head; head = newNode;
*			- increment length
*			- return list
*		Get(index) (get value of index): returns true or null
*			- If index < 0 return null
*			- loop until the index and return node at that index;
*			- return found node
*		Set(index, val) (changing/updating the value of a node based on its position in the Linked List)
*			- Use get(index) to find node
*			- If not found, return false
*			- If found, set the value to the new value
*			- return true
*		Insert(index, val): returns true or false
*			- if: idx < 0 || > list length; return false
*			- if: idx = list length; push new node to end of list
*			- if: idx = 0 unshift new node to start
*			- otherwise, use get(idx - 1) to get prevNode
*				- set prevNode.next to newNode
*				- set newNode.next to prevNode's next
*				- increment length
*			- return true
*		Delete(index): returns node at given index
*			- if index < 0 || >= list length; undefined / null
*			- if index = length-1; pop
*			- if index = 0; shift()
*			- else; use get(index -1) set next = next next
*			- decrement length
*			- return node removed
*
*/	

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		var newNode = new Node(val);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		if (!this.head || this.length === 0) return undefined;

		var currentNode = this.head;
		var prevNode = null;
		
		while (currentNode.next) {
			prevNode = currentNode;
			currentNode = currentNode.next;
		}
		this.tail = prevNode;
		this.tail.next = null;
		this.length--;

		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}

		return currentNode;
	}

	shift() {
		if (!this.head) return undefined;

		var currentHead = this.head;
		this.head = currentHead.next;
		this.length--;

		if (this.length === 0) {
			this.tail = null;
		}
		return currentHead; 
	}

	unshift(val) {
		var newNode = new Node(val);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;

		return this;
	}

	get(index) {
		if (index < 0 || index >= this.length) return null;

		var currentIdx = 0;
		var currentNode = this.head;
		while (currentIdx < index) {
			currentNode = currentNode.next;
			currentIdx++;
		}

		return currentNode;
	}

	set(index, val) {
		var node = this.get(index);

		if (!node) return false;

		node.val = val;
		return true;
	}

	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		if (index === this.length) return !!this.push(val); // push returns list. !! makes it return bool = true	
		if (index === 0) return !!this.unshift(val);

		var newNode = new Node(val);
		var prevNode = this.get(index - 1);
		var nextNode = prevNode.next;

		prevNode.next = newNode;
		newNode.next = nextNode;
		this.length++;

		return true;
	}
}

var list = new SinglyLinkedList();
list.push('Hello');
list.push('there!');
list.push(21);
list.push('Goodbye');
list.pop(); // goodbye
list.shift(); // hello
list.unshift('1st!') // head = first
list.get(2) // 21
list.set(2, 'Not 21');