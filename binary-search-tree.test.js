import { Tree, Node } from './binary-search-tree.js';

describe('Binary Search Tree Tests', () => {
  test('generateBST returns sorted array:', () => {
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

    expect(BST.preOrder()).toEqual([2, 1, 3, 4]);
  });
});
