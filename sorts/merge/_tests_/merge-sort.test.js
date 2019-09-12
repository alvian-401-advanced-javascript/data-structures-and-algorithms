'use strict';

const mergeSort = require('../merge-sort.js');

describe('mergeSort', () => {
  it('should return a sorted array with no changes', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    expect(mergeSort(arr)).toEqual(arr);
  });
  it('should return a backwards-sorted array in sorted order', () => {
    const backwards = [7, 6, 5, 4, 3, 2, 1];
    const sorted = [1, 2, 3, 4, 5, 6, 7]
    expect(mergeSort(backwards)).toEqual(sorted);
  });
  it('should return an empty array argument unchanged', () => {
    const empty = [];
    expect(mergeSort(empty)).toEqual(empty);
  });
  it('should return a single-element array unchanged', () => {
    const one = [1];
    expect(mergeSort(one)).toEqual(one);
  });
});