const { asyncCallback, asyncPromise } = require('../async.js')

describe('Promises', () => {
    it('Should', () => {
        spyOn(console, 'log');
        asyncPromise().then(
            (msg) => {
                console.log(msg);
                expect(console.log).toHaveBeenCalled();
            }
        )
    })
});
