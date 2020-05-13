import { describe } from 'mocha';

import { BinarySearchTree, Node } from "../../../data-structure/binary-search-tree";
import BSTIterator from "../binary-search-tree-iterator";
import inorderTraversalIterative from "../binary-tree-inorder-traversal";

const { assert, expect } = require('chai');

describe('Binary Tree', () => {
   describe('BSTIterator', () => {
     const arr = [7, 3, 15, 9, 20];
     const tree = new BinarySearchTree();

     arr.forEach(value => tree.addNode(value));

     const bstIterator = new BSTIterator(tree);
     const inputs = {
         input: ["next","next","hasNext","next","hasNext","next","hasNext","next","hasNext"],
         output: [3,7,true,9,true,15,true,20,false]
     }
     it(`Should iterate over the tree  and return min val for each method call,
        input - ${inputs.input}
        expected output - ${inputs.output}`, () => {
         const outputArr = [];
         inputs.input.forEach(methodName => outputArr.push(bstIterator[methodName]()));
         expect(outputArr).to.eql(inputs.output);
     });
   });

   describe('Inorder traversal  iterative', () => {
       const root = new Node(1);
       root.right = new Node(2);
       root.right.left = new Node(3);

       const output = [1, 3, 2];

       it(`Should return ${output} for [1, null, 2, 3]`, () => {
          const result = inorderTraversalIterative(root);
          expect(result).to.eql(output);
       });


   });
});