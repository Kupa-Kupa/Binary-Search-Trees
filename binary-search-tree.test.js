import { Tree, Node } from './binary-search-tree.js';

describe('Binary Search Tree Tests', () => {
  test('buildTree returns tree:', () => {
    const a1 = [1, 2, 3, 4];
    const BST = new Tree(a1);

    expect(BST).toEqual({
      root: {
        data: 2,
        left: { data: 1, left: null, right: null },
        right: {
          data: 3,
          left: null,
          right: { data: 4, left: null, right: null },
        },
      },
    });
  });

  test('preOrder returns array sorted in preOrder:', () => {
    const a1 = [1, 2, 3, 4];
    const BST = new Tree(a1);

    expect(BST.preOrder()).toEqual([2, 1, 3, 4]);
  });

  test('inOrder returns array sorted in inOrder:', () => {
    // const a1 = [1, 2, 3, 4];
    const a1 = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7];
    const BST = new Tree(a1);

    expect(BST.inOrder()).toEqual([1, 3, 4, 5, 7, 8, 9, 23]);
  });

  test('postOrder returns array sorted in postOrder:', () => {
    const a1 = [1, 2, 3, 4];
    const BST = new Tree(a1);

    expect(BST.postOrder()).toEqual([1, 4, 3, 2]);
  });
});
