import { setLightsArray } from './christmasLight';

describe('christmasLigh kata', () => {
    describe('Step 1 : arrays initialization testing', () => {
        it('should have an array with 1000 element given no coordinates', ()=> {
            //GIVEN
            const testedArray = setLightsArray();
            //THEN
            expect(testedArray.length).toBe(1000);
        });
        it('should have an array that contains arrays of size 1000 that contains "." given no coordinates ', () => {
            //GIVEN
            const testedArray = setLightsArray();
            const expectElement = new Array<string>(1000).fill(".");
            //THEN
            expect(testedArray).toContain(expectElement);
        });
    })
    describe('Step 2 : Turn on light function', () => {
        it('should have an array with 1000 element given no coordinates', ()=> {
            //GIVEN
            const testedArray = setLightsArray();
            //THEN
            expect(testedArray.length).toBe(1000);
        });
        it('should have an array that contains arrays of size 1000 that contains "." given no coordinates ', () => {
            //GIVEN
            const testedArray = setLightsArray();
            const expectElement = new Array<string>(1000).fill(".");
            //THEN
            expect(testedArray).toContain(expectElement);
        });
    })
})    