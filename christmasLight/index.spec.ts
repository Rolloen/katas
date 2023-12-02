import { setLightsArray } from './index';

describe('christmasLigh kata', () => {
    describe('Step 1 : arrays testing', () => {
        it('should have an array with 1000 element', ()=> {
            //GIVEN
            const testestArray = setLightsArray();
            //THEN
            expect(testestArray.length).toBe(1000);
        })
    })
})    