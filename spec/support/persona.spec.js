const Persona = require('../../persona.js');

describe('Testing Personas', () => {
    let p;
    beforeEach(() => {
        p = new Persona('Mary');
    });

    it('Constructor should instanciate a new persona', () => {
        expect(p).toBeTruthy();
    });
    it('Constructor should check', () => {
        spyOn(Persona.prototype, '_check');
        const n = new Persona('Peter');
        expect(n._check).toHaveBeenCalled();
    });
    it('Constructor should welcome', () => {
        expect(p._welcome()).toContain(p.name);
        expect(p._welcome()).toMatch(p.name);
    });
    it('Should log', () => {
        spyOn(console, 'log');
        p._welcome();
        expect(console.log).toHaveBeenCalled();
    });
    it('Property should have been used', () => {
        const fullnameSpy = spyOnProperty(p, 'fullname', 'get');
        p.fullname;
        expect(fullnameSpy).toHaveBeenCalled();
    });
});

describe('Mock functions', () => {
    let projectArray;
    beforeEach(() => {
        projectArray = (data, callback) => {
            return data.map(callback);
        }
    });
    it('Should receive callback', () => {
        const mockFunc = jasmine.createSpy();
        const data = [1,2,3,4];
        projectArray(data, mockFunc);
        expect(mockFunc).toHaveBeenCalled();
    });
});