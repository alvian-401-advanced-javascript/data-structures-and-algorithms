## Sorts: Implement Quick Sort
[![Build Status](https://www.travis-ci.com/alvian-401-advanced-javascript/data-structures-and-algorithms.svg?branch=master)](https://www.travis-ci.com/alvian-401-advanced-javascript/data-structures-and-algorithms)

# Insertion Sort

## Challenge
* Write a function for merge sort that takes in an unsorted array and returns the array sorted using insertion sort.

## Approach & Efficiency
* Quick Sort is a divide and conquer algorithm. It creates two empty arrays to hold elements less than the pivot value and elements greater than the pivot value, and then recursively sort the sub arrays. There are two basic operations in the algorithm, swapping items in place and partitioning a section of the array. 

1) Find a “pivot” item in the array. This item is the basis for comparison for a single round. 
2) Start a pointer (the left pointer) at the first item in the array. 
3) Start a pointer (the right pointer) at the last item in the array. 
4) While the value at the left pointer in the array is less than the pivot value, move the left pointer to the right (add 1). Continue until the value at the left pointer is greater than or equal to the pivot value. 
5) While the value at the right pointer in the array is greater than the pivot value, move the right pointer to the left (subtract 1). Continue until the value at the right pointer is less than or equal to the pivot value. 
6) If the left pointer is less than or equal to the right pointer, then swap the values at these locations in the array. 
7) Move the left pointer to the right by one and the right pointer to the left by one. 
8) If the left pointer and right pointer don’t meet, go to step 1. 
 



## UML
N/A
