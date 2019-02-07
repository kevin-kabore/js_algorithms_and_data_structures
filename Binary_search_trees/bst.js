/*
	Binary Search Trees (BST)

	Method Complexities
	- Insertion: Best, Average: O(logn) // increases by one iteration every double nodes
	- Searching: Best, Average: O(logn) // Every double n = one extra step
		- Worst case: O(n), every node is on the right of root.


	Has root
	- All nodes/values to the left are less than root
	- All nodes/values to the right are more than root
	Good for searching

	Insert(val) => Returns bst. Iterative or recursive
	- Create new node
	- Starting at root
		- check if root. If not, root = node
		- if root, compare node.val to root.val
		- if val > root.val; root.right ?
			- if true, move to node and repeat
			- if not,  add node as right prop
		- If val < root.val; root.left?
			- if true, move to node and repeat
			- if not,  add node as right prop
	Find(val) => returns node or false/undefined. Iterative or recursive
	- Start at root
	- Check if there is root, if not => false
	- If root, check value of node. If equal, return node;
	- If not equal, check if value is greater or less than
		- If greater: check if node.right
			- if true, node = node.right. Repeat
			- if not, return false/undefined;
		- If less, check if node.left.
			- if true, node = node.left. Repeat
			- if not, return false/undefined;


*/

class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BST {
	constructor() {
		this.root = null;
	}

	insert(value) { // iterative
		var newNode = new Node(val);
		if (!this.root) {
			this.root = newNode;
			return this;
		}
		var currentNode = this.root;
		while(true) {
			if (value === currentNode.value) return undefined;

			if (value < currentNode.val) {
				if (!currentNode.left) {
					currentNode.left = newNode;
					return this;
				} 
				currentNode = currentNode.left;
			} else if(value > currentNode.val) {
				if (!currentNode.right) {
					currentNode.right = newNode;
					return this;
				} else {
					currentNode = currentNode.right;
				}
			}
		}
	}

	find(value) { // iterative
		if (!this.root) return false;

		var current = this.root,
			found = false;
		while(current && !found) {
			if (value < current.val) {
				current = current.left;
			} else if (value > current.val) {
				current = current.right;
			} else {
				found = true;
			}
		}
		if (!found) return false;
		return current;
	}
}