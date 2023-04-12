import { mergeSort } from './merge-sort.js';

class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    const treeSet = new Set([...array]);
    const uniqueArray = [...treeSet];
    // must use this to call the method
    this.root = this.buildTree(mergeSort(uniqueArray));
  }

  buildTree(array, start = 0, end = array.length - 1) {
    if (start > end) return null;

    const midpoint = Math.floor((start + end) / 2);
    const node = new Node(array[midpoint]);

    node.left = this.buildTree(array, start, midpoint - 1);
    node.right = this.buildTree(array, midpoint + 1, end);

    return node;
  }

  preOrder(root = this.root) {
    if (root === null) return [];

    return [
      root.data,
      ...this.preOrder(root.left),
      ...this.preOrder(root.right),
    ];

    /*
    const leftArray = this.preOrder(root.left);
    const rightArray = this.preOrder(root.right);

    const preorderArray = [root.data].concat(leftArray, rightArray);

    return preorderArray;
    */
  }

  inOrder(arr = [], root = this.root) {
    if (root === null) return;

    this.inOrder(arr, root.left);
    arr.push(root.data);
    this.inOrder(arr, root.right);

    return arr;
  }

  postOrder(root = this.root) {
    if (root === null) return [];

    return [
      ...this.postOrder(root.left),
      ...this.postOrder(root.right),
      root.data,
    ];
  }
}

export { Node, Tree };

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

const a1 = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
// const a1 = [1, 2, 3, 4];
const bst = new Tree(a1);
prettyPrint(bst.root);
console.log(bst.preOrder());
console.log(bst.inOrder());
console.log(bst.postOrder());
