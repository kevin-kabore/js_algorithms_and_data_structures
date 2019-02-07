/*

	Depth First Search (BFS)
	- VERTICAL Tree traversal, down first then horizontally
	- Best on Wide trees, not tall trees. 
		- Less space complexity
		- Not heavy on call stack if not Tall
	- 3 different ways
		- PreOrder: Visit node, then down all of left, then down all of right
			- Useful if want to re-construct the tree from output
		- PostOrder: Visit down all left of node, then all right of node, then node
		- InOrder: Visit down all left of node, then node, then all of right
			- Useful if want order on BST


	- Visiting every node of any given tree
	- Searching top->down (VERTICALLY), then right
	
	DFS PreOrder Pseudo (recursive) 
	- => returns arr/list of nodes visited
	- Create a variable to store the vals of nodes visited
	- Store the root of BST in var called current
	- Call helper function traverse(node)
		- push val of node into arr that stores vals
		- If node has left prop, call traverse with node.left
		- If node has right prop, call traverse with node.right
	- Call helper function with current variable
	- return array of vals
			  10
		11			8
	3		90	16
	should return: [10, 11, 3, 90, 8, 16]

	DFS PostOrder Pseudo (recursive) 
	- => returns arr/list of nodes visited
	- Create a variable to store the vals of nodes visited
	- Store the root of BST in var called current
	- Call helper function traverse(node)
		- If node has left prop, call traverse with node.left
		- If node has right prop, call traverse with node.right
		- push val of node into arr that stores vals
	- Call helper function with current variable
	- return array of vals
			  10
		11			8
	3		90	16
	should return: [3, 90,11, 16, 8, 10]

	DFS InOrder Pseudo (recursive) 
	- => returns arr/list of nodes visited
	- Create a variable to store the vals of nodes visited
	- Store the root of BST in var called current
	- Call helper function traverse(node)
		- If node has left prop, call traverse with node.left
		- push val of node into arr that stores vals
		- If node has right prop, call traverse with node.right
	- Call helper function with current variable
	- return array of vals
			  10
		11			8
	3		90	16
	should return: [3,11,90,10,16,8]


*/

function DFSPreOrder(tree) {
	var data = [],
		current = tree.root;
	traverse(current, data);

	return data;
}

function traversePreOrder(node, arr) {
	arr.push(node.val);

	if (node.left) traversePreOrder(node.left);
	if (node.right) traversePreOrder(node.right);
}


function DFSPostOrder(tree) {
	var data = [],
		current = tree.root;
	traversePostOrder(current, data);

	return data;
}

function traversePostOrder(node, arr) {
	if (node.left) traversePostOrder(node.left);
	if (node.right) traversePostOrder(node.right);

	arr.push(node.val);
}

function DFSInOrder(tree) {
	var current = tree.root,
		data = [];
	traverseInOrder(current);
	return data;
}

function traverseInOrder(node, data) {
	if (node.left) traverseInOrder(node.left);
	data.push(node);
	if (node.right) traverseInOrder(node.right);
}
