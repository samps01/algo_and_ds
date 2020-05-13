/**
 * 94. Binary Tree Inorder Traversal
 * Given a binary tree, return the inorder traversal of its nodes' values.

 Example:

 Input: [1,null,2,3]
 1
  \
   2
  /
 3

 Output: [1,3,2]
 Follow up: Recursive solution is trivial, could you do it iteratively?
 */

/**
 * Iterative approach to for inorder traversal
 * step 1 - Go left till you can, adding nodes in stack.
 * step 2 - Pop out the last node.
 * step 3 - push the value to the result array
 * step 4 - Go one step right -> (if right node is present -> step 1 will repeat to add all the right node's left node to the stack)
 * @param root
 */
export default function inorderTraversalIterative(root) {
    let stack = [];
    let result = [];
    let currentNode = root;

    while (currentNode !== null || stack.length > 0) {
        while (currentNode) {
            stack.push(currentNode);
            currentNode = currentNode.left;
        }

        currentNode = stack.pop();

        result.push(currentNode.value);

        currentNode = currentNode.right;
    }

    return result;
}
