/*
 *
 *		Doubly Linked List
 *
 *		Method Complexities
 *		- Insertion: O(1)
 *		- Removal: O(1) if removing first, last, or second to last because of double join. Otherwise O(n)
 *		- Searching: O(n/2) => O(n)
 *		- Access: O(n)
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
 *			Get(index) O(n/2) = O(n)
 *				- If index < 0 || >== length return null
 *				- if index <== length / 2
 *					- loop through list from head to middle; return node when found
 *				- if head > length /2
 *					- loop from tail downto mid; return node when found
 *			Set(index, val) O(n)
 *				- Var node = get(index)
 *					- If get valid, set val of node to new val; return true
 *					- else return false
 *			Remove(index) O(n), O(1) if first or last or second to last.
 *				- If index < 0 || >= length; return undefined
 *				- If index = 0; shift()
 *				- If index = length.1; pop()
 *				- get(index)
 *					- update next and prev props around node
 *					- next and prev on node to null
 *					- Decrement length; return node
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
      newNode.prev = this.tail;
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
    return poppedNode;
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
    }
    oldHead.next = null;
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
  get(index) {
    if (index < 0 || index >= this.length) return null;

    var mid = Math.floor(this.length / 2);
    if (index <= mid) {
      var count = 0;
      var currentNode = this.head;
      while (count !== index) {
        currentNode = currentNode.next;
        count++;
      }
    } else {
      var count = this.length - 1;
      var currentNode = this.tail;
      while (count !== index) {
        currentNode = currentNode.prev;
        count--;
      }
    }
    return currentNode;
  }
  set(index, val) {
    var getNode = this.get(index);
    if (getNode !== null) {
      getNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val); // make return a bool
    if (index === this.length) return !!this.push(val); // make return a bool

    var newNode = new Node(val);
    var prevNode = this.get(index - 1);

    (prevNode.next.prev = newNode), (newNode.next = prevNode.next);

    (prevNode.next = newNode), (newNode.prev = prevNode);

    this.length++;
    return true;
  }
  delete(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    var foundNode = this.get(index);

    // Point prevNode to foundNode.next, and nextNode to foundNode.prev
    (foundNode.prev.next = foundNode.next),
      (foundNode.next.prev = foundNode.prev);

    (foundNode.next = null), (foundNode.prev = null);

    this.length--;
    return foundNode;
  }
}

var list = new DoublyLinkedList();
list.push('A');
list.push('B');
list.push('C');
list.push('D');
list.push('F');
