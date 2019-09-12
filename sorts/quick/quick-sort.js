'use strict';

const quickSort = arr => {
  if(arr.length <= 1) {return arr}

  const pivot = arr[arr.length -1]; //using the last number in arr as a pivot
                                    //anything greater than this number will go in the right arr
                                    //anything less than this number will go into the left arr
  const left = [];
  const right = [];

  for(let i = 0; i < arr.length -1; i++) { // the last number is the pivot, so it's excluded from our loop
    if (arr[i] < pivot) {
      left.push(arr[i]);
    }
    else { right.push(arr[i]) }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}

module.exports = quickSort;