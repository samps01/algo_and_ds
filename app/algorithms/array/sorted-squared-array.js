/**
 * +++++++++++THE PROBLEM+++++++++++++:
 *
 * You have a sorted array of integers.
 * Write a function that returns a sorted array containing the squares of those integers
 *
 * NOTE: Input will be sorted -> Output should be sorted
 *
 * eg: [-7, -3, -1, 4, 8, 12] -> [1, 9, 16, 49, 64, 144]
 *
 */

/**
 * Method to square the numbers
 * @param num
 * @returns {number}
 */
export function squareOf(num) {
    return num * num;
}

/**
 *
 * @param {number[]}
 * @returns {number[]}
 */
export function sortedSquaredArray(arr) {
    if (arr.length === 0) {
        return [];
    }
    const result = [];
    let front = 0;
    let back = arr.length - 1;

    while (front <= back) {
        if (Math.abs(arr[front]) > Math.abs(arr[back])) {
            result.push(squareOf(arr[front]));
            front++;
        } else {
            result.push(squareOf(arr[back]));
            back--;
        }
    }
    return result.reverse();
}

const arr = [-7, -3, -1, 4, 8, 12];
// const arr1 = [-4, 1, 0, 3, 10];

sortedSquaredArray(arr);
