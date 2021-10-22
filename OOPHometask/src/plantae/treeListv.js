const Plantae = require("./plantae");

class TreeListv extends Plantae {
    constructor(height, color) {
        super(height);
        this.color = color;

    }
    getColor() {
        return this.color;
    }
}

module.exports = TreeListv;