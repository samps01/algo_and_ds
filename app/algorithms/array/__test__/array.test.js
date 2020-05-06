import { describe } from 'mocha';
import { sortedSquaredArray, squareOf } from '../sorted-squared-array';
import maxSumSubArray from '../max-sum-subarray';
import removeDuplicates from "../remove-duplicates-from-sorted-array";

const { assert, expect } = require('chai');

describe('Arrays', () => {
    /**
     * Testing maxSumSubArray
     */
    describe('maxSumSubArray', () => {
        const inputs = [
            {
                input: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
                output: 6,
            },
            {
                input: [5, 7, -3, 2, 9, 6, 16, 22, 21, 29, -14, 10, 12],
                output: 122,
            },
        ];

        inputs.forEach((inputObj) => {
            it(`Should be equal to ${inputObj.output} for ${inputObj.input}`, () => {
                const result = maxSumSubArray(inputObj.input);
                assert.equal(result, inputObj.output);
            });
        });
    });

    describe('sorted-squared-array', () => {
        const inputs = [
            {
                input: [-7, -3, -1, 4, 8, 12],
                output: [1, 9, 16, 49, 64, 144],
            },
        ];

        it('Should return square of numbers', () => {
            const value = squareOf(2);
            assert.equal(value, 4);
        });

        inputs.forEach((inputObj) => {
            it(`Should return sorted squared array of ${inputObj.output} for ${inputObj.input}`, () => {
                const result = sortedSquaredArray(inputObj.input);
                expect(result).to.eql(inputObj.output);
            });
        });
    });

    describe('remove-duplicates-from-sorted-Array', () => {
       const inputs = [
           {
               input: [0,0,1,1,1,2,2,3,3,4],
               output: {
                   length: 5,
                   modArr: [0,1,2,3,4]
               }
           },
           {
               input: [1,1,2],
               output: {
                   length: 2,
                   modArr: [1,2]
               }
           }
       ];

       inputs.forEach(inputObj => {
           it(`Should return length ${inputObj.output.length} for ${inputObj.input}`, () => {
               const length = removeDuplicates(Array.from(inputObj.input));
               expect(length).to.be.equal(inputObj.output.length);
           });

           it(`Should modify the array in place - ${inputObj.output.modArr} should be the first ${inputObj.output.length} elements`, () => {
              const length = removeDuplicates(inputObj.input);
              const resultArr = inputObj.input.slice(0, length);
              expect(resultArr).to.eql(inputObj.output.modArr);
           });
       })
    });
});
