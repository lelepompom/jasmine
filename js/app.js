describe('DOM access', () => {
    it('Should read DOM', () => {
        let a = document.querySelector('#output');
        expect(a.textContent).toBe('Hello');
    });
});
