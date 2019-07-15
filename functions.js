function add(a,b) {
    if(isNaN(a) || isNaN(b)) {
        throw new Error('Number parameters are mandatory');
    }
    return a + b;
}

function isValidNumber(a) {
    return typeof(a) === "number";
}

module.exports = {}
module.exports.add = add
module.exports.isValidNumber = isValidNumber;
