/*
	Binary Search Trees (BST)

	Method Complexities
	- Insertion: Best, Average: O(logn) // increases by one iteration every double nodes
	- Searching: Best, Average: O(logn) // Every double n = one extra step
		- Worst case: O(n), every node is on the right of root.

	- BFS
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

	BFS() {
		if (!this.root) return [];

		var current = this.root,
			queue = [current],
			data = [];

		while (queue.length !== 0) {
			current = queue.shift();
			data.push(current.val);

			if (current.left) queue.push(current.left);
			if (current.right) queue.push(current.right);
		}

		return data;
	}

	DFSPreOrder() {
		var data = [],
			current = this.root;
		this.traversePre(current, data);
		return data;
	}
	traversePre(node, arr) {
		arr.push(node.val);
		
		if (node.left) this.traversePre(node.left);
		if (node.right) this.traversePre(node.right);
	}

	DFSPostOrder() {
		var data = [],
			current = this.root;
		this.traversePost(current, data);
		return data;
	}
	traversePost(node, arr) {
		
		if (node.left) this.traversePost(node.left);
		if (node.right) this.traversePost(node.right);

		arr.push(node.val);
	}

	DFSInOrder() {
		var data = [],
			current = this.root;

		this.traverseInOrder(current, data);
		return data;
	}
	traverseInOrder(node, arr) {
		if (node.left) this.traverseInOrder(node, arr);
		arr.push(node.val);
		if (node.right) this.traverseInOrder(node, arr);
	}

}