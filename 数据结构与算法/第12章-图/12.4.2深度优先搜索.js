import Graph from './12.3创建图.js';

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
// 深度优先算法
const depthFirseSearch = (graph, callback) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initialzeColor(vertices);
  for (let i = 0; i < vertices.length; i++) {
    // 顶点未被访问继续
    if (color[vertices[i]] === Colors.WHITE) {
      // 调用私有递归函数
      depthFirseSearchVisit(vertices[i], color, adjList, callback);
    }
  }
}

const depthFirseSearchVisit = (u, color, adjList, callBack) => {
  // 节点标记已访问
  color[u] = Colors.GREY;
  // 执行回调，输出已访问过的函数
  if (callBack) callBack(u);
  // 获取获取顶点U的邻点
  const neighbors = adjList.get(u);
  for (let i = 0; i < neighbors.length; i++) {
    // 获取U的邻点w
    const w = neighbors[i];
    if (color[w] === Colors.WHITE) {
      // 递归
      depthFirseSearchVisit(w, color, adjList, callBack);
    }
  }
  color[u] = Colors.BLACK;
}

// depthFirseSearch(graph, printVertex);

// 探索深度优先算法 构建森林，源顶点并输出两个数组
export const DFS = (graph) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initialzeColor(vertices);
  // d 顶点u的发现时间
  // f 顶点U被标注黑色时的完成探索时间
  // p 顶点u的前溯点
  const d = {};
  const f = {};
  const p = {};
  // 声明变量追踪发现时间和完成探索时间
  const time = { count: 0 }; 
  // 初始化数据f d p
  for (let i = 0; i < vertices.length; i++) {
    f[vertices[i]] = 0;
    d[vertices[i]] = 0;
    p[vertices[i]] = null;
  }
  for (let i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] === Colors.WHITE) {
      DFSVisit(vertices[i], color, d, f, p, time, adjList);
    }
  }
  return {
    discovery: d,
    finished: f,
    predecessors: p
  }
}

export const DFSVisit = (u, color, d, f, p, time, adjList) => {
  // 顶点u变成灰色
  color[u] = Colors.GREY;
  // 顶点u时间++
  d[u] = ++time.count;
  // 邻点集合
  const neighbors = adjList.get(u);
  // 邻点遍历
  for (let i = 0; i < neighbors.length; i++) {
    // 获取U的邻点w
    const w = neighbors[i];
    // 未探索继续
    if (color[w] === Colors.WHITE) {
      // 存入前溯点
      p[w] = u;
      // 递归
      DFSVisit(w, color, d, f, p, time, adjList);
    }
  }
  color[u] = Colors.BLACK;
  f[u] = ++time.count;
}

// const graph = new Graph();
// const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
// for (let i = 0; i < myVertices.length; i++) {
//   graph.addVertex(myVertices[i]);
// }
// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('A', 'D');
// graph.addEdge('C', 'D');
// graph.addEdge('C', 'G');
// graph.addEdge('D', 'G');
// graph.addEdge('D', 'H');
// graph.addEdge('B', 'E');
// graph.addEdge('B', 'F');
// graph.addEdge('E', 'I');

// console.log(DFS(graph));