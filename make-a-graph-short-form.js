export const Graph = () => ({
  addVertex: vertex => list => Object.assign(list, { [vertex]: [] }),
  addEdge: vertexes => list => {
    list[vertexes[0]].push(vertexes[1])
    return list
  },
    // depthFirstSearch: list => {
  //   const nodes = Object.keys(list);
  //   const visited = {};
  //   nodes.forEach((x, i) =>
  // }
});
const flip = fn => a => b => fn(b)(a);

const adjacentList = {}
const graph = Graph()
const vertices = ['A', 'B', 'C', 'D', 'E']
const addVertexFlipped = flip(graph.addVertex)
vertices.map(addVertexFlipped(adjacentList))
const edges = [
  ['A', 'B'],
  ['D', 'E'],
  ['C', 'E'],
  ['A', 'D'],
  ['A', 'C'],
  ['E', 'B'],
  ['D', 'B'],
  ['E', 'A']]
const addEdgeFlipped = flip(graph.addEdge)
edges.map(addEdgeFlipped(adjacentList))
adjacentList

