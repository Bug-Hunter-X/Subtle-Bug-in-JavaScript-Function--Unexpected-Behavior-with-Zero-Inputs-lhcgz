# Subtle Bug in JavaScript Function: Unexpected Behavior with Zero Inputs

This repository demonstrates a subtle bug in a simple JavaScript function. The function `foo` aims to add two numbers but exhibits unexpected behavior when both inputs are zero.

## Bug Description

The function `foo` has a subtle bug related to how it handles the case where both inputs `a` and `b` are 0. The error is not obvious and can lead to unexpected behavior in certain scenarios.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js`.
3. Run the code in a JavaScript environment (e.g., Node.js, browser's console).
4. Observe the output. The function returns 0 when both inputs are 0, which might not be the intended behavior in some situations.

## Solution

The `bugSolution.js` file provides a corrected version of the function, addressing the subtle error.  See the file for the solution.

## Lessons Learned

This example illustrates the importance of thorough testing and careful consideration of edge cases when writing functions, especially those involving comparisons with 0 or null values.