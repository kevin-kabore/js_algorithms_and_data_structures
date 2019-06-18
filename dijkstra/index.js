/*
  Dijkstra's Algorithm: Shortest path from vertex A to B in a graph. returns array with nodes in order
  - Should accept a starting and ending vertex
  - Create an object (distances) and set each key to be every vertex in the adjacencyList
    - with a priority of inifinity, except for starting index which will be 0
  - After setting a value in the distances object, 
    add each vertex with a priority of inifinity to the priority queue, 
    except the starting vertex, which will have priority 0 because that's where we begin
  - Create another object called previous and set each key to be every vertex in the adjacencyList
    with a value of null
  - Start looping as long as there is anything in the priority queue
    - dequeue a vertex from the priority queue
    - if that vertex is the samme as the ending vertex - done!
    - Otherwise: loop through each value in the adjacencyList at that vertex
      - Calculate the distance to that vertex from the starting vertex
      - if the distance is less than what is currently stored in our distances object
        - update the distances object with new lower distances
        - update the previous object to contain that vertex
        - enqueue the vertex with the total distance from the start node
 */

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({
      node: vertex2,
      weight
    });
    this.adjacencyList[vertex2].push({
      node: vertex1,
      weight
    });
  }
  /*
                    Dijkstra's Algorithm: Shortest path from vertex A to B in a graph. returns array with nodes in order
                    - Should accept a starting and ending vertex
                    - Create an object (distances) and set each key to be every vertex in the adjacencyList
                      - with a priority of inifinity, except for starting index which will be 0
                    - After setting a value in the distances object, 
                      add each vertex with a priority of inifinity to the priority queue, 
                      except the starting vertex, which will have priority 0 because that's where we begin
                    - Create another object called previous and set each key to be every vertex in the adjacencyList
                      with a value of null
                    - Start looping as long as there is anything in the priority queue
                      - dequeue a vertex from the priority queue
                      - if that vertex is the samme as the ending vertex - done!
                      - Otherwise: loop through each value in the adjacencyList at that vertex
                        - Calculate the distance to that vertex from the starting vertex
                        - if the distance is less than what is currently stored in our distances object
                          - update the distances object with new lower distances
                          - update the previous object to contain that vertex
                          - enqueue the vertex with the total distance from the start node
                   */
  // start and finish are verteces
  shortestPath(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = []; // to return at end
    let smallest;

    // iterate over adjacencyList object
    // build up initial state with priorities: inifinity
    for (let vertex in adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        // add to priority queue
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        // add to priority queue
        nodes.enqueue(vertex, Infinity);
      }
      //set every vertex in previous to null
      previous[vertex] = null;
    }
    // as long as there are nodes to visit in priority queue
    while (nodes.values.length) {
      smallest = nodes.dequeue().val; // val is the key, not priority value
      if (smallest === finish) {
        // DONE
        // BUILD UP PATH FROM Previous object TO RETURN AT END
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      // smallest looks something like "A"
      if (smallest || distances[smallest] !== Infinity) {
        // this.adjacencyList[smallest] will return array of edges
        for (let neighbor in this.adjacencyList[smallest]) {
          // looping over will give us neighbor = index value so need
          // find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          // Calculate new distance to neignboring node
          let candidateSum = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidateSum < distances[nextNeighbor]) {
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            // updating previous - how we got to neighbor
            previous[nextNeighbor] = smallest;
            // enque in PriorityQueue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    // include the smallest value and reverse the array
    return path.concat(smallest).reverse();
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({
      val,
      priority
    });
    this.sort();
  }

  dequeue(val) {
    return this.values.shift(); // remove from beginning
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}
