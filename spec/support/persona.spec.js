const Persona = require('../../persona.js');

describe('Testing Personas', () => {
    it('Constructor should instanciate a new persona', () => {
        const p = new Persona('Mary');
        expect(p).toBeTruthy();
    });
    it('Constructor should check', () => {
        let p;
        spyOn(Persona.prototype, '_check');
        p = new Persona();
        expect(p._check).toHaveBeenCalled();
    });
    it('Constructor should welcome', () => {
        let p = new Persona('Jose');
        expect(p._welcome()).toContain(p.name);
        expect(p._welcome()).toMatch(p.name);
    });
});