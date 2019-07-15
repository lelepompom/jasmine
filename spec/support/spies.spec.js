let calculator = {
    multiply: (a,b) => a*b,
    square: function (a) {
        return this.multiply(a,a)
    }
}

describe('Calculator', () => {
    it('Square by muliplying numbers itself', () => {
        let number = 7;
        spyOn(calculator, 'multiply');
        calculator.square(number);
        expect(calculator.multiply).toHaveBeenCalledWith(number, number);
    });
    it('Get Square', () => {
        expect(calculator.square(2)).toBe(4);
    });
});