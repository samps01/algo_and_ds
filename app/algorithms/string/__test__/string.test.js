import { describe } from 'mocha';
import minimumWindowSubstring from '../minimum-window-substring';

const { assert, expect } = require('chai');


describe('String', () => {
    describe('minimumWindowSubstring', () => {
        const inputs = [
            {
                input: ['ADOBECODEBBAANCC', 'ABC'],
                output: 'BAANC',

            },
            {
                input: ['AA', 'AA'],
                output: 'AA',
            },
            {
                input: ['Samson', 'XYZ'],
                output: '',
            },
        ];

        inputs.forEach((inputObj) => {
            it(`Should return ${inputObj.output ? inputObj.output : 'Empty string'} for ${inputObj.input}`, () => {
                const result = minimumWindowSubstring(...inputObj.input);
                expect(result).to.be.equal(inputObj.output);
            });
        });
    });
});
