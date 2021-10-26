const Person = require('./person');

class Kid extends Person {
    constructor(name, surname, dateOfBirth) {
        super(name, surname, dateOfBirth);
        this.category = 'Not set';
    }

    set category(category) {
        this._category = category;
    }

    get category() {
        return this._category;
    }

}

module.exports = Kid;

