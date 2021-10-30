class GameRoom {
    constructor(location, budget = 0, pricePerKid = 0) {
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

    addBudget(budget) {
        this.budget = this.budget + budget;
    }

    addKidsPool(kids) {
        this.kidsPool = [...this.kidsPool, ...kids];
    }

    toysFilterByPrice(price) {
        return this.toysPool.find((toy) => toy.budget >= price);
    }
}

module.exports = GameRoom;
