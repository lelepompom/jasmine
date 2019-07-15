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

    describe('Boolean', () => {
        it('should be true', () => {
            let a = 6;
            expect(a === 6).toBeTruthy();
        });
        it('should be false', () => {
            let a = 6;
            expect(a !== 6).toBeFalsy();
        });
        it('should be null', () => {
            let a = null;
            expect(a).toBeNull();
        });
        it('should be NaN', () => {
            let a = 0, b = 0;
            expect(a/b).toBeNaN();
        });
        it('should be defined', () => {
            let a = {name: 'Ana'};
            expect(a.name).toBeDefined();
            expect(a.age).not.toBeDefined();
        });
        it('should compare', () => {
            let a = 20, b = 40;
            expect(b).toBeGreaterThan(a);
            expect(a).toBeLessThan(b);
        });
        it('should include', () => {
            let a = 'Hello world';
            expect(a).toMatch(/ello/);
        });

    });

    describe('Containers', () => {
        it('Array should contain item', () => {
            let data = ['pepe', 'juan', 'rosa'];
            expect(data).toContain('rosa');
        });
        it('String should contain substr', () => {
            let text = 'This is my text';
            expect(text).toContain('ext');
        });
    });

    describe('Catch errors', () => {
        it('Should be an error', () => {
            expect(() => {
                throw new Error('Testing error');
            }).toThrow();
        });
        it('Should be known error', () => {
            expect(() => {
                throw new Error('Error name');
            }).toThrowError('Error name');
        });
    });
});

