module.exports = class Persona {
    constructor(name) {
        this.name = name;
        this._check();
    }

    get fullname() {
        return `${this.name} Pérez`;
    }

    _check() {
        this.bool = true;
    }

    _welcome() {
        const str = `Hi, ${this.name}!`;
        console.log(str);
        return str;
    }
}