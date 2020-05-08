/**
 * Binary search tree implementation
 */

/**
 * class Node
 * @param {number} value
 */
export class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


export class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    /**
     * Method to add node to the BST
     * @param {number} value
     */
    addNode(value) {
        try {
            if (typeof value === 'number') {
                const newNode = new Node(value);
                if (this.root === null) {
                    this.root = newNode;
                } else {
                    let currentNode = this.root;

                    while (currentNode !== null) {
                        if (newNode.value < currentNode.value) {
                            if (currentNode.left === null) {
                                currentNode.left = newNode;
                                currentNode = null;
                            } else {
                                currentNode = currentNode.left;
                            }
                        } else {
                            if (currentNode.right === null) {
                                currentNode.right = newNode;
                                currentNode = null;
                            } else {
                                currentNode = currentNode.right;
                            }
                        }
                    }
                }
            } else {
                throw new Error('Please enter a valid Node value');
            }
        } catch (e) {
            console.error(e);
        }
    }

    /**
     * Method tp search using depth first search
     * @param {number} val
     * @return {boolean}
     */
    depthFirstSearch(val) {
        try {
            if (typeof val === 'number') {
                let currentNode = this.root;
                while (currentNode !== null) {
                    console.log(currentNode.value);
                    if (currentNode.value === val) {
                        return true;
                    } if (val < currentNode.value) {
                        currentNode = currentNode.left;
                    } else {
                        currentNode = currentNode.right;
                    }
                }
            } else {
                throw new Error('Please enter a valid Node value');
            }
        } catch (e) {
            console.error(e);
        }
        return false;
    }

    /**
     *
     * @param {number} val
     * @return {boolean}
     */
    breadthFirstSearch(val) {
        try {
            if (typeof val === 'number') {
                if (this.root !== null) {
                    const queue = [this.root];

                    while (queue.length !== 0) {
                        const node = queue.shift();
                        console.log(node.value);
                        if (node.value === val) {
                            return true;
                        }
                        if (node.left !== null) {
                            queue.push(node.left);
                        }
                        if (node.right !== null) {
                            queue.push(node.right);
                        }
                    }
                }
            } else {
                throw new Error('Please enter a valid Node value');
            }
        } catch (e) {
            console.log(e);
        }
        return false;
    }
}
