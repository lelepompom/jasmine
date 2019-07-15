const { add, isValidNumber } = require('../../functions.js')

describe('Testing functions exported', () => {
    it('Should add', () => {
        expect(add(2,2)).toBe(4);
    });
    it('Should add', () => {
        expect(add(2.2,-2)).toBeCloseTo(.2);
    });
    it('Should throw err', () => {
        expect(() => add(2) ).toThrow();
    });
});

describe('Testing isValidNumber', () => {
    const validNumericArray = [0, 2, -2, 2.2, -2.2];
    const validStringArray = ['0', '2', '-2', '2.2', '-2.2'];
    const invalidArray = ['pepe', true, '', null, undefined, [], {}];
    
    validNumericArray.forEach((item) => {
        it('Number should be true', () => {
            expect(isValidNumber(item)).toBe(true);
            expect(isValidNumber(item)).toBeTruthy();
        });
    });
    
    validStringArray.forEach((item) => {
        it('Stringify numbers should be true', () => {
            expect(isValidNumber(parseFloat(item))).toBe(true);
            expect(isValidNumber(parseFloat(item))).toBeTruthy();
        });
    });
    
    invalidArray.forEach((item) => {
        it('Not number el should be false', () => {
            expect(isValidNumber(item)).toBe(false);
            expect(isValidNumber(item)).toBeFalsy();
        });
    });

});
