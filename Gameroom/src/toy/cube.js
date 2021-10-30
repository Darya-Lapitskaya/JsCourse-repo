//const Toy = require('Gameroom\src\toy\toy.js');

class Cube extends Toy {
    constructor(price, size, ageCategory, material, color, manufacturer, type) {
        super(price, size, ageCategory, material, color, manufacturer);
        this.type = type;

    }
    get type() {
        return this._type;
    }

    set type(type) {
        this._type = type;
    }

}

module.exports = Cube;