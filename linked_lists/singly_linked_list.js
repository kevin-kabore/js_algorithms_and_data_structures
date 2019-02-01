/* 
*	Method complexities:
*	- Insertion: O(1) 
*		- better than arr
*	- Removal: O(1)-from front or O(n)-if have to remove last item. Must find item n-1 
*		- better than arrays: O(n)
*	- Search: O(n) 
*		- worse than arrays
*	- Access: O(n)
*		- worse than arrays 
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
*		Remove(index): returns node at given index
*			- if index < 0 || >= list length; undefined / null
*			- if index = length-1; pop
*			- if index = 0; shift()
*			- else; use get(index -1) set next = next next
*			- decrement length
*			- return node removed
*
*		Reverse(): returns list reversed, without creating a new list
*			- Swap head and tail
*			- create var next, prev
*			- Create var node = head
*			- Loop through
*				- set next var to next prop on node
*				- set next prop of node to be prev
*				- set prev to be val of node var
*				- set node var to value of next var
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

	remove(index) {
		if (index < 0 || index >= this.length ) return null;
		if (index === 0) return this.shift();
		if (index === this.length -1) return this.pop();

		var prev = this.get(index-1);
		var removed = prev.next;
		prev.next = removed.next;
		this.length--;

		return removed;
	}

	print() {
		var arr = [],
			current = this.head;

			while(current) {
				arr.push(current.val);
				current = current.next
			}
			console.log(arr);
	}
	reverse() {
		var node = this.head;
		this.head = this.tail;
		this.tail = node;

		var	next = node.next;
		var	prev = null;


		for (var i = 0; i < this.length; i++) {
			next = node.next; // get next node
			node.next = prev; // point current node to prev
			prev = node; // set prev to current node
			node = next; // increment new node
		}

		return this;
	}
}

/*
- Swap head and tail
*			- create var next, prev
*			- Create var node = head
*			- Loop through
*				- set next var to next prop on node
*				- set next prop of node to be prev
*				- set prev to be val of node var
*				- set node var to value of next var
*/

var list = new SinglyLinkedList();
list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.pop(); // 4
list.shift(); // 0
list.unshift('1st!') // head = first
list.get(2) // 2
list.set(2, 'Not 2');
list.insert(4, 'last');
list.remove(0) //0