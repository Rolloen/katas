import { coordinatesInterface, setLightsArray } from './christmasLight';

describe('christmasLigh kata', () => {
    describe('Step 1 : arrays initialization testing', () => {
        it('should have an array with 1000 element given no coordinates', ()=> {
            //GIVEN
            const {lightArray} = setLightsArray();
            //THEN
            expect(lightArray.length).toBe(1000);
        });
        it('should have an array that contains arrays of size 1000 that contains "." given no coordinates ', () => {
            //GIVEN
            const { lightArray } = setLightsArray();
            const expectElement = new Array<string>(1000).fill(".");
            //THEN
            expect(lightArray).toContain(expectElement);
        });
    })
    describe('Step 2 : Turn on light function', () => {
        it('should have 10 light turned on given coordinates start={x:0,y:0}; end={x:4,y:1} and type="turnOn"', ()=> {
            //GIVEN
            const type = 'turnOn';
            const start : coordinatesInterface = {
                x: 0,
                y:0
            }
            const end : coordinatesInterface = {
                x: 4,
                y:1
            }
            //WHEN
            const { nbOfLightOn } = setLightsArray(start, end, type);
            //THEN
            expect(nbOfLightOn).toBe(10);
        });
        it('should have 1000 light turned on given coordinates start={x:0,y:0}; end={x:999,y:0} and type="turnOn"', ()=> {
            //GIVEN
            const type = 'turnOn';
            const start : coordinatesInterface = {
                x: 0,
                y:0
            }
            const end : coordinatesInterface = {
                x: 999,
                y: 0
            }
            //WHEN
            const { nbOfLightOn } = setLightsArray(start, end, type);
            //THEN
            expect(nbOfLightOn).toBe(1000);
        });
        it('should have 1000000 light turned on given coordinates start={x:0,y:0}; end={x:999,y:999} and type="turnOn"', ()=> {
            //GIVEN
            const type = 'turnOn';
            const start : coordinatesInterface = {
                x: 0,
                y:0
            }
            const end : coordinatesInterface = {
                x: 999,
                y: 999
            }
            //WHEN
            const { nbOfLightOn } = setLightsArray(start, end, type);
            //THEN
            expect(nbOfLightOn).toBe(1000000);
        });
    })
})    