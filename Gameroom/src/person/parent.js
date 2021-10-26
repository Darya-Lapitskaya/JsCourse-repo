const Person = require('./person');

class Parent extends Person {
    constructor(name, surname, dateOfBirth) {
        super(name, surname, dateOfBirth);
        this.child;
    }

    addChild(child) {
        this._child = child;
    }

    get child() {
        return this._child;
    }

}

module.exports = Parent;

