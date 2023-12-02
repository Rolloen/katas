"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('christmasLigh kata', () => {
    describe('Step 1 : arrays testing', () => {
        it('should have an array with 1000 element', () => {
            //GIVEN
            const testestArray = (0, index_1.setLightsArray)();
            //THEN
            expect(testestArray.length).toBe(1000);
        });
    });
});
//# sourceMappingURL=index.spec.js.map