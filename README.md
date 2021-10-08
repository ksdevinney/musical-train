# Computer Science Algorithms

## [Binary Search](https://github.com/ksdevinney/musical-train/blob/main/binary-search.js)

Search method that allows you to quickly search for an element in an array. By dividing the array in half, you can search much more efficiently than by checking every element in order. First, you find the middle of the array. Next, you determine if the value you are searching for is greater or less than the midpoint. The search continues on the other half of the array; you eliminate roughly half of the values each time until the value is found (or not). If the value is in the array, this function will return the index of the value.

[Tutorial from Leigh Halliday](https://www.youtube.com/watch?v=7lGiPItOVCM)

## [Selection Sort](https://github.com/ksdevinney/musical-train/blob/main/selection-sort.js)

This sorting algorithm orders an array of numbers by traversing through and swapping values. The first traversal through the array, we will find the smallest value and swap it with the first element. On the next traversal, we will again look for the smallest value and swap it with the second element. This continues until the array is sorted.

[Tutorial from Justin Kim](https://www.youtube.com/watch?v=9jwm_9lOHu0)

## [Bubble Sort](https://github.com/ksdevinney/musical-train/blob/main/bubble-sort.js)

The bubble sort uses nested for loops to swap elements in an array. This allows larger numbers to "bubble" up to the end. Because this sort uses nested loops, it is one of the least efficient algorithms, with a complexity of O(n^2). 

[Tutorial from Adam Coder](https://www.youtube.com/watch?v=CIomaG_PDvM)

## Insertion Sort

An insertion sort works by inserting a value in front of values that are larger. This type of sort will ignore the first value in an array (as it is sorted correctly at that moment) and compare the next value to the one before it. If the value is smaller than the previous value, it will be inserted in front of values that are larger. 

[Programming with Mosh](https://www.youtube.com/watch?v=nKzEJWbkPbQ) - explanation + code in Java

#### [Helpful Visualization](https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html)