/**
 * @description 创建图 -- 邻里表法
 */
import { Dictionary } from '../第8章-字典和散列表/8.1.1创建字典类.js';

export default class Graph {
  /**
   * 
   * @param {boolean} isDirected 是否为有向图 
   */
  constructor(isDirected = false) {
    this.isDirected = isDirected;
    this.vertices = [];
    this.adjList = new Dictionary();
  }

  addVertex(v) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v);
      this.adjList.set(v, []);
    }
  }
  /**
   * 
   * @param {v} v 顶点参数
   * @param {any} w 顶点参数
   */
  addEdge(v, w) {
    //  v和w不存在图中，加入顶点列表
    if (!this.adjList.get(v)) {
      this.addVertex(x);
    }
    if (!this.adjList.get(w)) {
      this.addVertex(w);
    }
    //  将w加入v的邻里表
    this.adjList.get(v).push(w);
    //  无向图添加w到v的边
    if (!this.isDirected) {
      this.adjList.get(w).push(v);
    }
  }

  //  返回顶点列表
  getVertices() {
    return this.vertices;
  }

  //  返回邻接表
  getAdjList() {
    return this.adjList;
  }

  toString() {
    let s = '';
    for (let i = 0; i < this.vertices.length; i++) {
      s += `${this.vertices[i]} -> `;
      const neighbors = this.adjList.get(this.vertices[i]);
      for (let j = 0; j < neighbors.length; j++) {
        s += `${neighbors[j]}`;
      }
      s += '\n';
    }
    return s;
  }
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

// console.log(graph.toString());
