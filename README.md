# Directed Aycyclic Graphs

Learning from: https://hackernoon.com/the-javascript-developers-guide-to-graphs-and-detecting-cycles-in-them-96f4f619d563  

# Basics

Graphs are composed of basically two things  
 - Vertices
   - the "things" on the graph: integer, object, website, etc
 - Edges
   - Connect a pair of _vertices_  
    
# Graphs can be
## _weighted_ or _unweighted_
 - whether the edges are labeled with values, if they are, it's _weighted_
## _directed_ or _undirected_
 - whether the edge behaves like a bridge _(undirected)_ or like a bowling lane _(directed)_
## _acyclic_ or _cyclic_
 - whether a cycle exists in a graph

# Two main ways to represent a graph
 - An _adjacency list_
   - a collection of arrays or objs, associated with each node
```
{
    a: [b,c,d],
    b: [c,f],
    d: [e],
    e: [a,f],
    f: [a, c, d, e]
}
```

 - An _adjacency matrix_
  - 2 dimensional array where edges between vertices are represented with a 1
```
[ 
  [0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
  [1, 0, 0, 0, 1, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 1, 0],
  [0, 1, 1, 1, 0, 1, 0, 0, 0, 1],
  [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 1, 0, 0] 
]
```


# 2 Ways to Traverse a Graph

- Breadth First
  - Each child is visited before any of that child's children are visited
- Depth First
  - We follow a sequence of vertices connected by edges until we can't any more before continuing to the original vertex's next child

## Note:
 - When detecting cycles, we have to keep track of _back edges_
   - These are the vertices we visited to get us to our current vertex
