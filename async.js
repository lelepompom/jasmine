function asyncCallback(callback) {
    let msg = 'Ready!'
    setTimeout(() => callback(msg), 2000);
}

function asyncPromise() {
    return new Promise((resolve, reject) => {
        let msg = 'Resolved!'
        setTimeout(() => resolve(msg), 3000);
    });
}

asyncCallback((msg) => console.log(msg));
asyncPromise().then((msg) => console.log(msg));

(async () => {
    let msg = await asyncPromise;
})();

module.exports = {}
module.exports.asyncCallback = asyncCallback;
module.exports.asyncPromise = asyncPromise;