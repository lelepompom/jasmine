const { add } = require('../../functions.js')

describe('Testing functions exported', () => {
    it('Should add', () => {
        expect(add(2,2)).toBe(4);
    });
    it('Should throw err', () => {
        expect(() => add(2) ).toThrow();
    });
});
