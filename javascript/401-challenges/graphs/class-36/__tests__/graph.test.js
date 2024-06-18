'use strict';

const Graph = require('../index');
const LinkedList = require('../../../linked-lists/index');

describe('Graph Class', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  test('should add a vertex', () => {
    graph.addVertex('A');
    expect(graph.vertices.head.value.head.value).toBe('A');
  });

  test('should handle adding a vertex with null value gracefully', () => {
    graph.addVertex(null);
    expect(graph.vertices.head.value.head.value).toBeNull();
  });

  test('should remove a vertex', () => {
    const vertexA = new LinkedList();
    vertexA.insert('A');
    graph.vertices.insert(vertexA);

    const vertexB = new LinkedList();
    vertexB.insert('B');
    graph.vertices.insert(vertexB);

    graph.removeVertex(vertexA);

    expect(graph.vertices.head.value.head.value).toBe('B');
  });

  test('should handle removing a non-existent vertex gracefully', () => {
    const vertexA = new LinkedList();
    vertexA.insert('A');
    graph.vertices.insert(vertexA);

    const vertexB = new LinkedList();
    vertexB.insert('B');
    graph.vertices.insert(vertexB);

    const vertexC = new LinkedList();
    vertexC.insert('C');

    graph.removeVertex(vertexC);

    expect(graph.vertices.head.value.head.value).toBe('B');
    expect(graph.vertices.head.next.value.head.value).toBe('A');
  });

  test('should add an edge between two vertices', () => {
    const vertexA = new LinkedList();
    vertexA.insert('A');
    graph.vertices.insert(vertexA);

    const vertexB = new LinkedList();
    vertexB.insert('B');
    graph.vertices.insert(vertexB);

    graph.addEdge(vertexA, vertexB);

    expect(vertexA.head.next.value).toBe(vertexB);
    expect(vertexB.head.next.value).toBe(vertexA);
  });

  test('should handle adding an edge with a null vertex gracefully', () => {
    const vertexA = new LinkedList();
    vertexA.insert('A');
    graph.vertices.insert(vertexA);

    graph.addEdge(vertexA, null);

    expect(vertexA.head.next).toBeNull();
  });

  test('should remove an edge between two vertices', () => {
    const vertexA = new LinkedList();
    vertexA.insert('A');
    graph.vertices.insert(vertexA);

    const vertexB = new LinkedList();
    vertexB.insert('B');
    graph.vertices.insert(vertexB);

    graph.addEdge(vertexA, vertexB);
    graph.removeEdge(vertexA, vertexB);

    expect(vertexA.head.next).toBeNull();
    expect(vertexB.head.next).toBeNull();
  });

  test('should handle removing an edge with a null vertex gracefully', () => {
    const vertexA = new LinkedList();
    vertexA.insert('A');
    graph.vertices.insert(vertexA);

    const vertexB = new LinkedList();
    vertexB.insert('B');
    graph.vertices.insert(vertexB);

    graph.addEdge(vertexA, vertexB);
    graph.removeEdge(vertexA, null);

    expect(vertexA.head.next.value).toBe(vertexB);
    expect(vertexB.head.next.value).toBe(vertexA);
  });

  test('should perform breadth-first traversal', () => {
    const vertexA = new LinkedList();
    vertexA.insert('A');
    graph.vertices.insert(vertexA);

    const vertexB = new LinkedList();
    vertexB.insert('B');
    graph.vertices.insert(vertexB);

    const vertexC = new LinkedList();
    vertexC.insert('C');
    graph.vertices.insert(vertexC);

    graph.addEdge(vertexA, vertexB);
    graph.addEdge(vertexB, vertexC);

    const result = graph.breadthFirstPrint(vertexA);
    expect(result).toEqual(['A', 'B', 'C']);
  });

  test('should handle breadth-first traversal from a null vertex gracefully', () => {
    const result = graph.breadthFirstPrint(null);
    expect(result).toEqual([]);
  });
});
