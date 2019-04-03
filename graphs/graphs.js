/*

	Graphs
		Adjacency list (Best because most real world graphs are sparse: not many connections)
		- Add Vertex: O(1)
		- Add Edge: O(1)
		- Remove Vertex: O(|v| + |e|)
		- Remove Edge: O(|e|)
		- Query: O(|v| + |e|)
		- Storage: O(|v| + |e|)
		- Less space in sparse (lots of vertices but little connections) graphs
		- Faster to iterate over all edges
		- Slower to lookup specific edge

		Adjacency matrix
		- Add Vertex: O(|v^2|)
		- Add Edge: O(1)
		- Remove Vertex: O(|v^2|) 
		- Remove Edge: O(1)
		- Query: O(1)
		- Storage: O(|v^2|)
		- More space in sparse (lots of vertices but little connections) graphs
		- Slower to iterate over all edges
		- Faster to lookup specific edge

	Properties
	- Has Vertices (nodes) and Edges(Connections)
	- Can be Weighted / Unweighted
		- Weighted: Edges have values associated with them. Ex map
		- Unweighted: No values to edges
	- Directed/Undirected
		- Directed: Edges have direction. Can be unidirectional or both ways
		- Undirected: No particular direction. Can be reached from either vertex in the connection
	- Common ways to implement are:
		- Adjacency Matrix:
		- Adjacency List:
*/

/*
	Undirected Graph
	- constructor has adjacencyList object
	- AddVertex(vertex)
		- Add Vertext to adjacencyList
	- AddEdge(vertex1, vertex2)
		- Find the adjacencyList key of vertex1 and push vertex2 to its array
		- Find the adjacencyList key of vertex2 and push vertex1 to its array
	- RemoveEdge(vertex1, vertex2)
		- Reassign key of vertex1 to be an array that does not contain vertex2
		- Reassign key of vertex2 to be an array that does not contain vertex1
	- RemoveVertex(vertex)
		- Loop as long as there are any vertices in the adjacency list for that vertex
		- Inside loop, call removeEdge function with the vertex we are removing and any values
		in the adjacency list for that vertex
		- delete the key in the adjacency list for that vertex
	- depthFirstRecursive(vertex) 
		- Create a list to store the end result, to be returned at the very end
		- Create an object to store visited vertices
		- Create helper function which accepts a vertex
			- Base
				If vertex is empty: return 
			- Recursive Case
				Add vertex to visited object and push to results list/array
				Mark vertex as visited
				Loop over all values in the adjacencyList for that vertex:
					if value/vertex is not visited:
						recursiveliy call DFS on value/vertex
		- Invoke helper function with starting vertex
		- Return result array
	- depthFirstIterative(start)
		- let S be a stack
		- S.push(start)
		- While S is not empty
			vertex = S.pop()
			if vertex is not visited
				visit, add to result list, add to visited list
				for each neighbor, N do S.push(N)
*/
class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}

	addEdge(v1, v2) {
		if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
			this.adjacencyList[v1].push(v2);
			this.adjacencyList[v2].push(v1);
		}
	}

	removeEdge(vertex1, vertex2) {
		
		// this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(function(v) {
		// 	return v !== vertex2;
		// });
		// keep everything in the array that is not vertex2 and vice versa
		this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
		this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
	}

	removeVertex(vertex) {
		while(this.adjacencyList[vertex].length) {
			const adjacentVertex = this.adjacencyList[vertex].pop();
			this.removeEdge(vertex, adjacentVertex);
		}
		delete this.adjacencyList[vertex];

		// Similar solution
		// this.adjacencyList[vertex].forEach(adjacentVertex => this.removeEdge(vertex, adjacentVertex));
		// delete this.adjacencyList[vertex];
	}

	depthFirstRecursive(start){
		var results = [],
			visited = {},
			adjacencyList = this.adjacencyList;
		
		(function DFS(vertex) {
			if (!vertex) return;
			
			visited[vertex] = true;
			results.push(vertex);
			adjacencyList[vertex].forEach((v) => {
				if (!visited[v]) DFS(v);
			});
		}(start));
		
		// var that = this;
		// (function DFS(vertex) {
		// 	if (!that.adjacencyList[vertex].length) return;

		// 	if (!visited[vertex]) {
		// 		visited[vertex] = true;
		// 		results.push(vertex);
		// 		that.adjacencyList[vertex].forEach((v) => {
		// 			if (!visited[v]) DFS(v);
		// 		});
		// 	} 
		// }(vertex, that));

		
		// DFS(vertex);
		// console.log(visited);
		return results;
	}

	depthFirstIterative(start) {
		var stack = [start],
			result = [],
			visited = {},
			currentVertex;

		visited[start] = true;

		while (stack.length) {
			currentVertex = stack.pop();
			result.push(currentVertex);

			this.adjacencyList[currentVertex].forEach(v => {
				if (!visited[v]) {
					visited[v] = true;
					stack.push(v)	
				}
			});
		}

		return result;
	}
}

var g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A","B");
g.addEdge("A","C");
g.addEdge("B","D");
g.addEdge("C","E");
g.addEdge("D","E");
g.addEdge("D","F");
g.addEdge("E","F");

g.depthFirstRecursive("A");
g.depthFirstIterative("A");