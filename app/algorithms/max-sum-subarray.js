/**
 * Find max sum subarray from the given Array
 * Method 1 - Kadane's algorithm
 */


const inputArr = [5, 7, -3, 2, 9, 6, 16, 22, 21, 29, -14, 10, 12];

export default function maxSumSubArray(arr) {
    if (arr.length === 0) {
        return null;
    }

    let maxSum = arr[0];
    let currentSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(currentSum, maxSum);
    }
    return maxSum;
}

maxSumSubArray(inputArr);

// TODO: Add method to return indices
// TODO: Add test cases
