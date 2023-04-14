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
    // create set from array and then create new unique array
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

  insert(value, root = this.root) {
    if (root === null) {
      root = new Node(value);
      return;
    }

    if (value === root.data) {
      console.log(`${value} already exists in the tree. Nothing inserted.`);
      return;
    } else if (value < root.data) {
      if (root.left === null) {
        root.left = new Node(value);
        return;
      } else {
        this.insert(value, root.left);
      }
    } else {
      if (root.right === null) {
        root.right = new Node(value);
        return;
      } else {
        this.insert(value, root.right);
      }
    }
  }

  delete(value) {
    this.root = this.deleteNode(value);
  }
  // can't delete root node when left or right subtrees are null
  // can't delete tree which is a single node
  // not sure how this can be fixed?
  deleteNode(value, root = this.root) {
    if (root === null) return root;

    if (value < root.data) {
      root.left = this.deleteNode(value, root.left);
    } else if (value > root.data) {
      root.right = this.deleteNode(value, root.right);
    } else {
      /*if (root.left === null && root.right === null) {
        root = null;
        return root;
      } else*/ if (root.left === null) {
        return root.right;
      } else if (root.right === null) {
        return root.left;
      }

      const minRightSubTree = (root) => {
        let min = root.data;

        while (root.left !== null) {
          min = root.left.data;
          root = root.left;
        }

        return min;
      };

      root.data = minRightSubTree(root.right);

      root.right = this.deleteNode(root.data, root.right);
    }
    return root;
  }

  /*
  The below version doesn't remove the root node when the left or 
  right subtree is null
   */
  /*
  delete(value, root = this.root) {
    if (root === null) return root;

    if (value < root.data) {
      root.left = this.delete(value, root.left);
      return root;
    } else if (value > root.data) {
      root.right = this.delete(value, root.right);
      return root;
    } else {
      // what about when removing root node there is no root.left?
      // fails to remove node

      if (root.left === null) {
        let temp = root.right;
        return temp;
      } else if (root.right === null) {
        let temp = root.left;
        return temp;
      } else {
        let successorParent = root;
        let successor = root.right;

        while (successor.left !== null) {
          successorParent = successor;
          successor = successor.left;
        }

        if (successorParent !== root) {
          successorParent.left = successor.right;
        } else {
          successorParent.right = successor.right;
        }

        root.data = successor.data;

        return root;
      }
    }
  }
  */

  find(value, root = this.root) {
    if (root === null) return root;

    if (value < root.data) {
      return this.find(value, root.left);
    } else if (value > root.data) {
      return this.find(value, root.right);
    } else {
      return root;
    }
  }

  levelOrder(root = this.root) {}

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

  height(root = this.root) {}

  depth(root = this.root) {}

  isBalanced(root = this.root) {}

  rebalance(root = this.root) {}
}

export { Node, Tree };

/*
PrettyPrint function that console logs visual representation of Tree
*/
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

/*
Quick Testing: node binary-search-tree.js
*/

// const a1 = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
// const a1 = [1, 2, 3, 4];
// const a1 = [1];
// const bst = new Tree(a1);
// prettyPrint(bst.root);
// bst.insert(6);
// prettyPrint(bst.root);
// bst.insert(0);
// prettyPrint(bst.root);
// bst.insert(1);
// prettyPrint(bst.root);
// console.log(bst.preOrder());
// console.log(bst.inOrder());
// console.log(bst.postOrder());

/*
Delete testing
*/

// const a1 = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
// const a1 = [1, 2, 3, 4];
// const a1 = [1];
// const bst = new Tree(a1);
// prettyPrint(bst.root);

// prettyPrint(bst.root);
// console.log(bst.delete(1));
// console.log(bst.delete(2));

// console.log(bst.deleteNode(1));
// console.log(bst.deleteNode(2));
// console.log(bst.delete(3));
// console.log(bst.delete(4));
// console.log(bst.delete(5));
// console.log(bst.delete(8));

/*
// https://github.com/tylphe/binary-search-trees was setting root on the
// return value of Tree.delete(val) so tree was updating to remove the
// root node when there was no left/right subtree, even if their code didnt 
// change bst.root like mine doesn't here
*/
// prettyPrint(bst.delete(2));
// prettyPrint(bst.root);

/*
Find testing
*/

const a1 = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
// const a1 = [1, 2, 3, 4];
// const a1 = [1];
const bst = new Tree(a1);
prettyPrint(bst.root);
console.log(bst.find(33));
