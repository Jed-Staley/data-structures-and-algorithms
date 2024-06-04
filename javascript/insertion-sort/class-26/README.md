# Blog Article: Insertion Sort Detailed Walkthrough

## Introduction

Insertion Sort is a straightforward and intuitive sorting technique. It sorts an array by iteratively inserting each element into its appropriate position. In this post, we'll dissect the Insertion Sort algorithm with a sample array, demonstrating each step to grasp its operation.

## Pseudocode for Insertion Sort

## Tracing the Algorithm with Sample Array [8, 4, 23, 42, 16, 15]

We'll trace the Insertion Sort using the array [8, 4, 23, 42, 16, 15].

### Initial State:

- **Input Array:** [8, 4, 23, 42, 16, 15]
- **Sorted Array:** []

### Iteration 1

- **sorted = [8]**
- **Inserting 4:**
  - Compare 4 with 8: 4 < 8
  - Insert 4 before 8
- **sorted = [4, 8]**

### Iteration 2

- **sorted = [4, 8]**
- **Inserting 23:**
  - Compare 23 with 4: 23 > 4
  - Compare 23 with 8: 23 > 8
  - Insert 23 at the end
- **sorted = [4, 8, 23]**

### Iteration 3

- **sorted = [4, 8, 23]**
- **Inserting 42:**
  - Compare 42 with 4: 42 > 4
  - Compare 42 with 8: 42 > 8
  - Compare 42 with 23: 42 > 23
  - Insert 42 at the end
- **sorted = [4, 8, 23, 42]**

### Iteration 4

- **sorted = [4, 8, 23, 42]**
- **Inserting 16:**
  - Compare 16 with 4: 16 > 4
  - Compare 16 with 8: 16 > 8
  - Compare 16 with 23: 16 < 23
  - Insert 16 before 23
- **sorted = [4, 8, 16, 23, 42]**

### Iteration 5

- **sorted = [4, 8, 16, 23, 42]**
- **Inserting 15:**
  - Compare 15 with 4: 15 > 4
  - Compare 15 with 8: 15 > 8
  - Compare 15 with 16: 15 < 16
  - Insert 15 before 16
- **sorted = [4, 8, 15, 16, 23, 42]**

## Visual Step-by-Step Output

- **Initial:** [8, 4, 23, 42, 16, 15]
- **Step 1:** [4, 8, 23, 42, 16, 15]
- **Step 2:** [4, 8, 23, 42, 16, 15]
- **Step 3:** [4, 8, 23, 42, 16, 15]
- **Step 4:** [4, 8, 16, 23, 42, 15]
- **Step 5:** [4, 8, 15, 16, 23, 42]

## Conclusion

Insertion Sort is a basic sorting method that is easy to code and comprehend. It excels with small arrays or arrays that are almost sorted. By breaking down the algorithm with sample arrays, we observe how elements are repositioned to achieve a sorted sequence.
