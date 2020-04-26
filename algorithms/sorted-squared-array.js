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
 **/

/**
 *
 * @param {number[]}
 * @returns {number[]}
 */
function sortedSquaredArray(arr) {
    if (arr.length == 0) {
        return [];
    }
    let result = [];
    let front = 0;
    let back = arr.length - 1;

    while (front <= back) {
        if (Math.abs(arr[front]) > Math.abs(arr[back])) {
            result.push(square(arr[front]));
            front++;
        } else {
            result.push(square(arr[back]));
            back--;
        }
    }
    return result.reverse();
}

/**
 * Method to square the numbers
 * @param num
 * @returns {number}
 */
function square(num) {
    return num * num;
}

let arr = [-7, -3, -1, 4, 8, 12];
let arr1 = [-4,-1,0,3,10];

console.log(sortedSquaredArray(arr));