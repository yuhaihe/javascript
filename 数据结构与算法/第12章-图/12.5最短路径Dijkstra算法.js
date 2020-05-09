let graph = [
  [0, 2, 4, 0, 0, 0],
  [0, 0, 2, 4, 2, 0],
  [0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 2],
  [0, 0, 0, 3, 0, 2],
  [0, 0, 0, 0, 0, 0]
];

// 无限大

const INF = Number.MAX_SAFE_INTEGER;

const diijkstra = (graph, src) => {
  // 距离数组
  const dist = [];
  // 是否访问过数组
  const visited = [];
  const { length } = graph;
  for (let i = 0; i < length; i++) {
    dist[i] = INF;
    visited[i] = false;
  }
  // 设置源顶点到自己距离为0
  dist[src] = 0;
  for (let i = 0; i < length - 1; i++) {
    // 选出距离最近的点
    const u = minDistance(dist, visited);
    console.log(u)
    visited[u] = true;
    for (let v = 0; v < length; v++) {
      if (!visited[v] && graph[u][v] !== 0 && dist[u] !== INF && dist[u] + graph[u][v] < dist[v]) {
        dist[v] = dist[u] + graph[u][v]
      }
    }
  }
  return dist;
}

const minDistance = (dist, visited) => {
  let min = INF;
  let minIndex = -1;
  for (let v = 0; v < dist.length; v++) {
    if (visited[v] === false && dist[v] <= min) {
      min = dist[v];
      minIndex = v;
    }
  }
  return minIndex;
};

console.log(diijkstra(graph, 0))