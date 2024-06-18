'use strict';

const LinkedList = require('../../linked-lists/index');
const { Queue } = require('../../stacks-and-queues/class-10/index');

class Graph {
  constructor() {
    this.vertices = new LinkedList();
  }

  addVertex(value) {
    const vertex = new LinkedList();
    vertex.insert(value);
    this.vertices.insert(vertex);
  }

  removeVertex(vertex) {
    if (!vertex) return;

    let current = this.vertices.head;
    if (current && current.value === vertex) {
      this.vertices.head = current.next;
    }

    while (current && current.next) {
      if (current.next.value === vertex) {
        current.next = current.next.next;
      } else {
        let adjacencyCurrent = current.value.head;
        while (adjacencyCurrent && adjacencyCurrent.next) {
          if (adjacencyCurrent.next.value === vertex) {
            adjacencyCurrent.next = adjacencyCurrent.next.next;
            break;
          }
          adjacencyCurrent = adjacencyCurrent.next;
        }
      }
      current = current.next;
    }
  }

  addEdge(vertex1, vertex2) {
    if (!vertex1 || !vertex2) return;

    vertex1.append(vertex2);
    vertex2.append(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    if (!vertex1 || !vertex2) return;

    function removeDirectionalEdge(vertexFrom, vertexTo) {
      let current = vertexFrom.head;
      while (current && current.next) {
        if (current.next.value === vertexTo) {
          current.next = current.next.next;
          break;
        }
        current = current.next;
      }
    }
    removeDirectionalEdge(vertex1, vertex2);
    removeDirectionalEdge(vertex2, vertex1);
  }

  breadthFirstPrint(startVertex) {
    if (!startVertex) return [];

    const values = [];
    const visitNodes = new Set();
    const vertexQueue = new Queue();
    vertexQueue.enqueue(startVertex);
    visitNodes.add(startVertex);

    while (vertexQueue.peek()) {
      const vertex = vertexQueue.dequeue();
      values.push(vertex.head.value);

      let current = vertex.head;
      while (current && current.next) {
        if (!visitNodes.has(current.next.value)) {
          vertexQueue.enqueue(current.next.value);
          visitNodes.add(current.next.value);
        }
        current = current.next;
      }
    }
    return values;
  }
}

module.exports = Graph;
