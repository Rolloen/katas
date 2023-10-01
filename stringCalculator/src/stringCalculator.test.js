import Add from './stringCalculator';

describe ('string calculator tests', () => {
    it ('Given empty string return 0', () => {
        //Given
        const empty = "";
        //When
        const returnedAddition = Add(empty);
        //Then
        expect(returnedAddition).toBe(0);
    });

    it ('Given "1" string return 1', () => {
        //Given
        const oneString = "1";
        //When
        const returnedAddition = Add(oneString);
        //Then
        expect(returnedAddition).toBe(1);
    });

    it ('Given "1,2" string return 3', () => {
        //Given
        const oneAndTwoString = "1,2";
        //When
        const returnedAddition = Add(oneAndTwoString);
        //Then
        expect(returnedAddition).toBe(3);
    });

    it ('Given "1,2,3,4" string return 10', () => {
        //Given
        const oneToFourString = "1,2,3,4";
        //When
        const returnedAddition = Add(oneToFourString);
        //Then
        expect(returnedAddition).toBe(10);
    });

    it ('Given "1,2\n3" string return 6', () => {
        //Given
        const oneToThreeString = "1,2\n3";
        //When
        const returnedAddition = Add(oneToThreeString);
        //Then
        expect(returnedAddition).toBe(6);
    });

    it ('Given "1,\n" string return NaN', () => {
        //Given
        const oneToFailString = "1,\n";
        //When
        const returnedAddition = Add(oneToFailString);
        //Then
        expect(returnedAddition).toBe(NaN);
    });

    describe('Step 4 : different delimiter', () => {
        it('Given "//;\n1;2;3" string should return 6', () => {
            //Given
            const stringCalc = "//;\n1;2;3";
            //When
            const returnedAddition = Add(stringCalc);
            //Then
            expect(returnedAddition).toBe(6);
        });
        
        it('Given "//&\n1&2" string should return 3', () => {
            //Given
            const stringCalc = "//&\n1&2";
            //When
            const returnedAddition = Add(stringCalc);
            //Then
            expect(returnedAddition).toBe(3);
        });
        
    });
    describe('Step 5 : negative numbers', () => {
        it('Given "-1,2,3" string should throw error "negatives not allowed : -1"', () => {
            let expectedError = new Error('negatives not allowed : -1');
            let thrownErr;
            //Given
            const stringCalc = "-1,2,3";
            //When
            try {
                Add(stringCalc);
            } catch (error) {
                thrownErr = error;
            }
            //Then
            expect(thrownErr).toEqual(expectedError);
        });

        it('Given "-1,2,-3" string should throw error "negatives not allowed : -1,-3"', () => {
            let expectedError = new Error('negatives not allowed : -1,-3');
            let thrownErr;
            //Given
            const stringCalc = "-1,2,-3";
            //When
            try {
                Add(stringCalc);
            } catch (error) {
                thrownErr = error;
            }
            //Then
            expect(thrownErr).toEqual(expectedError);
        });
    });
    describe('Step 6 : big numbers should be ignored', () => {
        it('Given "1,2,10000" string should return number 3', () => {
            //Given
            const stringCalc = "1,2,10000";
            //When
            let res = Add(stringCalc);
            //Then
            expect(res).toEqual(3);
        });
    });
    
});