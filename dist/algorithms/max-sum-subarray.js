"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = maxSumSubArray;
/**
 * Find max sum subarray from the given Array
 * Method 1 - Kadane's algorithm
 */

var inputArr = [5, 7, -3, 2, 9, 6, 16, 22, 21, 29, -14, 10, 12];

function maxSumSubArray(arr) {
    if (arr.length === 0) {
        return null;
    }

    var maxSum = arr[0];
    var currentSum = arr[0];

    for (var i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(currentSum, maxSum);
    }
    return maxSum;
}

maxSumSubArray(inputArr);

// TODO: Add method to return indices
// TODO: Add test cases