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
		this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
		this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
	}
}