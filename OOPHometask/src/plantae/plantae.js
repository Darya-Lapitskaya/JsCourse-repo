class Plantae {
    constructor(height,) {
        this.height = height;

    }

    calculateHeight(height) {
        this.height = this.height + height;

    }

    toString(){
        return `The tree has ${this.height} `
    }

}

module.exports = Plantae;