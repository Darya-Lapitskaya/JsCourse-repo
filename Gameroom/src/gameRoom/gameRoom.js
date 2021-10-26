class GameRoom {
    constructor(location, budget = 0) {
        this.location = location;
        this.budget= budget
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
    addBudget(additionalBudget) {
        this.budget = this.budget + additionalBudget;
    }

}

module.exports = GameRoom;
