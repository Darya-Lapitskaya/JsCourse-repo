class GameRoom {
    constructor(location, budget = 0, pricePerKid=0) {
        this.location = location;
        this.budget = budget;
        this.pricePerKid = pricePerKid;
        this.toysPool = [];
        this.kidsPool = [];
    }

    get budget() {
        return this._budget;
    }

    get location() {
        return this._location;
    }

    set location(location) {
        this._location = location;
    }

    set budget(budget) {
        this._budget = budget;
    }

    get pricePerKid() {
        return this._pricePerKid;
    }

    set pricePerKid(pricePerKid) {
        this._pricePerKid = pricePerKid;
    }

    addBudget(additionalBudget) {
        this.budget = this.budget + additionalBudget;
    }

    addToys(toy) {
        this.toysPool.push(toy);
    }

    addKid(kid) {
        this.kidsPool.push(kid);
        this.budget = this.budget+this.pricePerKid;
    }


}

module.exports = GameRoom;
