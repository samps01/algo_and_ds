import { describe } from 'mocha';
import { sortedSquaredArray, squareOf } from '../sorted-squared-array';
import maxSumSubArray from '../max-sum-subarray';

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
            it(`should return sorted squared array of ${inputObj.output} for ${inputObj.input}`, () => {
                const result = sortedSquaredArray(inputObj.input);
                expect(result).to.eql(inputObj.output);
            });
        });
    });
});
