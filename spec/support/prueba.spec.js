describe('Testing jasmine', () => {
    describe('Identity', () => {
        it('6 should be 6', () => {
            let a = 6;
            expect(a).toBe(6);
        });
        it('String 6 should not be equal 6', () => {
            let a = '6';
            expect(a).not.toEqual(6);
        });
        it('Obj should be equal another obj', () => {
            let foo = {a: 12, b: 34};
            let bar = {a: 12,b: 34};
            expect(foo).toEqual(bar);
        });
    });
});

