import  {assert, expect} from 'chai';
import maxSumSubArray from "./app/algorithms/max-sum-subarray";


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
});