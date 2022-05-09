// Given a directed graph. The task is to do Breadth First Traversal of this graph starting from 0.
// Note: One can move from node u to node v only
// if there's an edge from u to v and find the BFS traversal of the graph starting from the 0th vertex,
// from left to right according to the graph. Also,
// you should only take nodes directly or indirectly connected from Node 0 in consideration.

// Example 1:Input:
/*          0
         /  \  \
        1    2   3
             \    
             4  */
// Output: 0 1 2 3 4

const BFS = (V, adj) => {
  let results = [0];
  let visited = new Array(V).fill(false);
  let queue = [0];
  let node = 0;
  while (queue.length > 0) {
    node = queue.shift(); // 0---> adj[node]=[1,2,3];
    if (!visited[node]) {
      let count = 0;
      visited[node] = true;
      while (adj[node].length > count) {
        queue.push(adj[node][count]);
        if (!results.includes(adj[node][count])) {
          results.push(adj[node][count]);
        }
        count++;
      }
    }
  }
  return results;
};
