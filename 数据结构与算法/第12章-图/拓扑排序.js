import Graph from './12.3创建图.js';
import { DFS } from './12.4.2深度优先搜索.js';

const graph = new Graph(true);
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F'];
for (let i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'F');
graph.addEdge('B', 'E');
graph.addEdge('B', 'D');
graph.addEdge('F', 'E');

const result = DFS(graph);
console.log(result.finished)
const fTimes = result.finished;
let s = '';
for (let count = 0; count < myVertices.length; count++) {
  let max = 0;
  let maxName = null;
  for (let i = 0; i < myVertices.length; i++) {
    if (fTimes[myVertices[i]] > max) {
      max = fTimes[myVertices[i]];
      maxName = myVertices[i];
    }
  }
  s += ' - ' + maxName;
  delete fTimes[maxName];
}
console.log(s)