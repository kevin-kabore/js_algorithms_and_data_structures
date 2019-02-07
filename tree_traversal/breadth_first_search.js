/*

	Breadth First Search (BFS)
	- HORIZONTAL Tree traversal, left to right first, then down (breadthFirst)
	- Best on unbalanced, long trees, not wide trees with many levels
		- When wide, space complexity increases because of the queue;

	- Visiting every node of any given tree
	- Searching left->right (HORIZONTALLY), then down through each level of a tree
	- Uses QUEUE (FIFO: push/shift) to keep track of nodes to visit, deque when visited
	- Can use array with push/shift
	
	BFS Pseudo (iterative) => returns list of nodes visited
	- Create a queue and variable to store val of nodes
	- Place root node in queue
	- Loop as long as queue !empty
		- dequeue node from queue, push val of node into nodeArr
		- If left prop on node dequeued, add it to queue
		- If right prop on node dequeued, add it to the queue



		  10
	11			8
3		90	16

1 queue: [10]
visited: []

2 queue: [11, 8]
visited: [10]

3 queue: [8, 3, 90]
visited: [10, 11]

4 queue: [3, 90, 16]
visited: [10, 11, 8]

5 queue: [90, 16]
visited: [10, 11, 8, 3]

6 queue: [16]
visited: [10, 11, 8, 3, 90]

7 queue: []
visited: [10, 11, 8, 3, 90, 16]


*/

function BFS(tree) {
	if (!tree.root) return [];

	var current = tree.root,
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