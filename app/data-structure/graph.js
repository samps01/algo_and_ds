/**
 * Graph implementation using adjacency list
 */
class Graph {
    constructor() {
        this.graph = {};
    }

    addVertices(node) {
        if (!{}.hasOwnProperty.call(this.graph, node)) {
            this.graph[node] = [];
        }
    }

    addEdges(source, destination) {
        if ({}.hasOwnProperty.call(this.graph, source) && {}.hasOwnProperty.call(this.graph, destination)) {
            if (!this.graph[source].includes(destination)){
                this.graph[source].push(destination);
            }
            // if (!this.graph[destination].includes(source)){
            //     this.graph[destination].push(source);
            // }
        }
    }

    printGraph() {
        console.log(this.graph);
    }

    searchPath(source, destination, searchTechnique = "dfs") {
        if (searchTechnique === 'dfs') {
            this.dfs(source, destination);
        } else if (searchTechnique === 'bfs') {
            this.bfs(source, destination);
        }
    }

    dfs(node, endNode = "") {
        const stack = [];
        const visitedNode = [];
        if (this.graph[node]) {
            stack.push(node);
        }
        while(stack.length !== 0) {
            let currentNode = stack.pop();
            if (endNode && currentNode === endNode) {
                visitedNode.push(currentNode);
                break;
            }

            let nodes = this.graph[currentNode];
            for (let i = 0; i < nodes.length; i++) {
                if (!visitedNode.includes(nodes[i])) {
                    stack.push(nodes[i]);
                }
            }
            if (!visitedNode.includes(currentNode)){
                visitedNode.push(currentNode);
            }
        }
        console.log(visitedNode);
    }

    bfs(node, endNode = "") {
        const queue = [];
        const visitedNodes = [];
        if (this.graph[node]) {
            queue.push(node);
        }

        while(queue.length !== 0) {
            let currentNode = queue.shift();
            if (endNode && currentNode === endNode) {
                visitedNodes.push(currentNode);
                break;
            }
            if (!visitedNodes.includes(currentNode)) {
                visitedNodes.push(currentNode);
            }
            let nodes = this.graph[currentNode];
            for(let i = 0; i < nodes.length; i++){
                if (!visitedNodes.includes(nodes[i])) {
                    queue.push(nodes[i]);
                }
            }
        }
        console.log(visitedNodes);
    }
}


const graph = new Graph();

// let places = ["Miami", "NYC", "Charlotte", "Flagstaff", "Orlando", "Tampa"]
//
// places.forEach((place) => graph.addVertices(place));

// graph.addEdges("Miami", "Flagstaff");
// graph.addEdges("Miami", "NYC");
// graph.addEdges("NYC", "Charlotte");
// graph.addEdges("Charlotte", "Miami");
// graph.addEdges("Charlotte", "Orlando");
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');
const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];
let g = new Graph();

airports.forEach(airport => g.addVertices(airport));


routes.forEach(route => {
    g.addEdges(route[0], route[1]);
    g.addEdges(route[1], route[0])});
g.printGraph();

g.searchPath("LAX", "BKK", "bfs");
g.searchPath("LAX", "BKK", "dfs");
//g.dfs("A");
// g.bfs("A");

