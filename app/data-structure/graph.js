/**
 * Graph implementation using adjacency list
 */
class Graph {
    constructor() {
        this.graph = {};
    }

    addVertices(node) {
        if ({}.hasOwnProperty.call(this.graph, node)) {
            this.addEdges();
        }
    }

    addEdges() {

    }
}


const graph = new Graph();

graph.addVertices();
