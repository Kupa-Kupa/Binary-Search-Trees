import { Tree } from './binary-search-tree.js';
import { prettyPrint } from './pretty-print.js';

function driver(arr) {
  const tree = new Tree(arr);

  prettyPrint(tree.root);

  console.log('isBalanced:', tree.isBalanced());

  console.log('levelOrder:', tree.levelOrder());
  console.log('preOrder:', tree.preOrder());
  console.log('inOrder:', tree.inOrder());
  console.log('postOrder:', tree.postOrder());

  tree.insert(105);
  tree.insert(698);
  tree.insert(156);
  tree.insert(437);

  prettyPrint(tree.root);

  console.log('isBalanced:', tree.isBalanced());

  console.log('tree rebalanced:');
  tree.rebalance();

  prettyPrint(tree.root);

  console.log('isBalanced:', tree.isBalanced());

  console.log('levelOrder:', tree.levelOrder());
  console.log('preOrder:', tree.preOrder());
  console.log('inOrder:', tree.inOrder());
  console.log('postOrder:', tree.postOrder());
}

const array = [7, 13, 25, 36, 45, 85, 98];
driver(array);
