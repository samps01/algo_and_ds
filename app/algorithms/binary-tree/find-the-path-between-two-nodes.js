/**
 Find distance between two nodes of a Binary Tree
 Find the distance between two keys in a binary tree,
 no parent pointers are given. Distance between two nodes
 is the minimum number of edges to be traversed to reach one node from other.
 */

import { BinarySearchTree } from '../../data-structure/binary-search-tree';


/**
 *
 * @param {number} val
 * @param {number} steps
 * @param {number[]} visitedNodesArray
 * @return {number}
 */
function findSingleNodePathFromRoot(root, val, steps, visitedNodesArray) {
    let currentNode = root;

    while (currentNode !== null) {
        if (visitedNodesArray.includes(currentNode.value)) {
            steps--;
        } else {
            visitedNodesArray.push(currentNode.value);
            steps++;
        }
        if (currentNode.value === val) {
            return steps;
        }
        if (val < currentNode.value) {
            currentNode = currentNode.left;
        } else {
            currentNode = currentNode.right;
        }
    }

    return steps;
}

/**
 *
 * @param {number} val1
 * @param {number} val2
 * @return {number}
 */
function findPathBetweenTwoNodes(val1, val2, root) {
    let result = 0;
    const visitedNodes = [];
    try {
        if (typeof val1 === 'number' && typeof val2 === 'number') {
            result = findSingleNodePathFromRoot(root, val1, result, visitedNodes);
            result = findSingleNodePathFromRoot(root, val2, result, visitedNodes);
        } else {
            throw new Error('Please insert a valid Node value');
        }
    } catch (e) {
        console.error(e);
    }
    console.log(result);
    return result;
}
const arr = [10, 5, 15, 2, 18];

const bst = new BinarySearchTree();

arr.forEach((item) => bst.addNode(item));

findPathBetweenTwoNodes(2, 15, bst.root);
