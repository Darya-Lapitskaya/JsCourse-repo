const Plantae = require("./plantae");

class TreeHvoya extends Plantae {
    constructor(height, flavor) {
        super(height);
        this.flavor = flavor;

    }

    getFlavor() {
        return this.flavor;
    }

    geHeight() {
        return this.height;
    }

    toString(){
        return `The tree with ${this.height} has flavor ${this.flavor}`
    }
}

module.exports = TreeHvoya;