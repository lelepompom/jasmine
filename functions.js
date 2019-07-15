function add(a,b) {
    if(isNaN(a) || isNaN(b)) {
        throw new Error('Number parameters are mandatory');
    }
    return a + b;
}

module.exports = {}
module.exports.add = add
