import Queue from '../第5章-队列和双端队列/5.1.1创建队列.js';
import Graph from './12.3创建图.js';
import Stack from '../第4章-栈/stack-array.js';

const Colors = {
  WHITE: 0,
  GREY: 1,
  BLACK: 2
};

const initialzeColor = vertices => {
  const color = {};
  for (let i = 0; i < vertices.length; i++) {
    color[vertices[i]] = Colors.WHITE;
  }
  return color;
}

// 广度优先算法
export const breadthFirstSearch = (graph, startVertex, callBack) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  // 函数初始化为白色，表示未访问
  const color = initialzeColor(vertices);
  // 新建队列
  const queue = new Queue();
  // 起始顶点加入队列
  queue.enqueue(startVertex);
  // 判断条件队列非空
  while (!queue.isEmpty()) {
    // 从队列中移除一个顶点 u
    const u = queue.dequeue();
    // 获取u顶点的邻里表
    const neighbors = adjList.get(u);
    // 此顶点标注灰色，代表已进行，但未完成
    color[u] = Colors.GREY;
    // 遍历u顶点的邻里表
    for (let i = 0; i < neighbors.length; i++) {
      // 获得u顶点的邻里表顶点 w
      const w = neighbors[i];
      // w 状态为未访问继续
      if (color[w] === Colors.WHITE) {
        // 此顶点标注灰色，代表已进行，但未完成
        color[w] = Colors.GREY;
        // w顶点加入队列
        queue.enqueue(w);
      }
    }
    // 已完成探索，u状态改变
    color[u] = Colors.BLACK;
    // 回调函数
    if (callBack) {
      callBack(u);
    }
  }
}

// 寻找最短路径应用
const BFS = (graph, startVertex) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initialzeColor(vertices); // 函数初始化为白色，表示未访问
  const queue = new Queue(); // 新建队列
  queue.enqueue(startVertex); // 起始顶点加入队列
  const distances = {};  // 表示距离
  const predecessors = {}; // 表示前溯点

  // 遍历顶点
  for (let i = 0; i < vertices.length; i++) {
    distances[vertices[i]] = 0;
    predecessors[vertices[i]] = null;
  }

  while (!queue.isEmpty()) {
    const u = queue.dequeue();// 从队列中移除一个顶点 u
    const neighbors = adjList.get(u);// 获取u顶点的邻里表
    color[u] = Colors.GREY;// 此顶点标注灰色，代表已进行，但未完成
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i]; // 获得u顶点的邻里表顶点 w
      // w 状态为未访问继续
      if (color[w] === Colors.WHITE) {
        // 此顶点标注灰色，代表已进行，但未完成
        color[w] = Colors.GREY;
        distances[w] = distances[u] + 1;
        predecessors[w] = u;
        // w顶点加入队列
        queue.enqueue(w);
      }
    }
    color[u] = Colors.BLACK;
  }

  return {
    distances, predecessors
  }
}

const graph = new Graph();
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (let i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

const printVertex = value => console.log('Visited vertex' + value);
// breadthFirstSearch(graph, myVertices[0], printVertex);

const shortestPathA = BFS(graph, myVertices[0]);
// console.log(shortestPathA)

// 最短路径
const fromVertex = myVertices[0]; // a
for (let i = 1; i < myVertices.length; i++) {
  const toVertex = myVertices[i]; // e
  const path = new Stack();
  // 追溯toVertex到fromVertex路径，直到追溯到A停止
  for (let v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) {
    path.push(v);
  }
  // A添加进栈
  path.push(fromVertex);
  let s = path.pop();
  while (!path.isEmpty()) {
    s += ' - ' + path.pop();
  }
  console.log(s);
}


