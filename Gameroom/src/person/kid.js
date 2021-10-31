const Person = require('./person');

class Kid extends Person {
    constructor(name, surname, dateOfBirth) {
        super(name, surname, dateOfBirth);
        this.category = 'Not set';
        this.parentsPool = [];
    }

    set category(category) {
        this._category = category;
    }

    get category() {
        return this._category;
    }

    addParent(parent) {
        if (this.parentsPool.length < 2) {
            this.parentsPool.push(parent);
        } else { console.log('Kid cannot have more than 2 parents'); }
    }

}

module.exports = Kid;

