import { merge, mergeSort } from './merge-sort';

describe('Merge Sort Tests', () => {
  test('Merge Sort returns correctly sorted arrays:', () => {
    const a1 = [2, 1, 5, 6, 7];
    const a2 = [];
    const a3 = [2, 1];
    const a4 = [1];
    const a5 = [1, 3, 6, 8, 9, 7, 4, 2, 2, 5];

    expect(mergeSort(a1)).toEqual([1, 2, 5, 6, 7]);
    expect(mergeSort(a2)).toEqual([]);
    expect(mergeSort(a3)).toEqual([1, 2]);
    expect(mergeSort(a4)).toEqual([1]);
    expect(mergeSort(a5)).toEqual([1, 2, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
