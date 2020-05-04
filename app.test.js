import  {assert, expect} from 'chai';
import maxSumSubArray from "./app/algorithms/max-sum-subarray";
import {squareOf, sortedSquaredArray} from "./app/algorithms/sorted-squared-array";


describe('Algorithms', () => {

    /**
     * Testing maxSumSubArray
     */
    describe('maxSumSubArray', () => {
        const inputs = [
            {
                input: [-2,1,-3,4,-1,2,1,-5,4],
                output: 6
            },
            {
                input: [5, 7, -3, 2, 9, 6, 16, 22, 21, 29, -14, 10, 12],
                output: 122
            }
        ]

        inputs.forEach(inputObj => {
            it(`Should be equal to ${inputObj.output}`, () => {
                const result = maxSumSubArray(inputObj.input);
                assert.equal(result, inputObj.output);
            })
        })
    });

    describe('sorted-squared-array', () => {
       const inputs = [
           {
               input: [-7, -3, -1, 4, 8, 12],
               output: [1, 9, 16, 49, 64, 144]
           }
       ]

       it(`Should return square of numbers`, () => {
           const value = squareOf(2);
           assert.equal(value, 4);
       });

       inputs.forEach(inputObj => {
           it(`should return sorted squared array of ${inputObj.output}`, () => {
               const result = sortedSquaredArray(inputObj.input);
               expect(result).to.eql(inputObj.output);
           })
       })
    });
});